/* ══════════════════════════════════════════════════════
   Vedomostný QUIZ 2026 – Service Worker (PWA)
   Cache-first s network fallback, auto-update
   ══════════════════════════════════════════════════════ */

const CACHE_NAME = 'quiz-2026-v8-20260303';
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

/* ── Fetch: network-first for local HTML, cache-first for CDN, skip Firebase ── */
self.addEventListener('fetch', event => {
  /* Skip non-GET requests */
  if (event.request.method !== 'GET') return;

  const url = event.request.url;

  /* NEVER intercept Firebase / Firestore / Google APIs */
  if (url.includes('firestore.googleapis.com') ||
      url.includes('firebase') ||
      url.includes('identitytoolkit') ||
      url.includes('securetoken')) return;

  /* Network-first for local HTML files (so updates arrive immediately) */
  const isHTML = url.endsWith('.html') || url.endsWith('/');
  if (isHTML) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  /* Cache-first for CDN / static assets */
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
