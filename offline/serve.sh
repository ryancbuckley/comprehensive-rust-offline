#!/bin/sh
# Serve the built course (book/html) on http://127.0.0.1:${PORT:-8001}/ with a
# plain static file server, like GitHub Pages: no special headers are needed.
OFFLINE=$(cd "$(dirname "$0")" && pwd)
cd "$OFFLINE/../book/html" && exec python3 -m http.server "${PORT:-8001}" --bind 127.0.0.1
