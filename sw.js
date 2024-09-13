self.addEventListener('push', async () => {
    self.registration.showNotification('Hello, world!', {})
})
