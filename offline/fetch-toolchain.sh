#!/bin/sh
# Download the in-browser Rust toolchain (compiler, linker, standard library,
# crates) from a GitHub release into offline/toolchain.
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
for f in rustc.wasm.gz wild.wasm.gz sysroot.bundle crates.bundle; do
  curl -fsSL -o "$OFFLINE/toolchain/$f" "$URL/$f"
done
ls -l "$OFFLINE/toolchain"
