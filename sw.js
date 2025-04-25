self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener("fetch", (event) => {
  // Optional caching logic can go here
  console.log("[ServiceWorker] Fetch", event.request.url);
});
