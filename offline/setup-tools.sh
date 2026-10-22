#!/bin/sh
# Build the course's mdbook tools with its Bazel setup into offline/.tools/bin,
# instead of ~/.cargo/bin like `cargo xtask install-tools`. Downloads the Bazel
# version the course pins (.bazelversion) if `bazel` is another version.
#
# Then build the course with: PATH="$PWD/offline/.tools/bin:$PATH" mdbook build
set -eu
OFFLINE=$(cd "$(dirname "$0")" && pwd)
REPO=$(cd "$OFFLINE/.." && pwd)
TOOLS=$OFFLINE/.tools
mkdir -p "$TOOLS/bin"

VERSION=$(cat "$REPO/.bazelversion")
if bazel --version 2>/dev/null | grep -qx "bazel $VERSION"; then
  BAZEL=bazel
else
  BAZEL=$TOOLS/bazel-$VERSION
  if [ ! -x "$BAZEL" ]; then
    case "$(uname -s)-$(uname -m)" in
      Darwin-arm64) platform=darwin-arm64 ;;
      Darwin-x86_64) platform=darwin-x86_64 ;;
      Linux-x86_64) platform=linux-x86_64 ;;
      Linux-aarch64) platform=linux-arm64 ;;
      *) echo "unsupported platform" >&2; exit 1 ;;
    esac
    curl -fsSL -o "$BAZEL" \
      "https://releases.bazel.build/$VERSION/release/bazel-$VERSION-$platform"
    chmod +x "$BAZEL"
  fi
fi

# The HTML build's tools, from `cargo xtask install-tools` (xtask/src/main.rs).
TARGETS="//mdbook-course //mdbook-exerciser @binaries//:mdbook__mdbook
  @binaries//:mdbook-i18n-helpers__mdbook-gettext
  @binaries//:mdbook-i18n-helpers__mdbook-xgettext
  @svgbob//:mdbook-svgbob__mdbook-svgbob"
cd "$REPO"
"$BAZEL" build $TARGETS
for target in $TARGETS; do
  for file in $("$BAZEL" cquery --output=files "$target" 2>/dev/null); do
    case "$file" in
      *.d|*.rlib|*.rmeta) ;;
      *) install -m 755 "$file" "$TOOLS/bin/" ;;
    esac
  done
done
ls "$TOOLS/bin"
