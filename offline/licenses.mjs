#!/usr/bin/env node
// Write the notices for the third-party code in the built course
// (offline/licenses.html in it).
//
// The site sends software to the browser: the offline playground's scripts,
// Mock Service Worker (with the packages bundled into it), what mdBook puts in
// every page, and the Rust toolchain. Their licenses ask that copyright
// notices and license texts go along with copies, so this lists each, with
// its copyright lines and license texts. The toolchain's notices come with
// the toolchain (offline/dist/licenses.html, written by the playground's
// scripts/licenses.py); this page links to them.
//
//   node offline/licenses.mjs [book-html-dir]
//
// book-html-dir defaults to book/html. Run `npm ci` in offline/ first.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OFFLINE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(OFFLINE);
const BOOK = path.resolve(process.argv[2] ?? path.join(ROOT, "book/html"));
const MODULES = path.join(OFFLINE, "node_modules");
const TEXTS = path.join(OFFLINE, "licenses");

const LICENSE_FILE = /^(licen[cs]e|copying|copyright|notice)([-._].*)?$/i;
const COPYRIGHT = /^\s*(?:copyright\b|©)|\bcopyright\s*(?:\(c\)|©)/i;
// Lines that mention copyright without being a notice (license wording, templates).
const NOT_A_NOTICE = new RegExp(String.raw`\[yyyy\]|\[name of|<year>|copyright (?:notices?|holders?|owners?|` +
  String.raw`license|statement|and|law|protection|interest|assignment)\b|copyrights? (?:in|to)\b|copyright\W*$`, "i");
// What a license text is, by a phrase in it; the first match wins.
const KINDS = [
  [/Apache License,? Version 2\.0, January 2004/, "Apache-2.0"],
  [/Mozilla Public License,? [Vv]ersion 2\.0/, "MPL-2.0"],
  [/Font Awesome Free License/, "Font Awesome Free"],
  [/Attribution 4\.0 International/, "CC-BY-4.0"],
  [/SIL OPEN FONT LICENSE/, "OFL-1.1"],
  [/Permission is hereby granted, free of charge/, "MIT"],
  [/Neither the name/, "BSD-3-Clause"],
];

const read = (f) => fs.readFileSync(f, "utf8");

function licenseFiles(dir) {
  return fs.readdirSync(dir).filter((n) => LICENSE_FILE.test(n)).sort().map((n) => path.join(dir, n));
}

// ---- Mock Service Worker ---------------------------------------------------

/** Every installed package, by name: [{ dir, version, json }]. */
function installedPackages() {
  const found = new Map();
  (function walk(modules) {
    if (!fs.existsSync(modules)) {
      return;
    }
    for (const name of fs.readdirSync(modules)) {
      if (name.startsWith(".")) {
        continue;
      }
      const dirs = name.startsWith("@")
        ? fs.readdirSync(path.join(modules, name)).map((n) => path.join(modules, name, n))
        : [path.join(modules, name)];
      for (const dir of dirs) {
        const manifest = path.join(dir, "package.json");
        if (!fs.existsSync(manifest)) {
          continue;
        }
        const json = JSON.parse(read(manifest));
        if (!found.has(json.name)) {
          found.set(json.name, []);
        }
        found.get(json.name).push({ dir, version: json.version, json });
        walk(path.join(dir, "node_modules"));
      }
    }
  })(MODULES);
  return found;
}

function packageEntry(pkg, version) {
  const files = licenseFiles(pkg.dir);
  const author = typeof pkg.json.author === "string" ? pkg.json.author : pkg.json.author?.name;
  let repo = typeof pkg.json.repository === "string" ? pkg.json.repository : pkg.json.repository?.url;
  repo = repo?.replace(/^git\+/, "").replace(/^git@github\.com:/, "https://github.com/").replace(/\.git$/, "");
  return {
    name: pkg.json.name,
    version,
    url: repo || pkg.json.homepage || `https://www.npmjs.com/package/${pkg.json.name}`,
    license: pkg.json.license,
    // A package without its license text: the license's, with the author.
    files: files.length ? files : [path.join(TEXTS, `${pkg.json.license}.txt`)],
    copyright: files.length ? undefined : [`Copyright (c) ${author?.replace(/\s*<[^>]*>/, "") ?? `the ${pkg.json.name} authors`}`],
  };
}

