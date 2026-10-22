// The book's service worker: Mock Service Worker, which hands the requests to
// play.rust-lang.org to theme/offline-playground.js in the page, plus
// cross-origin isolation.
//
// The compiler's threads share memory (SharedArrayBuffer), which browsers only
// allow in cross-origin isolated pages: pages served with
// Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers. Static
// hosts often cannot set headers, so this worker adds them to the pages it
// loads, and adds the embedder policy to worker scripts, which an isolated
// page may only start if they have it too.

const ISOLATED_DESTINATIONS = new Set(["document", "iframe", "worker", "sharedworker"]);

function withIsolation(res, destination) {
  if (res.status === 0 || res.type === "opaqueredirect" || res.type === "opaque") {
    return res;
  }
  const headers = new Headers(res.headers);
  // `credentialless` rather than `require-corp`, so that cross-origin
  // scripts the course loads (analytics, cookie consent) keep working.
  headers.set("Cross-Origin-Embedder-Policy", "credentialless");
  if (destination === "document" || destination === "iframe") {
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
  }
  return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  // book.js asks which crates the playground has as soon as a page loads,
  // and shows the Run buttons only once it hears back. Answer here, so the
  // answer never depends on the network or on the page having started MSW
  // yet. book.js only uses the list to hide Run on examples with an
  // `extern crate` line, which no example in the course has; programs can
  // still use the crates the toolchain has (tokio, anyhow, ...).
  if (request.url === "https://play.rust-lang.org/meta/crates") {
    event.stopImmediatePropagation();
    event.respondWith(Response.json({ crates: [] }));
    return;
  }
  const destination = request.mode === "navigate" ? "document" : request.destination;
  if (!ISOLATED_DESTINATIONS.has(destination)) {
    return; // MSW's handler below
  }
  // MSW must not also respond to this request.
  event.stopImmediatePropagation();
  event.respondWith(fetch(request).then((res) => withIsolation(res, destination)));
});

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

importScripts("./mockServiceWorker.js");
