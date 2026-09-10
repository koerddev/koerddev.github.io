// Minimal service worker. Its only job is to exist, since Chrome/Edge
// require a registered service worker before they'll treat a site as
// "installable" and offer the native Add-to-Home-Screen/desktop prompt.
// It does not cache anything - all requests just pass straight through.

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => new Response('Offline', { status: 503 }))
    );
});
