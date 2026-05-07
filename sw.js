self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Basic pass-through for online functionality
  e.respondWith(fetch(e.request));
});