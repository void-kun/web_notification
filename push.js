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

let sub =  {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABm5AB1ZQAKug5ScWEsvSjBB93NFd70PXIe7-LX10OKVSwCOyK4Ww18W1H4RNEyT-c6wf1p5_ieSUEJTWJlhfdAdDk4Zvofrjz4ndVuePjbXaECBiKtqfyJQcueJsu3Pgt7gzIpa_3f9N3-QTjDohnFFvJ4-i2RAw5hU6er6D2RJATZ8FI","expirationTime":null,"keys":{"auth":"iZFz-EZxn2NK4z7iDldDMA","p256dh":"BECVxRVerx3baZESNTzleZzBW6VcbNg1cSVWnEMEhUoQxqQzhGqdNoEhZsZYzbDSn0ptUOWyw-7cpA7bd6XEfis"}}
push.sendNotification(sub, 'Chao ae nhe')
