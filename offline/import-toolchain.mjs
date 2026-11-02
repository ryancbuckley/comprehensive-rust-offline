#!/usr/bin/env node
// Copy the in-browser Rust toolchain from a build of the playground
// (browser_rust_playground, after its scripts/build-web.sh) into
// offline/toolchain, with only the course's crates.
//
//   node offline/import-toolchain.mjs <playground-dir> [toolchain-dir]
//
// The playground's web/dist has the compiler, the linker, the standard
// library, their notices, and its crates: a gzipped file per library in
// dist/crates, listed in dist/crates/index.json, far more than the course
// uses. The course's crates are the dependencies of
// offline/tests/native-crates/Cargo.toml; this keeps those and everything
// they depend on, as `cargo tree` in the playground's crates/ says (it is the
// workspace crates/build.py built them in, for the same target).
//
// toolchain-dir defaults to offline/toolchain (what add-to-book.sh reads).
// The notices (licenses.html) are the playground's, for all its crates.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OFFLINE = path.dirname(fileURLToPath(import.meta.url));
const [pg, out = path.join(OFFLINE, "toolchain")] = process.argv.slice(2);
if (!pg) {
  console.error("usage: node offline/import-toolchain.mjs <playground-dir> [toolchain-dir]");
  process.exit(1);
}
const DIST = path.join(pg, "web/dist");
const TARGET = "wasm32-wasip1-threads";
const CARGO = ["+nightly-2026-10-19"];
const FILES = ["rustc.wasm.gz", "wild.wasm.gz", "sysroot.bundle", "licenses.html"];

/** The dependencies of the course's crate list, as the ids programs use. */
function courseCrates() {
  const toml = fs.readFileSync(path.join(OFFLINE, "tests/native-crates/Cargo.toml"), "utf8");
  const deps = toml.split(/^\[dependencies\]$/m)[1].split(/^\[/m)[0];
  return [...deps.matchAll(/^([A-Za-z0-9_-]+)\s*=/gm)].map((m) => m[1].replaceAll("-", "_"));
}

/** "name version" of `crate` and everything it depends on, for the target. */
function closure(crate) {
  const tree = execFileSync("cargo", [...CARGO, "tree", "--offline", `--target=${TARGET}`,
    "-e", "normal", "--prefix=none", "--format={p}", "-p", `${crate.name}@${crate.version}`],
  { cwd: path.join(pg, "crates"), encoding: "utf8" });
  return tree.split("\n").filter(Boolean).map((line) => {
    const [name, version] = line.split(" ");
    return `${name} ${version.replace(/^v/, "")}`;
  });
}

function main() {
  for (const f of FILES) {
    if (!fs.existsSync(path.join(DIST, f))) throw new Error(`no ${f} in ${DIST} (run its scripts/build-web.sh)`);
  }
  const index = JSON.parse(fs.readFileSync(path.join(DIST, "crates/index.json"), "utf8"));
  const ids = courseCrates();
  const crates = ids.map((id) => {
    const crate = index.crates.find((c) => c.id === id);
    if (!crate) throw new Error(`the playground has no crate ${id}`);
    return crate;
  });
  const wanted = new Set(crates.flatMap(closure));
  const files = Object.fromEntries(Object.entries(index.files).filter(([, f]) => wanted.has(f.crate)));
  const externs = Object.fromEntries(ids.map((id) => [id, index.externs[id]]));
  for (const [id, names] of Object.entries(externs)) {
    for (const name of names) {
      if (!files[name]) throw new Error(`${id}'s ${name} is not among the files kept`);
    }
  }

  fs.mkdirSync(out, { recursive: true });
  for (const f of FILES) fs.copyFileSync(path.join(DIST, f), path.join(out, f));
  // The bundle of the toolchain before crates were files.
  fs.rmSync(path.join(out, "crates.bundle"), { force: true });
  const dir = path.join(out, "crates");
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir);
  for (const name of Object.keys(files)) {
    fs.copyFileSync(path.join(DIST, "crates", `${name}.gz`), path.join(dir, `${name}.gz`));
  }
  fs.writeFileSync(path.join(dir, "index.json"), JSON.stringify({ crates, externs, files }));

  const mb = Object.values(files).reduce((n, f) => n + f.packed, 0) / 1e6;
  console.log(`${out}: ${FILES.join(", ")}, and crates/: ${ids.length} crates, ` +
    `${Object.keys(files).length} files of ${wanted.size} packages, ${mb.toFixed(1)} MB`);
}

main();
