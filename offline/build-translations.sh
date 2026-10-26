#!/bin/sh
# Build translations of the course into book/html/<lang>, as upstream's
# publish workflow does (.github/workflows/build.sh), for the languages in the
# menu bar's language picker (theme/index.hbs), or the ones given.
#
#   offline/build-translations.sh [lang]...
#
# Like upstream, each translation is built from the course as it was when it
# was last updated (POT-Creation-Date in po/<lang>.po), with today's theme.
# That means old versions of src/, third_party/ and book.toml, so it happens
# in a temporary clone of this repository (the committed state, with this
# checkout's theme/ and po/), never in this checkout. Each translation gets
# the offline playground script added to its old book.toml's additional-js.
# Unlike upstream, no PDF or exercises download.
#
# Run after `mdbook build` (the English course, book/html) and before
# add-to-book.sh, with the course's mdbook tools on PATH (setup-tools.sh).
set -eu
OFFLINE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(dirname "$OFFLINE")
BOOK=$ROOT/book/html
test -f "$BOOK/index.html" || { echo "build the English course first (mdbook build)" >&2; exit 1; }
command -v mdbook >/dev/null || { echo "mdbook is not on PATH (offline/setup-tools.sh)" >&2; exit 1; }
LANGS=${*:-$(sed -n 's/.*<a id="\([A-Za-z-]*\)">.*/\1/p' "$ROOT/theme/index.hbs" | grep -v '^en$')}
SITE_URL=$(sed -n 's/^site-url = "\(.*\)"$/\1/p' "$ROOT/book.toml")

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
git clone -q --shared --no-checkout "$ROOT" "$TMP/repo"
git -C "$TMP/repo" checkout -q --detach "$(git -C "$ROOT" rev-parse HEAD)"
cp -R "$ROOT/theme/." "$TMP/repo/theme/"
cp -R "$ROOT/po/." "$TMP/repo/po/"
cd "$TMP/repo"

for lang in $LANGS; do
  date=$(grep -m 1 '^"POT-Creation-Date:' "po/$lang.po" | sed -E 's/".*: (.*)\\n"/\1/')
  commit=$(git rev-list -n 1 --before "${date:-now}" HEAD)
  echo "$lang: the course as of ${date:-now} ($(git log -1 --format='%h %cs' "$commit"))"
  rm -rf src third_party
  git restore --source "$commit" src third_party book.toml
  # For mdbook 0.5, as upstream.
  sed -i.bak '/multilingual/d; /curly-quotes/d' book.toml && rm book.toml.bak
  js=$(awk '/^additional-js *=/ { f = 1 } f { print } f && /\]/ { exit }' book.toml | grep -o '"[^"]*"' | paste -sd, -)
  MDBOOK_BOOK__LANGUAGE=$lang \
    MDBOOK_OUTPUT__HTML__SITE_URL="$SITE_URL$lang/" \
    MDBOOK_OUTPUT__HTML__REDIRECT='{}' \
    MDBOOK_OUTPUT__HTML__ADDITIONAL_JS="[${js:+$js,}\"theme/offline-playground.js\"]" \
    mdbook build -d "$TMP/out/$lang" >"$TMP/$lang.log" 2>&1 \
    || { cat "$TMP/$lang.log" >&2; exit 1; }
  rm -rf "${BOOK:?}/$lang"
  mv "$TMP/out/$lang/html" "$BOOK/$lang"
  git checkout -q -- book.toml
done
echo "Added $(echo $LANGS | wc -w | tr -d ' ') translations to $BOOK"
