#!/bin/sh
# Add the offline playground to a built course: the service worker, Mock
# Service Worker, the kernel scripts, the Rust toolchain, and the licenses of
# all of it (offline/licenses.html, with the toolchain's in offline/dist/).
#
#   offline/add-to-book.sh [book-html-dir] [toolchain-dir]
#
# book-html-dir defaults to book/html (what `mdbook build` writes);
# toolchain-dir defaults to offline/toolchain (fetch-toolchain.sh). Run
# `npm ci` in offline/ first.
set -eu
OFFLINE=$(cd "$(dirname "$0")" && pwd)
BOOK=${1:-$OFFLINE/../book/html}
TOOLCHAIN=${2:-$OFFLINE/toolchain}
FILES="rustc.wasm.gz wild.wasm.gz sysroot.bundle crates.bundle licenses.html"

for f in $FILES; do
  test -f "$TOOLCHAIN/$f" || { echo "missing $TOOLCHAIN/$f (run offline/fetch-toolchain.sh)" >&2; exit 1; }
done
test -f "$OFFLINE/node_modules/msw/lib/mockServiceWorker.js" \
  || { echo "run npm ci in $OFFLINE first" >&2; exit 1; }

mkdir -p "$BOOK/offline/kernel" "$BOOK/offline/dist"
# The service worker must be at the root of the site to control every page,
# translations included.
cp "$OFFLINE/sw.js" "$BOOK/offline-sw.js"
cp "$OFFLINE/node_modules/msw/lib/mockServiceWorker.js" "$BOOK/"
cp "$OFFLINE/node_modules/msw/lib/iife/index.js" "$BOOK/offline/msw.js"
cp "$OFFLINE"/kernel/*.js "$BOOK/offline/kernel/"
for f in $FILES; do
  cp "$TOOLCHAIN/$f" "$BOOK/offline/dist/"
done
node "$OFFLINE/licenses.mjs" "$BOOK"
echo "Added the offline playground to $BOOK"
