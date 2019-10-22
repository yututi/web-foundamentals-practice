const cacheName = "super-duper-cache"
const urlsToCache = [
    "/base-technologies/service-workers/index.html",
    "/base-technologies/service-workers/index.js"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(urlsToCache))
    )
})

self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        if (response) {
            console.log("fetched from caches.")
            return response
        }
        return fetch(event.request)
    }))
})