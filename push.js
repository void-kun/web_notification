const push = require("web-push");

let vapidKeys = {
  publicKey: 'BCTGSfxo0fzWJBr5A6WFje-RNIrMruZLy9m5SE8fy9D1zde-evcyjcsNZzfUE-_nZnHLP9hWha8bVzjHFmc96kQ',
  privateKey: 'N0aevIdAQ_LkaacbPDC6Yq5ZMMEJlOCwQdonOuPbJg8'
}

push.setVapidDetails(
  'mailto:test@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

let sub = {}
push.sendNotification(sub, 'Hello, world!')
