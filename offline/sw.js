// The book's service worker: Mock Service Worker, which hands the requests to
// play.rust-lang.org to theme/offline-playground.js in the page, plus
// cross-origin isolation, plus a copy of the site for using it offline.
//
// The compiler's threads share memory (SharedArrayBuffer), which browsers only
// allow in cross-origin isolated pages: pages served with
// Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers. Static
// hosts often cannot set headers, so this worker adds them to the pages it
// loads, and adds the embedder policy to worker scripts, which an isolated
// page may only start if they have it too.
//
// The site's files are served from a cache named after the version of the
// course, which add-to-book.sh (manifest.mjs) stamps below: what was already
// fetched is served from it, the rest is fetched and kept. So the pages read
// and the toolchain work offline, and "Save for offline use"
// (offline/index.html) fills the cache with everything else. A new version
// keeps the files that did not change (offline/files.json has their hashes)
// and fetches the others as they are used.

const VERSION = "dev";
const CACHE_PREFIX = "course-";
const CACHE = CACHE_PREFIX + VERSION;
// The worker is at the root of the site.
const ROOT = new URL("./", self.location.href);
const MANIFEST = new URL("offline/files.json", ROOT).href;
// The browser keeps these itself.
const NOT_KEPT = new Set(["offline-sw.js", "mockServiceWorker.js"].map((p) => new URL(p, ROOT).href));
// "Save for offline use" fetches with this header and puts the files in the
// cache itself.
const SAVE_HEADER = "X-Offline-Save";

const ISOLATED_DESTINATIONS = new Set(["document", "iframe", "worker", "sharedworker"]);

function withIsolation(res, destination) {
  if (res.status === 0 || res.type === "opaqueredirect" || res.type === "opaque") {
    return res;
  }
  const headers = new Headers(res.headers);
  // `credentialless` rather than `require-corp`, so that cross-origin
  // scripts the course loads (analytics, cookie consent) keep working.
  headers.set("Cross-Origin-Embedder-Policy", "credentialless");
  if (destination === "document" || destination === "iframe") {
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
  }
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}

/** The cache key of a request for one of the site's files: its URL without
 *  the query (mdBook's search adds ?highlight=...), a directory as its
 *  index.html. Null for anything else. */
function fileKey(request) {
  if (VERSION === "dev" || (request.method !== "GET" && request.method !== "HEAD")) {
    return null;
  }
  const url = new URL(request.url);
  url.search = "";
  url.hash = "";
  if (url.pathname.endsWith("/")) {
    url.pathname += "index.html";
  }
  return url.href.startsWith(ROOT.href) && !NOT_KEPT.has(url.href) ? url.href : null;
}

/** The kept file, or else the file from the network, kept for next time.
 *  Null when neither has it. */
async function keptOrFetched(event, key) {
  const cache = await caches.open(CACHE);
  const kept = await cache.match(key);
  if (kept) {
    return event.request.method === "HEAD" ? new Response(null, kept) : kept;
  }
  if (event.request.method === "HEAD") {
    return fetch(event.request).catch(() => null);
  }
  let res;
  try {
    // Revalidated, so that a new version never keeps an old file from the
    // HTTP cache.
    res = await fetch(key, { cache: "no-cache" });
  } catch {
    return null;
  }
  if (res.redirected) {
    // A navigation may not take a followed redirect: let the browser follow it.
    return fetch(event.request);
  }
  if (res.ok) {
    event.waitUntil(cache.put(key, res.clone()));
  }
  return res;
}

/** The page for a page that is neither kept nor reachable. */
function notKept() {
  const help = new URL("offline/", ROOT).href;
  return new Response(`<!doctype html><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Not saved for offline use</title>
<body style="font: 16px/1.5 system-ui, sans-serif; max-width: 40em; margin: 2em auto; padding: 0 16px">
<h1 style="font-size: 22px">This page isn't saved for offline use</h1>
<p>You're offline, and this page of the course isn't saved in your browser.
Pages you have opened are kept; to keep all of them, save the course next time
you're online: see <a href="${help}">Using the course offline</a>.</p>
<p><a href="javascript:history.back()">Go back</a></p>`,
    { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  // book.js asks which crates the playground has as soon as a page loads,
  // and shows the Run buttons only once it hears back. Answer here, so the
  // answer never depends on the network or on the page having started MSW
  // yet. book.js only uses the list to hide Run on examples with an
  // `extern crate` line, which no example in the course has; programs can
  // still use the crates the toolchain has (tokio, anyhow, ...).
  if (request.url === "https://play.rust-lang.org/meta/crates") {
    event.stopImmediatePropagation();
    event.respondWith(Response.json({ crates: [] }));
    return;
  }
  const destination = request.mode === "navigate" ? "document" : request.destination;
  const key = fileKey(request);
  if (key && request.headers.has(SAVE_HEADER)) {
    event.stopImmediatePropagation();
    return; // straight to the network
  }
  if (key) {
    event.stopImmediatePropagation();
    event.respondWith(keptOrFetched(event, key).then((res) => {
      if (!res) {
        return destination === "document" ? notKept() : Response.error();
      }
      return ISOLATED_DESTINATIONS.has(destination) ? withIsolation(res, destination) : res;
    }));
    return;
  }
  if (!ISOLATED_DESTINATIONS.has(destination)) {
    return; // MSW's handler below
  }
  // MSW must not also respond to this request.
  event.stopImmediatePropagation();
  event.respondWith(fetch(request).then((res) => withIsolation(res, destination)));
});

/** Copy the files that did not change from the caches of older versions. */
async function keepUnchanged() {
  const res = await fetch(MANIFEST, { cache: "no-cache" });
  const manifest = await res.clone().json();
  if (manifest.version !== VERSION) {
    return; // an old copy of the list
  }
  const cache = await caches.open(CACHE);
  await cache.put(MANIFEST, res);
  for (const name of await caches.keys()) {
    if (name === CACHE || !name.startsWith(CACHE_PREFIX)) {
      continue;
    }
    const old = await caches.open(name);
    const oldManifest = await old.match(MANIFEST).then((r) => r?.json()).catch(() => null);
    if (!oldManifest) {
      continue;
    }
    const oldHashes = new Map(oldManifest.files.map((f) => [f.path, f.hash]));
    for (const f of manifest.files) {
      if (oldHashes.get(f.path) !== f.hash) {
        continue;
      }
      const url = new URL(f.path, ROOT).href;
      const kept = await old.match(url);
      if (kept && !(await cache.match(url))) {
        await cache.put(url, kept);
      }
    }
  }
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
  if (VERSION !== "dev") {
    // Without it the new version fetches everything again as it is used.
    event.waitUntil(keepUnchanged().catch((e) => console.warn("offline-sw: keeping files:", e)));
  }
});

self.addEventListener("activate", (event) => event.waitUntil((async () => {
  for (const name of await caches.keys()) {
    if (name.startsWith(CACHE_PREFIX) && name !== CACHE) {
      await caches.delete(name);
    }
  }
  await self.clients.claim();
})()));

importScripts("./mockServiceWorker.js");