/** msw and the packages esbuild bundled into msw.js, at the versions bundled. */
function mswEntries() {
  const installed = installedPackages();
  const msw = installed.get("msw")[0];
  const bundle = read(path.join(msw.dir, "lib/iife/index.js"));
  // esbuild marks each module with its path: node_modules/.pnpm/<name>@<version>/node_modules/<name>/...
  const bundled = new Map();
  for (const [, dir, name] of bundle.matchAll(/\/\/ node_modules\/\.pnpm\/([^/\s]+)\/node_modules\/((?:@[^/\s]+\/)?[^/\s]+)\//g)) {
    const version = dir.replace(/_.*/, "").split("@").at(-1);
    bundled.set(`${name}@${version}`, { name, version });
  }
  const entries = [packageEntry(msw, msw.version)];
  for (const { name, version } of bundled.values()) {
    const candidates = installed.get(name);
    if (!candidates) {
      throw new Error(`msw.js bundles ${name}, which is not in ${MODULES}`);
    }
    // npm may have installed a slightly different version; its license is the one we have.
    entries.push(packageEntry(candidates.find((p) => p.version === version) ?? candidates[0], version));
  }
  if ([...bundled.values()].some((p) => p.name === "tldts")) {
    entries.push({
      name: "Public Suffix List (data in tldts)",
      version: "",
      url: "https://publicsuffix.org/list/",
      license: "MPL-2.0",
      files: [path.join(ROOT, "third_party/mdbook/LICENSE")],
      copyright: ["The Public Suffix List contributors; the list in its source form is at https://publicsuffix.org/list/"],
    });
  }
  return entries;
}

// ---- mdBook ----------------------------------------------------------------

/** The version in the header of a file mdBook copies into the book, e.g. ace-<hash>.js. */
function bookVersion(prefix, pattern, file = null) {
  const names = file ? [file] : fs.readdirSync(BOOK).filter((n) => n.startsWith(prefix));
  for (const name of names) {
    const m = read(path.join(BOOK, name)).match(pattern);
    if (m) {
      return m[1] ?? "";
    }
  }
  throw new Error(`${BOOK}: no ${prefix || file} matching ${pattern}; did mdBook change? (offline/licenses/README.md)`);
}

function mdbookEntries() {
  const text = (name) => path.join(TEXTS, "mdbook", name);
  const fonts = path.join(BOOK, "fonts");
  return [
    { name: "mdBook", version: "", url: "https://github.com/rust-lang/mdBook", license: "MPL-2.0",
      files: [path.join(ROOT, "third_party/mdbook/LICENSE")],
      // Also the course's theme/book.js and theme/index.hbs, which are modified copies.
      copyright: ["The mdBook authors (book.js, editor.js, searcher.js, toc.js, the styles and the page template)"] },
    { name: "Ace", version: bookVersion("ace-", /Copyright \(c\) 2010, Ajax\.org/),
      url: "https://github.com/ajaxorg/ace", license: "BSD-3-Clause", files: [text("ace-LICENSE")] },
    { name: "highlight.js", version: bookVersion("highlight-", /Highlight\.js (\S+)/),
      url: "https://github.com/highlightjs/highlight.js", license: "BSD-3-Clause", files: [text("highlight.js-LICENSE")] },
    { name: "clipboard.js", version: bookVersion("clipboard-", /clipboard\.js v(\S+)/),
      url: "https://github.com/zenorocha/clipboard.js", license: "MIT", files: [text("clipboard.js-LICENSE")] },
    { name: "elasticlunr", version: bookVersion("elasticlunr-", /- (\d+\.\d+\.\d+)/),
      url: "https://github.com/weixsong/elasticlunr.js", license: "MIT", files: [text("elasticlunr-LICENSE")],
      copyright: ["Copyright (C) 2017 Oliver Nightingale", "Copyright (C) 2017 Wei Song"] },
    { name: "mark.js", version: bookVersion("mark-", /mark\.js v(\S+)/),
      url: "https://github.com/julmot/mark.js", license: "MIT", files: [text("mark.js-LICENSE")] },
    { name: "Font Awesome Free (icons)", version: bookVersion("", /Font Awesome Free (\S+)/, "index.html"),
      url: "https://fontawesome.com", license: "CC-BY-4.0", files: [text("fontawesome-LICENSE.txt")],
      copyright: ["Copyright (c) 2022 Fonticons, Inc. (https://fontawesome.com)"] },
    { name: "Open Sans", version: "", url: "https://fonts.google.com/specimen/Open+Sans", license: "Apache-2.0",
      files: [path.join(fonts, "OPEN-SANS-LICENSE.txt")] },
    { name: "Source Code Pro", version: "", url: "https://github.com/adobe-fonts/source-code-pro", license: "OFL-1.1",
      files: [path.join(fonts, "SOURCE-CODE-PRO-LICENSE.txt")] },
  ];
}

// ---- The page --------------------------------------------------------------

function components() {
  const own = [
    { name: "Comprehensive Rust", version: "", url: "https://github.com/google/comprehensive-rust",
      license: "Apache-2.0 (code), CC-BY-4.0 (text)", files: [path.join(ROOT, "LICENSE"), path.join(ROOT, "LICENSE-CC-BY")],
      copyright: ["Copyright Google LLC"] },
    { name: "CXX (image)", version: "", url: "https://github.com/dtolnay/cxx", license: "MIT OR Apache-2.0",
      files: [path.join(ROOT, "third_party/cxx/LICENSE-MIT")], copyright: ["The CXX authors"] },
  ];
  return [
    ["course", "This copy of the course",
      "The course, and the scripts that compile and run its examples in this browser.", own],
    ["msw", "Mock Service Worker",
      "msw.js and mockServiceWorker.js: Mock Service Worker, which hands the course's requests to " +
      "play.rust-lang.org to this page, and the packages bundled into it.", mswEntries()],
    ["mdbook", "The pages",
      "What mdBook puts in every page: its scripts and styles, the code editor, syntax highlighting, " +
      "search, icons and fonts.", mdbookEntries()],
  ];
}

const isNotice = (line) => COPYRIGHT.test(line) && !NOT_A_NOTICE.test(line);

function copyrightLines(text) {
  return text.split("\n").filter(isNotice)
    .map((l) => l.slice(l.search(COPYRIGHT)).replace(/^[\s*/#;]+|[\s*/#;.]+$/g, "").replace(/\s+/g, " "));
}

const kind = (text) => KINDS.find(([re]) => re.test(text.replace(/\s+/g, " ")))?.[1] ?? null;

function main() {
  const comps = components();
  const entries = comps.flatMap(([, , , es]) => es);
  const missing = [...new Set(entries.flatMap((e) => e.files).filter((f) => !fs.existsSync(f)))];
  if (missing.length) {
    throw new Error(`missing license files:\n  ${missing.join("\n  ")}`);
  }

  // The texts, each once. Copyright lines are listed with their packages, so
  // texts that differ only in those are the same text.
  const texts = [], keys = new Map();
  for (const e of entries) {
    e.texts = [];
    const found = [];
    for (const f of e.files) {
      const text = read(f).replace(/^\n+|\s+$/g, "");
      if (f !== path.join(TEXTS, "MIT.txt")) { // a template
        found.push(...copyrightLines(text));
      }
      const key = text.split("\n").filter((l) => !isNotice(l)).join(" ").replace(/\s+/g, " ");
      if (!keys.has(key)) {
        keys.set(key, texts.length);
        texts.push({ text, kind: kind(text), file: `${path.basename(f)} of ${path.basename(path.dirname(f))}`, users: new Set() });
      }
      const t = keys.get(key);
      texts[t].users.add(e.name);
      if (!e.texts.includes(t)) {
        e.texts.push(t);
      }
    }
    e.copyright ??= [...new Set(found)];
  }

  // Number the texts by kind, most used first: "MIT", "MIT (2)", ...
  const order = texts.map((_, t) => t)
    .sort((a, b) => (texts[a].kind ?? "~").localeCompare(texts[b].kind ?? "~") || texts[b].users.size - texts[a].users.size);
  const count = new Map();
  for (const t of order) {
    const k = texts[t].kind ?? texts[t].file;
    count.set(k, (count.get(k) ?? 0) + 1);
    texts[t].label = count.get(k) === 1 ? k : `${k} (${count.get(k)})`;
  }

  const out = path.join(BOOK, "offline/licenses.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(comps, texts, order));
  console.log(`${out}: ${entries.length} entries, ${texts.length} license texts`);
}

const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function render(comps, texts, order) {
  const body = [];
  body.push("<nav>" + comps.map(([id, title]) => `<a href="#${id}">${esc(title)}</a>`).join(" · ") +
    ' · <a href="#toolchain">The Rust toolchain</a> · <a href="#texts">License texts</a></nav>');
  for (const [id, title, desc, entries] of comps) {
    body.push(`<h2 id="${id}">${esc(title)}</h2>\n<p>${esc(desc)}</p>`);
    const rows = [...entries].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map((e) => {
      let name = esc(e.name);
      if (e.url) {
        name = `<a href="${esc(e.url)}">${name}</a>`;
      }
      if (e.version) {
        name += ` <span class="muted">${esc(e.version)}</span>`;
      }
      const who = e.copyright.length ? e.copyright.map(esc).join("<br>") : `<span class="muted">The ${esc(e.name)} authors</span>`;
      const refs = e.texts.map((t) => `<a href="#t${t}">${esc(texts[t].label)}</a>`).join(", ");
      return `<tr><td>${name}</td><td>${esc(e.license)}</td><td>${who}</td><td>${refs}</td></tr>`;
    });
    body.push("<table><thead><tr><th>Package</th><th>License</th><th>Copyright</th><th>Texts</th></tr></thead><tbody>\n" +
      rows.join("\n") + "\n</tbody></table>");
  }
  body.push('<h2 id="toolchain">The Rust toolchain</h2>\n<p>The compiler (rustc, with Cranelift), the wild linker, ' +
    "the standard library and the crates that examples can use, in <code>offline/dist/</code>, come with " +
    'their own list: <a href="dist/licenses.html">the toolchain\'s licenses</a>.</p>');
  body.push('<h2 id="texts">License texts</h2>\n<p>Each text once; the copyright lines it carries in ' +
    "each package are listed with the package above.</p>");
  for (const t of order) {
    const users = [...texts[t].users].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    body.push(`<details id="t${t}"><summary>${esc(texts[t].label)} ` +
      `<span class="muted">(${users.length}: ${esc(users.slice(0, 6).join(", "))}${users.length > 6 ? ", …" : ""})</span></summary>` +
      `<pre>${esc(texts[t].text)}</pre></details>`);
  }
  return TEMPLATE.replace("BODY", () => body.join("\n"));
}

const TEMPLATE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Licenses · Comprehensive Rust</title>
<script>
  // mdBook's theme, if the reader picked one.
  try {
    const theme = localStorage.getItem("mdbook-theme")?.replace(/^"|"$/g, "");
    if (theme) document.documentElement.dataset.theme = theme === "light" || theme === "rust" ? "light" : "dark";
  } catch {}
  // Open the text a link points at.
  addEventListener("click", (e) => {
    const id = e.target.closest?.('a[href^="#t"]')?.getAttribute("href").slice(1);
    if (id) document.getElementById(id).open = true;
  });
</script>
<style>
:root {
  --bg: #fbfaf8; --panel: #ffffff; --border: #e3e0da; --text: #24211d; --muted: #77716a;
  --accent: #b7410e; --mono: ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #171513; --panel: #1f1c19; --border: #3a352f; --text: #ece7e1; --muted: #a39b91;
    --accent: #e0703a; color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --bg: #171513; --panel: #1f1c19; --border: #3a352f; --text: #ece7e1; --muted: #a39b91;
  --accent: #e0703a; color-scheme: dark;
}
body {
  margin: 0 auto; max-width: 1100px; padding: 16px; background: var(--bg); color: var(--text);
  font: 14px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif;
}
a { color: var(--accent); }
h1 { font-size: 22px; margin: 8px 0; }
h2 { font-size: 18px; margin: 32px 0 4px; }
.muted { color: var(--muted); }
table { border-collapse: collapse; width: 100%; font-size: 13px; table-layout: fixed; }
th, td { text-align: left; vertical-align: top; padding: 4px 8px; border-bottom: 1px solid var(--border);
         overflow-wrap: anywhere; }
th { position: sticky; top: 0; background: var(--bg); }
th:nth-child(1) { width: 24%; }
th:nth-child(2) { width: 20%; }
th:nth-child(4) { width: 20%; }
@media (max-width: 640px) {
  thead { display: none; }
  table, tbody, tr, td { display: block; }
  tr { padding: 6px 0; border-bottom: 1px solid var(--border); }
  td { border: 0; padding: 1px 0; }
}
details { border: 1px solid var(--border); border-radius: 6px; margin: 6px 0; background: var(--panel); }
summary { cursor: pointer; padding: 6px 10px; }
pre { margin: 0; padding: 10px; border-top: 1px solid var(--border); overflow-x: auto;
      font: 12px/1.45 var(--mono); white-space: pre-wrap; }
</style>
</head>
<body>
<h1>Licenses</h1>
<p>This copy of Comprehensive Rust compiles and runs its examples in your browser. It sends the open-source
software below to the browser, whose licenses ask that their copyright notices and license texts come with
it. <a href="../">Back to the course</a>.</p>
BODY
</body>
</html>
`;

main();
