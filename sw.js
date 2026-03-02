/* ══════════════════════════════════════════════════════
   Vedomostný QUIZ 2026 – Service Worker (PWA)
   Cache-first s network fallback, auto-update
   ══════════════════════════════════════════════════════ */

const CACHE_NAME = 'quiz-2026-v3';
const LOCAL_ASSETS = [
  './',
  './moderator.html',
  './tv.html',
  './questions.js',
  './manifest.json',
  './icon.svg'
];
const CDN_ASSETS = [
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
];

/* ── Install: cache local + CDN assets ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      /* Local assets – must succeed */
      await cache.addAll(LOCAL_ASSETS);
      /* CDN assets – best effort (may fail on first offline install) */
      for (const url of CDN_ASSETS) {
        try { await cache.add(url); } catch (e) {
          console.warn('[SW] CDN cache skip:', url, e.message);
        }
      }
    })
  );
  self.skipWaiting();
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* ── Fetch: cache-first, fallback to network, then cache result ── */
self.addEventListener('fetch', event => {
  /* Skip non-GET requests */
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      /* Return cached version immediately */
      const fetchPromise = fetch(event.request).then(response => {
        /* Cache successful responses for next time */
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
