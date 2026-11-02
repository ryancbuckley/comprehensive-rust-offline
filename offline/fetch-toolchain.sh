#!/bin/sh
# Download the in-browser Rust toolchain (compiler, linker, standard library,
# crates, and their licenses) from a GitHub release into offline/toolchain,
# as import-toolchain.mjs leaves it. The crates are a file per library, so
# the release has them as crates.tar.
#
#   offline/fetch-toolchain.sh [release-download-url]
#
# The URL defaults to the release tagged $OFFLINE_TOOLCHAIN_TAG (default
# offline-toolchain-1) of $GITHUB_REPOSITORY, which GitHub Actions sets.
# How the toolchain is built and released: see offline/README.md.
set -eu
OFFLINE=$(cd "$(dirname "$0")" && pwd)
TAG=${OFFLINE_TOOLCHAIN_TAG:-offline-toolchain-1}
URL=${1:-https://github.com/${GITHUB_REPOSITORY:?set GITHUB_REPOSITORY or pass a URL}/releases/download/$TAG}
mkdir -p "$OFFLINE/toolchain"
for f in rustc.wasm.gz wild.wasm.gz sysroot.bundle licenses.html crates.tar; do
  curl -fsSL -o "$OFFLINE/toolchain/$f" "$URL/$f"
done
rm -rf "$OFFLINE/toolchain/crates"
tar xf "$OFFLINE/toolchain/crates.tar" -C "$OFFLINE/toolchain"
rm "$OFFLINE/toolchain/crates.tar"
ls -l "$OFFLINE/toolchain"
