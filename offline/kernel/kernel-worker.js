// The kernel worker: owns the kernel (filesystem, processes), loads the
// toolchain, and compiles and runs programs for the page.
//
// Messages from the page:
//   { type: "run", id, source, opt?, edition?, tests?, color?, clippy?, env?, timeoutMs? }
//       Compile `source` and run it. `tests` builds a test harness
//       (`--test`) instead of a binary. `color` (default true) asks rustc
//       for colored diagnostics. `clippy` adds Clippy's lints to the
//       compiler's warnings. `env` is the program's environment.
//       `timeoutMs` kills the program if it runs longer.
//   { type: "cancel", id }
//       Stop run `id`: kill its compiler or program, whichever is running.
// Messages to the page:
//   { type: "status", text }           what is happening (loading, compiling…)
//   { type: "ready", crates }          the toolchain is loaded; `crates` are the
//                                      crates programs can use
//   { type: "output", id, stream: "compiler" | "stdout" | "stderr", text }
//   { type: "done", id, stage: "compile" | "run", code, ms, timedOut? }
//   { type: "error", id?, text }

import { Kernel, OutOfMemoryError, importedMemory } from "./kernel.js";
import { File } from "./fs.js";

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

async function bytesOf(res) {
  return new Uint8Array(await res.arrayBuffer());
}

/** Add a bundle (scripts/bundle.py) to the filesystem under `root`. Its
 *  files stay compressed until a program opens them: a compile reads about
 *  half of the standard library and crates. */
function addBundle(fs, bundle, root) {
  const view = new DataView(bundle.buffer, bundle.byteOffset);
  if (new TextDecoder().decode(bundle.subarray(0, 4)) !== "PGB2") throw new Error(`${root}: not a bundle`);
  const len = view.getUint32(4, true);
  const files = JSON.parse(new TextDecoder().decode(bundle.subarray(8, 8 + len)));
  const base = 8 + len;
  for (const [path, offset, length, size] of files) {
    // Copied out, so that the bundle itself can be freed.
    const bytes = bundle.slice(base + offset, base + offset + length);
    const file = length === size ? new File(bytes) : File.compressed(bytes, size);
    const parts = path.split("/");
    const name = parts.pop();
    fs.mkdirp(`${root}/${parts.join("/")}`).entries.set(name, file);
  }
}

/** The contents of a file, unpacked. */
async function readFile(fs, path) {
  const file = fs.lookup(path);
  await file.unpack();
  return file.bytes();
}

// Memory limits, in 64 KiB pages: what a process may grow to. Browsers
// reserve the limit up front, as shared memory cannot move. Chrome and Firefox
// only reserve address space; Safari (WebKit, which every browser on iOS uses)
// counts it against a tight budget. Lists are tried in turn, largest first.
const MIB = 16;
const ua = self.navigator?.userAgent ?? "";
const WEBKIT = /AppleWebKit/.test(ua) && !/Chrome\/|Chromium\//.test(ua);
// Chrome says how much memory a device has, in GB (at most 8); Safari does not.
const LOW_MEMORY = (self.navigator?.deviceMemory ?? 8) < 4;
// Where memory is scarce: no idle workers or prepared processes, which hold
// memories of their own, and smaller limits.
const THRIFTY = WEBKIT || LOW_MEMORY;
// The compiler uses 100 to 300 MiB for most programs (220 for 2,500 lines),
// the linker under 50.
const RUSTC_MAX_PAGES = (THRIFTY ? [768, 512] : [1024, 512]).map((mib) => mib * MIB);
const LINKER_MAX_PAGES = 256 * MIB;
// Programs are linked to allow all 4 GiB a 32-bit program can address.
const PROGRAM_MAX_PAGES = (THRIFTY ? [1024, 512, 256] : [4096, 2048, 1024, 512]).map((mib) => mib * MIB);

