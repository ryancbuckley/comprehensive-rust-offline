// The kernel worker: owns the kernel (filesystem, processes), loads the
// toolchain, and compiles and runs programs for the page.
//
// Messages from the page:
//   { type: "run", id, source, opt?, edition?, tests?, color?, env?, timeoutMs? }
//       Compile `source` and run it. `tests` builds a test harness
//       (`--test`) instead of a binary. `color` (default true) asks rustc
//       for colored diagnostics. `env` is the program's environment.
//       `timeoutMs` kills the program if it runs longer.
// Messages to the page:
//   { type: "status", text }           what is happening (loading, compiling…)
//   { type: "ready", crates }          the toolchain is loaded; `crates` are the
//                                      crates programs can use
//   { type: "output", id, stream: "compiler" | "stdout" | "stderr", text }
//   { type: "done", id, stage: "compile" | "run", code, ms, timedOut? }
//   { type: "error", id?, text }

import { Kernel, importedMemory } from "./kernel.js";

const SYSROOT = "/sysroot";
const TARGET = "wasm32-wasip1-threads";
const SELF_CONTAINED = `${SYSROOT}/lib/rustlib/${TARGET}/lib/self-contained`;
const CRATES = "/crates";

function createBrowserWorker() {
  const w = new Worker(new URL("./thread-worker.js", import.meta.url), { type: "module" });
  return {
    postMessage: (m) => w.postMessage(m),
    onMessage: (f) => { w.onmessage = (e) => f(e.data); },
    terminate: () => w.terminate(),
  };
}

const status = (text) => postMessage({ type: "status", text });

