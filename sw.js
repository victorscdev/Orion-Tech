if (window.location.href.includes("orion-tech-desk")) {
    self.addEventListener('install', (event) => {
        event.waitUntil(
            caches.open('my-cache').then((cache) => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    './assets/styles/import.css',
                    '/pwa.js'
                ]);
            })
        );
    });
    
    self.addEventListener('fetch', (event) => {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    });
}
