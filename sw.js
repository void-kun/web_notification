self.addEventListener('push', async (res) => {
    console.log("push data: ", res);
    self.registration.showNotification('Hello, world!', {})
})