async function fetchOk(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status} ${res.statusText}`);
  return res;
}

/** The memory limits of the module in `res`, read from the start of the
 *  body without reading all of it. */
async function limitsOf(res) {
  const reader = res.body.getReader();
  let buf = new Uint8Array(0);
  for (;;) {
    const { done, value } = await reader.read();
    if (value) {
      const next = new Uint8Array(buf.length + value.length);
      next.set(buf);
      next.set(value, buf.length);
      buf = next;
    }
    const limits = importedMemory(buf);
    if (limits !== undefined || done) {
      reader.cancel();
      return limits;
    }
  }
}

/** Compile a gzipped toolchain program while it downloads. */
async function program(url, label) {
  const res = await fetchOk(url);
  const [forCompile, forLimits] = res.body.pipeThrough(new DecompressionStream("gzip")).tee();
  const wasm = new Response(forCompile, { headers: { "Content-Type": "application/wasm" } });
  const [module, limits] = await Promise.all([
    WebAssembly.compileStreaming(wasm),
    limitsOf(new Response(forLimits)),
  ]);
  status(`Loaded ${label}.`);
  return { module, limits };
}

async function gunzip(res) {
  const stream = res.body.pipeThrough(new DecompressionStream("gzip"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/** A bundle is a u32 (LE) header length, a JSON header listing
 *  `[path, offset, size]` entries, and the file contents. */
function unpack(fs, bundle, root) {
  const len = new DataView(bundle.buffer, bundle.byteOffset).getUint32(0, true);
  const files = JSON.parse(new TextDecoder().decode(bundle.subarray(4, 4 + len)));
  const base = 4 + len;
  for (const [path, offset, size] of files) {
    fs.writeFile(`${root}/${path}`, bundle.slice(base + offset, base + offset + size));
  }
  return files.length;
}

let kernel, rustc;
// rustc arguments that make the bundled crates available, and their names.
let crateArgs = [];
let crateNames = [];
let readyResolve;
const ready = new Promise((r) => (readyResolve = r));
const decoders = new Map();

function textOf(id, stream, bytes) {
  const key = `${id}:${stream}`;
  if (!decoders.has(key)) decoders.set(key, new TextDecoder());
  return decoders.get(key).decode(bytes, { stream: true });
}

async function init() {
  try {
    status("Loading the Rust toolchain…");
    const [rustcProgram, wild, bundle, crates] = await Promise.all([
      program(new URL("../dist/rustc.wasm.gz", import.meta.url), "rustc"),
      program(new URL("../dist/wild.wasm.gz", import.meta.url), "linker"),
      fetchOk(new URL("../dist/sysroot.bin.gz", import.meta.url)).then(gunzip),
      // Optional: crates programs can use (crates/build.py).
      fetch(new URL("../dist/crates.bin.gz", import.meta.url))
        .then((res) => (res.ok ? gunzip(res) : null))
        .catch(() => null),
    ]);
    kernel = new Kernel({ createWorker: createBrowserWorker, programs: { "wasm-ld": wild } });
    unpack(kernel.fs, bundle, SYSROOT);
    if (crates) {
      unpack(kernel.fs, crates, CRATES);
      const externs = JSON.parse(new TextDecoder().decode(kernel.fs.readFile(`${CRATES}/externs.json`)));
      // The bundle's proc macros are wasm modules, which rustc runs in its
      // interpreter.
      crateArgs = ["-L", `dependency=${CRATES}`, "-Zwasm-proc-macros"];
      for (const [name, files] of Object.entries(externs)) {
        for (const file of files) crateArgs.push("--extern", `${name}=${CRATES}/${file}`);
      }
      crateNames = Object.keys(externs);
    }
    kernel.fs.mkdirp("/tmp");
    kernel.fs.mkdirp("/work");
    rustc = rustcProgram;
    status("Ready.");
    postMessage({ type: "ready", crates: crateNames });
    readyResolve();
  } catch (e) {
    postMessage({ type: "error", text: `Failed to load the toolchain: ${e.message}` });
  }
}

async function run({ id, source, opt, edition, tests, color, env, timeoutMs }) {
  await ready;
  const fs = kernel.fs;
  const dir = `/work/${id}`;
  fs.mkdirp(dir);
  fs.writeFile(`${dir}/main.rs`, source);
  const out = (stream) => (b) => postMessage({ type: "output", id, stream, text: textOf(id, stream, b) });

  status("Compiling…");
  let t0 = performance.now();
  const compile = kernel.spawn(rustc, {
    args: [
      "rustc", `${dir}/main.rs`, `--edition=${edition ?? "2024"}`, "--crate-name=main",
      ...(tests ? ["--test"] : []),
      `--target=${TARGET}`, `--sysroot=${SYSROOT}`,
      "-o", `${dir}/main.wasm`, `-Copt-level=${opt ?? 0}`,
      // The target's C runtime and libc, passed by hand: this rustc's
      // target spec does not allow -Clink-self-contained.
      "-Clinker=wasm-ld", "-Clinker-flavor=wasm-ld",
      `-Clink-arg=${SELF_CONTAINED}/crt1-command.o`, "-L", SELF_CONTAINED,
      `--color=${color === false ? "never" : "always"}`, "-Zthreads=1",
      ...crateArgs,
    ],
    env: { RUST_BACKTRACE: "0", HOME: "/tmp", TMPDIR: "/tmp" },
    stdout: out("compiler"),
    stderr: out("compiler"),
  });
  const code = await compile.exited;
  postMessage({ type: "done", id, stage: "compile", code, ms: performance.now() - t0 });
  const wasm = fs.readFile(`${dir}/main.wasm`);
  if (code !== 0 || !wasm) {
    fs.remove(dir);
    status("Ready.");
    return;
  }

  status("Running…");
  t0 = performance.now();
  const bytes = wasm.slice();
  fs.remove(dir);
  const proc = kernel.spawn({ bytes, module: await WebAssembly.compile(bytes) }, {
    // Tests run in this process: with panic=abort, libtest would otherwise
    // run each test in a subprocess, and WASI cannot start one.
    args: tests ? ["main", "-Zunstable-options", "--force-run-in-process"] : ["main"],
    env: env ?? {},
    stdout: out("stdout"),
    stderr: out("stderr"),
  });
  let timedOut = false;
  const timer = timeoutMs
    ? setTimeout(() => { timedOut = true; kernel.kill(proc); }, timeoutMs)
    : null;
  const runCode = await proc.exited;
  clearTimeout(timer);
  postMessage({ type: "done", id, stage: "run", code: runCode, ms: performance.now() - t0, timedOut });
  status("Ready.");
}

onmessage = (e) => {
  const m = e.data;
  if (m.type === "run") {
    run(m).catch((err) => postMessage({ type: "error", id: m.id, text: String(err.stack ?? err) }));
  }
};

init();
