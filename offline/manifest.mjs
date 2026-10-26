#!/usr/bin/env node
// List the files of the built course for using it offline
// (offline/files.json in it), and stamp the service worker with a version
// made from them.
//
// The service worker (offline-sw.js) keeps the files it serves in a cache
// named after the version, and "Save for offline use" (offline/index.html)
// fetches the rest. Each file has a hash of its contents, so that a new
// version keeps the files that did not change, the toolchain above all.
//
//   node offline/manifest.mjs [book-html-dir]
//
// book-html-dir defaults to book/html. add-to-book.sh runs this last.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OFFLINE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(OFFLINE);
const BOOK = path.resolve(process.argv[2] ?? path.join(ROOT, "book/html"));
// Translations are built into subdirectories named after their po files.
const LANGUAGES = new Set(fs.readdirSync(path.join(ROOT, "po"))
  .filter((f) => f.endsWith(".po")).map((f) => f.slice(0, -3)));
// The browser keeps the service worker and the script it imports itself; the
// worker fetches the list when it installs.
const SKIP = new Set(["offline-sw.js", "mockServiceWorker.js", "offline/files.json"]);
const SW_VERSION = 'const VERSION = "dev";';

const sha256 = (data) => crypto.createHash("sha256").update(data).digest("hex");

/** Paths of the files under `dir`, relative to it, with "/" (dotfiles left out). */
function* walk(dir, rel = "") {
  const entries = fs.readdirSync(path.join(dir, rel), { withFileTypes: true })
    .filter((e) => !e.name.startsWith("."))
    .sort((a, b) => (a.name < b.name ? -1 : 1));
  for (const e of entries) {
    const p = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) yield* walk(dir, p);
    else if (e.isFile()) yield p;
  }
}

function main() {
  const files = [];
  for (const p of walk(BOOK)) {
    if (SKIP.has(p)) continue;
    const data = fs.readFileSync(path.join(BOOK, p));
    const file = { path: p, size: data.length, hash: sha256(data).slice(0, 16) };
    const top = p.split("/")[0];
    if (p.includes("/") && LANGUAGES.has(top)) file.lang = top;
    files.push(file);
  }
  const version = sha256(files.map((f) => `${f.path} ${f.hash}`).join("\n")).slice(0, 12);
  fs.writeFileSync(path.join(BOOK, "offline/files.json"), JSON.stringify({ version, files }));

  const sw = path.join(BOOK, "offline-sw.js");
  const text = fs.readFileSync(sw, "utf8");
  if (!text.includes(SW_VERSION)) {
    throw new Error(`${sw} has no \`${SW_VERSION}\` to stamp (is it already stamped?)`);
  }
  fs.writeFileSync(sw, text.replace(SW_VERSION, `const VERSION = "${version}";`));
  const mb = files.reduce((n, f) => n + f.size, 0) / 1e6;
  console.log(`${path.join(BOOK, "offline/files.json")}: ${files.length} files, ${mb.toFixed(1)} MB, version ${version}`);
}

main();
