// A minimal Chrome DevTools Protocol client for the browser tests: start
// headless Chrome, open a page, evaluate expressions, listen to events.

import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import process from "node:process";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function launch() {
  const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const profile = mkdtempSync(join(tmpdir(), "course-chrome-"));
  const proc = spawn(chrome, [
    "--headless=new", "--remote-debugging-port=0", `--user-data-dir=${profile}`,
    "--no-first-run", "--no-default-browser-check", "about:blank",
  ], { stdio: ["ignore", "ignore", "pipe"] });
  const wsUrl = await new Promise((resolve, reject) => {
    let buf = "";
    proc.stderr.on("data", (d) => {
      buf += d;
      const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
      if (m) resolve(m[1]);
    });
    proc.on("exit", () => reject(new Error("chrome exited")));
  });

  const ws = new WebSocket(wsUrl);
  await new Promise((r) => (ws.onopen = r));
  let nextId = 1;
  const pending = new Map();
  const listeners = [];
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
    } else {
      for (const l of listeners) l(m);
    }
  };
  // A crashed or hung page never answers, so every call has a time limit.
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(new Error(`${method}: no answer from Chrome in 3 minutes`));
      }, 180000);
      pending.set(id, {
        resolve: (v) => { clearTimeout(timer); resolve(v); },
        reject: (e) => { clearTimeout(timer); reject(e); },
      });
      ws.send(JSON.stringify({ id, method, params, sessionId }));
    });

  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  await send("Runtime.enable", {}, sessionId);
  await send("Network.enable", {}, sessionId);

  return {
    /** Call `f(method, params)` for each event of the page. */
    on(f) {
      listeners.push((m) => m.sessionId === sessionId && f(m.method, m.params));
    },
    send: (method, params) => send(method, params, sessionId),
    /** Every message from Chrome, for any session (workers included). */
    raw(f) {
      listeners.push(f);
    },
    /** Send to another session, such as a worker's. */
    sendTo: (method, params, otherSessionId) => send(method, params, otherSessionId),
    async evaluate(expression) {
      const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }, sessionId);
      if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description ?? r.exceptionDetails.text);
      return r.result.value;
    },
    navigate: (url) => send("Page.navigate", { url }, sessionId),
    async close() {
      ws.close();
      proc.kill();
      await sleep(500);
      try { rmSync(profile, { recursive: true, force: true }); } catch { /* still in use */ }
    },
  };
}

/** Wait until the course page is loaded, cross-origin isolated and running
 *  examples in the browser. Returns the number of playgrounds. */
export async function waitForOfflinePlayground(page, timeoutMs = 60000) {
  const t0 = Date.now();
  for (;;) {
    const s = await page.evaluate(`document.readyState === "complete" && JSON.stringify({
      iso: self.crossOriginIsolated,
      ready: document.documentElement.dataset.offlinePlayground === "ready",
      n: document.querySelectorAll(".playground").length })`).catch(() => null);
    const st = typeof s === "string" ? JSON.parse(s) : null;
    if (st?.iso && st.ready) return st.n;
    if (Date.now() - t0 > timeoutMs) throw new Error(`the offline playground did not start: ${s}`);
    await sleep(100);
  }
}

/** Click the Run button of playground `i` and wait for its result. Returns
 *  null if it has no visible Run button. */
export async function runPlayground(page, i, timeoutMs = 150000) {
  const clicked = await page.evaluate(`(() => {
    const pg = document.querySelectorAll(".playground")[${i}];
    const b = pg?.querySelector(".play-button");
    if (!b || b.classList.contains("hidden") || b.hidden) return false;
    // Examples in speaker notes are in a closed <details>, where innerText
    // (which keeps the line breaks) is empty.
    for (let d = pg.closest("details"); d; d = d.parentElement?.closest("details")) d.open = true;
    b.click();
    return true;
  })()`);
  if (!clicked) return null;
  const t0 = Date.now();
  for (;;) {
    const res = JSON.parse(await page.evaluate(`(() => {
      const pg = document.querySelectorAll(".playground")[${i}];
      const out = pg.querySelector(".result.stdout"), err = pg.querySelector(".result.stderr");
      return JSON.stringify({ stdout: out?.innerText ?? "",
        stderr: err && !err.classList.contains("hidden") ? err.innerText : "" });
    })()`));
    if ((res.stdout && res.stdout !== "Running...") || Date.now() - t0 > timeoutMs) {
      return { ...res, seconds: (Date.now() - t0) / 1000 };
    }
    await sleep(100);
  }
}
