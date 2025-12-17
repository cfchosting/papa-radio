self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('radio-cache').then(cache => {
      return cache.addAll([
        'radio.php',
        '../../bootstrap/css/bootstrap.min.css',
        '../../bootstrap/js/bootstrap.bundle.min.js',
        '../../img/radiologo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});