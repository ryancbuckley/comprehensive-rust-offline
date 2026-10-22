// Run every code example of the built course in headless Chrome, as a reader
// would (clicking Run), and compare each with the same code compiled natively
// by rustc (LLVM) and run on this machine.
//
//   node offline/tests/test-all-examples.mjs [--filter SUBSTR] [--url http://127.0.0.1:8001/]
//
// The code is taken from the request book.js sends, so it is exactly what the
// reader runs (hidden lines, `#![allow(unused)]` and all). Writes
// offline/test-output/report.json and prints a summary. Needs the book served
// (offline/serve.sh), Chrome, and the nightly-2026-10-19 toolchain.

import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import process from "node:process";
import { launch, runPlayground, waitForOfflinePlayground } from "./cdp.mjs";

const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : dflt;
};
const ROOT = new URL("../..", import.meta.url).pathname;
const HTML = join(ROOT, "book/html");
const OUT = join(ROOT, "offline/test-output");
const base = opt("url", "http://127.0.0.1:8001/");
const filter = opt("filter", "");

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return name === "offline" ? [] : pages(p);
    if (!name.endsWith(".html") || name === "print.html" || name === "404.html") return [];
    return readFileSync(p, "utf8").includes('class="playground"') ? [relative(HTML, p)] : [];
  });
}

/** Compile and run `params` (an /execute request) natively. */
function native(params, dir) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "main.rs"), params.code);
  const exe = join(dir, "main");
  const c = spawnSync("rustc", ["+nightly-2026-10-19", `--edition=${params.edition}`,
    ...(params.tests ? ["--test"] : []), "-o", exe, "main.rs"], { cwd: dir, encoding: "utf8" });
  if (c.status !== 0) return { compiled: false, stdout: "", stderr: c.stderr };
  const r = spawnSync(exe, [], { cwd: dir, encoding: "utf8", timeout: 10000 });
  return { compiled: true, stdout: r.stdout, stderr: r.stderr, status: r.status };
}

const normalize = (s) => s.split("\n").map((l) => l.trimEnd()).join("\n").trim();

mkdirSync(OUT, { recursive: true });
const list = pages(HTML).filter((p) => p.includes(filter)).sort();
console.log(`${list.length} pages with examples`);

const page = await launch();
let lastRequest = null;
page.on((method, p) => {
  if (method === "Network.requestWillBeSent" && p.request.url === "https://play.rust-lang.org/execute") {
    lastRequest = JSON.parse(p.request.postData);
  }
});

const results = [];
const t0 = Date.now();
for (const path of list) {
  await page.navigate(new URL(path, base).href);
  let n;
  try {
    n = await waitForOfflinePlayground(page);
  } catch (e) {
    results.push({ page: path, block: -1, status: "page-failed", detail: e.message });
    continue;
  }
  for (let i = 0; i < n; i++) {
    lastRequest = null;
    const res = await runPlayground(page, i);
    if (!res) continue;
    const entry = { page: path, block: i, browser: res, params: lastRequest };
    if (!lastRequest) {
      entry.status = "no-request";
    } else if (/^Playground Communication/.test(res.stdout)) {
      entry.status = "communication-error";
    } else {
      const nat = native(lastRequest, join(OUT, "native", path.replace(/\//g, "_"), String(i)));
      entry.native = nat;
      const browserOut = res.stdout === "No output" ? "" : res.stdout;
      const browserCompiled = !/^error(\[E\d+\])?: /m.test(res.stderr);
      if (!nat.compiled && !browserCompiled) entry.status = "both-compile-error";
      else if (nat.compiled !== browserCompiled) entry.status = "compile-differs";
      else if (normalize(browserOut) === normalize(nat.stdout)) entry.status = "same";
      else entry.status = "output-differs";
    }
    results.push(entry);
    process.stdout.write(entry.status === "same" ? "." : `\n${entry.status}: ${path} #${i}\n`);
  }
}
await page.close();

writeFileSync(join(OUT, "report.json"), JSON.stringify(results, null, 1));
const counts = {};
for (const r of results) counts[r.status] = (counts[r.status] ?? 0) + 1;
console.log(`\n${results.length} examples run in ${((Date.now() - t0) / 1000).toFixed(0)} s`);
for (const [k, v] of Object.entries(counts).sort()) console.log(`  ${k.padEnd(22)} ${v}`);
const times = results.filter((r) => r.browser).map((r) => r.browser.seconds).sort((a, b) => a - b);
if (times.length) {
  console.log(`browser time per example: median ${times[times.length >> 1].toFixed(2)} s, max ${times.at(-1).toFixed(2)} s`);
}
console.log(`report: ${relative(ROOT, join(OUT, "report.json"))}`);
