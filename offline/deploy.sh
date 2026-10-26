#!/bin/sh
# Publish the built course (book/html) to the gh-pages branch, which GitHub
# Pages serves ("Deploy from a branch").
#
#   offline/deploy.sh [repository-url]
#
# repository-url defaults to this checkout's origin. Each deploy replaces the
# branch with a single commit, so the repository doesn't collect every
# version of the site and of the 80 MB toolchain. The repository in
# offline/.deploy keeps the last deploy, so a push only sends the files that
# changed.
set -eu
OFFLINE=$(cd "$(dirname "$0")" && pwd)
ROOT=$(dirname "$OFFLINE")
BOOK=$ROOT/book/html
DEPLOY=$OFFLINE/.deploy
URL=${1:-$(git -C "$ROOT" remote get-url origin)}
test -f "$BOOK/offline/files.json" \
  || { echo "build the course first: mdbook build, build-translations.sh, add-to-book.sh" >&2; exit 1; }

if [ ! -d "$DEPLOY/.git" ]; then
  git init -q -b gh-pages "$DEPLOY"
  git -C "$DEPLOY" remote add origin "$URL"
  # The first push can be large.
  git -C "$DEPLOY" config http.postBuffer 524288000
fi
git -C "$DEPLOY" remote set-url origin "$URL"
# What the branch has now, so that the push leaves it out. Nothing to
# download if it is the last deploy from here; there is no branch before the
# first deploy.
git -C "$DEPLOY" fetch -q --depth 1 origin gh-pages 2>/dev/null || true

rsync -a --delete --exclude /.git "$BOOK/" "$DEPLOY/"
git -C "$DEPLOY" add -A
tree=$(git -C "$DEPLOY" write-tree)
if [ "$tree" = "$(git -C "$DEPLOY" rev-parse -q --verify origin/gh-pages^{tree} || true)" ]; then
  echo "gh-pages already has this build"
  exit 0
fi
source=$(git -C "$ROOT" rev-parse --short HEAD)
commit=$(git -C "$DEPLOY" commit-tree "$tree" -m "The course, built from $source")
git -C "$DEPLOY" update-ref refs/heads/gh-pages "$commit"
git -C "$DEPLOY" push --force origin gh-pages
# Older deploys are no longer needed here.
git -C "$DEPLOY" reflog expire --expire=now --all
git -C "$DEPLOY" gc -q --prune=now
echo "Published $commit (from $source) to gh-pages"
