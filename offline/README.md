# Comprehensive Rust, with the examples running in your browser

This is an unofficial copy of [Comprehensive Rust](https://github.com/google/comprehensive-rust).
In the official course, the Run button sends the code to
[play.rust-lang.org](https://play.rust-lang.org), which compiles and runs it on
a server. Here, the code is compiled and run inside your browser instead.
After the first visit it needs no network at all.

## How it works

- `theme/book.js` (the course's own script) still sends each example to
  `https://play.rust-lang.org/execute`.
- A service worker (`offline/sw.js`, published as `/offline-sw.js`) intercepts
  that request with [Mock Service Worker](https://mswjs.io).
- MSW hands the request to a handler in the page
  (`theme/offline-playground.js`).
- The handler compiles and runs the code in web workers, using
  `offline/kernel/`, a small WASI implementation with threads:
  - rustc compiled to WebAssembly, using rustc_codegen_cranelift with a
    Cranelift-to-wasm backend;
  - the wild linker, compiled to wasm;
  - the standard library for `wasm32-wasip1-threads`;
  - crates the examples use (tokio, futures, anyhow, thiserror, async-trait,
    and others), built for the same target. Their proc macros are compiled
    to WebAssembly too, and rustc runs them in an interpreter.
- Programs can use threads. The compiler needs them too: a page that uses
  `SharedArrayBuffer` must be *cross-origin isolated*. GitHub Pages cannot send
  the headers for that, so the service worker adds them, and the first visit
  reloads once.
- The service worker also answers `/meta/crates`, the crate list that `book.js`
  fetches before showing the Run buttons. That way the buttons appear offline
  too.

The toolchain is about 80 MB of downloads, cached by the browser after the
first time.

## What differs from play.rust-lang.org

- Fewer crates are available: anyhow, async-trait, futures, itertools, libc,
  once_cell, rand, regex, scopeguard, serde_json, thiserror and tokio. There
  is no network, so examples that fetch web pages (reqwest) or use sockets
  can't work.
- Programs are compiled for WebAssembly with `panic=abort`. A panic stops the
  program after printing its message, and `#[test]` examples run in one
  process (libtest's `--force-run-in-process`).
- OS error codes are WASI's: "file not found" is `code: 44`, not `code: 2`.
- Programs are stopped after 10 seconds.

## Building locally

```sh
offline/setup-tools.sh               # the course's mdbook tools, built with Bazel, in offline/.tools
PATH="$PWD/offline/.tools/bin:$PATH" mdbook build
(cd offline && npm ci)               # Mock Service Worker
offline/fetch-toolchain.sh URL       # or put the files in offline/toolchain yourself
offline/add-to-book.sh               # adds the playground to book/html
offline/serve.sh                     # http://127.0.0.1:8001/
```

`offline/tests/browser-test.mjs` clicks Run on a page in headless Chrome.
`offline/tests/test-all-examples.mjs` runs every example in the course and
compares each with the same code compiled natively.

## Publishing

`.github/workflows/publish.yml` builds the course and its translations, as
upstream does. It then downloads the toolchain from this repository's release
`offline-toolchain-1` (four files: `rustc.wasm.gz`, `wild.wasm.gz`,
`sysroot.bundle`, `crates.bundle`) and publishes everything to GitHub Pages. It runs on pushes to
the `offline-playground` branch. Before the first run:

1. Create the release `offline-toolchain-1` and upload the four files to it.
2. In the repository settings, under Pages, set the source to "GitHub
   Actions".

The toolchain is built outside this repository, because building rustc for
WebAssembly takes too long for a CI runner.

## Licenses

The course is licensed under Apache 2.0 (code) and CC BY 4.0 (text); see the
top-level `LICENSE` files. Mock Service Worker is MIT-licensed. The Rust
compiler and wild are MIT/Apache 2.0. wasi-libc is under its own permissive
licenses.
