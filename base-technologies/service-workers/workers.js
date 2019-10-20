const cacheName = "super-duper-cache"
const urlsToCache = []

self.addEventListener("install", () => {

})

self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        if (response) {
            return response
        }
        return fetch(event.request)
    }))
})