let kernel, rustc;
// rustc arguments that make the bundled crates available, and their names.
let crateArgs = [];
let crateNames = [];
let readyResolve;
const ready = new Promise((r) => (readyResolve = r));
const decoders = new Map();
// The process each run is waiting for, and the runs to stop.
const running = new Map();
const cancelled = new Set();

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
      fetchOk(new URL("../dist/sysroot.bundle", import.meta.url)).then(bytesOf),
      // Optional: crates programs can use (crates/build.py).
      fetch(new URL("../dist/crates.bundle", import.meta.url))
        .then((res) => (res.ok ? bytesOf(res) : null))
        .catch(() => null),
    ]);
    const linker = { ...wild, maxPages: LINKER_MAX_PAGES };
    const compiler = { ...rustcProgram, maxPages: RUSTC_MAX_PAGES };
    // Idle workers and prepared compiler and linker processes: each compile
    // starts several threads, and starting them is a good part of its time.
    kernel = new Kernel({
      createWorker: createBrowserWorker, programs: { "wasm-ld": linker }, pool: THRIFTY ? 0 : 4,
    });
    if (!THRIFTY) {
      kernel.keepWarm(compiler);
      kernel.keepWarm(linker);
    }
    addBundle(kernel.fs, bundle, SYSROOT);
    if (crates) {
      addBundle(kernel.fs, crates, CRATES);
      const externs = JSON.parse(new TextDecoder().decode(await readFile(kernel.fs, `${CRATES}/externs.json`)));
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
    rustc = compiler;
    status("Ready.");
    postMessage({ type: "ready", crates: crateNames });
    readyResolve();
  } catch (e) {
    postMessage({ type: "error", text: `Failed to load the toolchain: ${e.message}` });
  }
}

async function run({ id, source, opt, edition, tests, color, clippy, env, timeoutMs }) {
  await ready;
  // Every run ends with a done message, a cancelled one too.
  if (cancelled.delete(id)) {
    postMessage({ type: "done", id, stage: "compile", code: 137, ms: 0 });
    return;
  }
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
      // Instead of the target's 1 GiB: the kernel decides what is reserved.
      "-Clink-arg=--max-memory=4294967296",
      `--color=${color === false ? "never" : "always"}`, "-Zthreads=1",
      ...crateArgs,
    ],
    // RUSTC_CLIPPY: this rustc has Clippy built in.
    env: { RUST_BACKTRACE: "0", HOME: "/tmp", TMPDIR: "/tmp", ...(clippy ? { RUSTC_CLIPPY: "1" } : {}) },
    stdout: out("compiler"),
    stderr: out("compiler"),
  });
  running.set(id, compile);
  const code = await compile.exited;
  postMessage({ type: "done", id, stage: "compile", code, ms: performance.now() - t0 });
  const wasm = fs.readFile(`${dir}/main.wasm`);
  if (code !== 0 || !wasm || cancelled.has(id)) {
    if (code === 0 && cancelled.has(id)) postMessage({ type: "done", id, stage: "run", code: 137, ms: 0 });
    running.delete(id);
    cancelled.delete(id);
    fs.remove(dir);
    status("Ready.");
    return;
  }

  status("Running…");
  t0 = performance.now();
  const bytes = wasm.slice();
  fs.remove(dir);
  const module = await WebAssembly.compile(bytes);
  if (cancelled.delete(id)) {
    running.delete(id);
    postMessage({ type: "done", id, stage: "run", code: 137, ms: 0 });
    status("Ready.");
    return;
  }
  const proc = kernel.spawn({ bytes, module, maxPages: PROGRAM_MAX_PAGES }, {
    // Tests run in this process: with panic=abort, libtest would otherwise
    // run each test in a subprocess, and WASI cannot start one.
    args: tests ? ["main", "-Zunstable-options", "--force-run-in-process"] : ["main"],
    env: env ?? {},
    stdout: out("stdout"),
    stderr: out("stderr"),
  });
  running.set(id, proc);
  let timedOut = false;
  const timer = timeoutMs
    ? setTimeout(() => { timedOut = true; kernel.kill(proc); }, timeoutMs)
    : null;
  const runCode = await proc.exited;
  clearTimeout(timer);
  running.delete(id);
  cancelled.delete(id);
  postMessage({ type: "done", id, stage: "run", code: runCode, ms: performance.now() - t0, timedOut });
  status("Ready.");
}

/** An error for the page: its name and message, then where it happened.
 *  (Chrome's `stack` starts with the name and message; Safari's has only the
 *  frames.) */
function errorText(err) {
  if (err instanceof OutOfMemoryError) return err.message;
  if (!(err instanceof Error)) return String(err);
  let frames = err.stack ?? "";
  if (frames.startsWith(`${err.name}:`)) frames = frames.split("\n").slice(1).join("\n");
  return `${err.name}: ${err.message}${frames ? `\n${frames}` : ""}`;
}

onmessage = (e) => {
  const m = e.data;
  if (m.type === "run") {
    run(m).catch((err) => postMessage({ type: "error", id: m.id, text: errorText(err) }));
  } else if (m.type === "cancel") {
    cancelled.add(m.id);
    const proc = running.get(m.id);
    if (proc) kernel.kill(proc);
  }
};

init();
