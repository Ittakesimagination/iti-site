/* Minimal offline cache for shell + assets */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("iti-v1").then((cache) => cache.addAll(["/", "/favicon.ico", "/manifest.webmanifest"]))
  );
});
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open("iti-v1").then((cache) => cache.put(req, copy)).catch(() => {});
        return res;
      });
    })
  );
});
