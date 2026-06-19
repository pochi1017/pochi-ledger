// 설치 가능 조건 충족용 최소 서비스워커 (캐시는 하지 않음 — 항상 최신 로드)
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { /* 네트워크 그대로 통과 */ });
