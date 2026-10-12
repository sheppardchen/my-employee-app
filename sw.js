const CACHE_NAME = 'employee-app-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

// 安装阶段：缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 请求阶段：优先使用缓存，其次请求网络
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});