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

let sub =  {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABm5R8dTGiAYyFXcgjkL6o3dEwzO8a60Q_pnDDK5ozv3Kec7vwEfEqOiJxOoTjuJB09CsU_q2Z5mOjkBZYXy7HErapKhrFP0tJGVnhlmbGAOh1soqBoW-BYzbLoDQKDyKZL1gzQQfnRKkpFj1EKqw-cXIXx4vNbuJhDeDYXI62hJDgZjVc","expirationTime":null,"keys":{"auth":"PmMUutQjY1IwLTAvFbKB0g","p256dh":"BE9ppkYbtQDQR-vJRnwRW2u61EeQFnf2aczChdXcsn_I4pUG1PvaseHybbovTO8STUxUn-WSzLgtYmnXv5GPeC0"}}
push.sendNotification(sub, 'Chao ae nhe')
