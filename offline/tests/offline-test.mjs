// Save the built course for offline use in headless Chrome, stop serving it,
// and check that pages never opened before still load and run their
// examples.
//
//   node offline/tests/offline-test.mjs [--book book/html] [--lang ja]
//
// With --lang, it saves and checks that translation instead of the English
// course. It serves the book itself (a plain static server, like GitHub
// Pages), so that it can stop. Needs Chrome.

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import process from "node:process";
import { launch, runPlayground, sleep, waitForOfflinePlayground } from "./cdp.mjs";

const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : dflt;
};
const book = path.resolve(opt("book", "book/html"));
const lang = opt("lang", "");
const prefix = lang ? `${lang}/` : "";

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript",
  ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".txt": "text/plain",
  ".gz": "application/gzip", ".bundle": "application/octet-stream", ".wasm": "application/wasm",
};
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const file = path.join(book, p);
  if (!file.startsWith(book) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] ?? "application/octet-stream" });
  if (req.method === "HEAD") res.end();
  else fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}/`;

let failures = 0;
const check = (ok, what) => {
  console.log(`${ok ? "ok  " : "FAIL"} ${what}`);
  if (!ok) failures++;
};

const page = await launch();
page.on((method, p) => {
  if (method === "Runtime.consoleAPICalled" && ["error", "warning"].includes(p.type)) {
    console.log(`[console.${p.type}]`, p.args.map((a) => a.value ?? a.description).join(" "));
  }
});

async function waitFor(expression, timeoutMs, what) {
  const t0 = Date.now();
  for (;;) {
    const v = await page.evaluate(expression).catch(() => null);
    if (v) return v;
    if (Date.now() - t0 > timeoutMs) throw new Error(`timed out waiting for ${what}`);
    await sleep(200);
  }
}

// Online: a course page, then "Save for offline use".
await page.navigate(new URL(`${prefix}types-and-values/hello-world.html`, base).href);
await waitForOfflinePlayground(page);
const link = await page.evaluate(`(() => { const a = document.getElementById("offline-use");
  return a && !a.hidden ? a.getAttribute("href") : null; })()`);
const help = new URL(lang ? `offline/?lang=${lang}` : "offline/", base).href;
check(link === help, `the menu bar links to Using the course offline (${link})`);

await page.navigate(help);
await waitFor(`!document.getElementById("save").disabled`, 30000, "the Save button");
console.log(await page.evaluate(`document.getElementById("save").textContent`));
const t0 = Date.now();
await page.evaluate(`document.getElementById("save").click()`);
const status = await waitFor(`(() => { const s = document.getElementById("status").textContent;
  return /whole course|could not|offline/.test(s) && s; })()`, 600000, "saving");
console.log(`[${((Date.now() - t0) / 1000).toFixed(1)} s] ${status}`);
check(/whole course/.test(status), "everything is saved");

// Offline.
server.closeAllConnections();
await new Promise((r) => server.close(r));
console.log("-- the server is stopped");

// Translations are older versions of the course, without these pages.
const pages = lang ? [["types-and-values/hello-world.html", /🌍/]] : [
  ["error-handling/thiserror.html", /I\/O error/],
  ["concurrency/async-control-flow/channels.html", /ping_handler complete/],
];
for (const [p, expect] of pages.map(([p, e]) => [prefix + p, e])) {
  await page.navigate(new URL(p, base).href);
  await waitForOfflinePlayground(page);
  const res = await runPlayground(page, 0);
  check(expect.test(res?.stdout ?? ""), `${p} runs offline (${res?.seconds.toFixed(1)} s)`);
}

await page.navigate(new URL(`${prefix}?highlight=borrow`, base).href);
const title = await waitFor(`document.readyState === "complete" && document.title`, 30000, "the front page");
check(/Comprehensive Rust/.test(title), `the front page loads offline, with a search query (${title})`);

await page.close();
process.exit(failures ? 1 : 0);
