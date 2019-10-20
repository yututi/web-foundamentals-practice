
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("workers.js").then(
            (registration) => {
                console.log("registered")
            },
            (error) => {
                console.log("registration failed")
            }
        )
    })
}

document.addEventListener("DOMContentLoaded", () => [
    // TODO check response from Service worker
])