// Run the code examples in the browser instead of on play.rust-lang.org.
//
// `book.js` sends the code to https://play.rust-lang.org/execute. A service
// worker (Mock Service Worker, https://mswjs.io) intercepts that request and
// hands it to the handler below, which compiles and runs the code in this
// page: rustc, the linker and the program itself are wasm modules running in
// web workers (see the `offline/` directory of the built book).
//
// The compiler's threads share memory, which needs a cross-origin isolated
// page. The same service worker adds the headers for that, so the first
// visit reloads the page once.
//
// Without the `offline/` files (a normal build of the course) this script
// does nothing.
(function () {
  "use strict";

  const playgrounds = document.querySelectorAll(".playground");
  // The offline files are at the root of the site; translations are built
  // into subdirectories (/de/, /ja/, ...), one level below it. path_to_root
  // is "" on the pages at the top, which as a URL is the page itself, not its
  // directory: the root must be a directory, as it is the service worker's
  // scope.
  const toRoot = path_to_root || "./";
  let root = new URL(toRoot, location.href);
  let offline = new URL("offline/", root);

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = url;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`could not load ${url}`));
      document.head.append(s);
    });
  }

  // ---- The compiler, in a worker -------------------------------------------

  let kernel = null;
  let kernelStarted;
  const kernelReady = new Promise((resolve) => (kernelStarted = resolve));
  let nextId = 1;
  const runs = new Map();

  function startKernel() {
    kernel = new Worker(new URL("kernel/kernel-worker.js", offline), { type: "module" });
    kernel.onerror = () => {
      const text = "offline playground: the compiler worker failed to load";
      console.error(text);
      for (const run of runs.values()) {
        run.resolve({ error: text });
      }
      runs.clear();
    };
    kernelStarted();
    kernel.onmessage = (e) => {
      const m = e.data;
      if (m.type === "error" && m.id === undefined) {
        console.error(m.text);
        for (const run of runs.values()) {
          run.resolve({ error: m.text });
        }
        runs.clear();
        return;
      }
      const run = runs.get(m.id);
      if (!run) {
        return;
      }
      if (m.type === "output") {
        if (m.stream === "stdout") {
          run.stdout += m.text;
        } else {
          run.stderr += m.text;
        }
      } else if (m.type === "error") {
        runs.delete(m.id);
        run.resolve({ error: m.text });
      } else if (m.type === "done") {
        if (m.stage === "compile" && m.code === 0) {
          return;
        }
        runs.delete(m.id);
        if (m.timedOut) {
          run.stderr += `\nThe program ran for more than ${RUN_TIMEOUT_MS / 1000} s and was stopped.\n`;
        }
        // A panic ends in a trap (the standard library aborts); the panic
        // message says what happened, as on the playground.
        run.stderr = run.stderr.replace(/^error: the program trapped \(unreachable\)\n/m, "");
        run.resolve({
          success: m.code === 0,
          exitDetail: `Exited with status ${m.code}`,
          stdout: run.stdout,
          stderr: run.stderr,
        });
      }
    };
  }

  const RUN_TIMEOUT_MS = 10000;

  /** Handle a play.rust-lang.org `/execute` request in the browser. */
  async function execute(params) {
    await kernelReady;
    return new Promise((resolve) => {
      const id = nextId++;
      runs.set(id, { stdout: "", stderr: "", resolve });
      kernel.postMessage({
        type: "run",
        id,
        source: params.code,
        opt: params.mode === "release" ? 2 : 0,
        edition: params.edition || "2015",
        tests: !!params.tests,
        color: false,
        env: {},
        timeoutMs: RUN_TIMEOUT_MS,
      });
    });
  }

  // ---- Intercepting play.rust-lang.org --------------------------------------

  async function main() {
    await loadScript(new URL("msw.js", offline));
    const { setupWorker, http, HttpResponse } = window.MockServiceWorker;
    // (The service worker itself answers /meta/crates, which book.js asks
    // for before this has started.)
    const worker = setupWorker(
      http.post("https://play.rust-lang.org/execute", async ({ request }) =>
        HttpResponse.json(await execute(await request.json()))),
    );
    await worker.start({
      serviceWorker: {
        url: new URL("offline-sw.js", root).href,
        options: { scope: root.pathname },
      },
      onUnhandledRequest: "bypass",
      quiet: true,
    });

    if (!crossOriginIsolated) {
      // The service worker adds the headers that make the page cross-origin
      // isolated, but only to pages it loads: reload once.
      if (!sessionStorage.getItem("offline-playground-reloaded")) {
        sessionStorage.setItem("offline-playground-reloaded", "1");
        location.reload();
      } else {
        console.warn("offline playground: the page is not cross-origin isolated; " +
          "code examples will run on play.rust-lang.org");
        await worker.stop();
      }
      return;
    }
    sessionStorage.removeItem("offline-playground-reloaded");
    startKernel();
    // Examples now run in this page (tests and styles can check this).
    document.documentElement.dataset.offlinePlayground = "ready";
  }

  // Find the offline files, so that a normal build of the course keeps using
  // play.rust-lang.org. (The service worker keeps files.json, so this works
  // offline too.)
  async function findRoot() {
    for (const candidate of [toRoot, toRoot + "../"]) {
      const url = new URL(candidate, location.href);
      const res = await fetch(new URL("offline/files.json", url), { method: "HEAD" }).catch(() => null);
      if (res?.ok) {
        return url;
      }
    }
    return null;
  }

  /** Show the menu bar's link to "Using the course offline" (index.hbs). */
  function showOfflineLink() {
    const link = document.getElementById("offline-use");
    if (link) {
      const help = new URL("offline/", root);
      const lang = document.documentElement.lang;
      if (lang && lang !== "en") {
        help.searchParams.set("lang", lang);
      }
      link.href = help.href;
      link.hidden = false;
    }
  }

  // Every page shows the link, and has the service worker keep it for using
  // the course offline; pages with examples also run them in the browser.
  findRoot()
    .then((found) => {
      if (!found) {
        return;
      }
      root = found;
      offline = new URL("offline/", root);
      showOfflineLink();
      if (!("serviceWorker" in navigator)) {
        return;
      }
      if (playgrounds.length > 0) {
        return main();
      }
      return navigator.serviceWorker.register(new URL("offline-sw.js", root), { scope: root.pathname });
    })
    .catch((e) => console.error("offline playground:", e));
})();
