var HTTP = require('../utils/http.js')
class LikeModel extends HTTP {
  constructor() {
    super()
  }
  like(like_or_cancel, id, type) {
    let url = like_or_cancel === 'cancel' ? '/like/cancel' : '/like'
    this.request({
      url: url,
      method: 'POST',
      data: {
        "art_id": id,
        "type": type
      },
      success: (data) => {
        console.log(data)
      }
    })
  }
}
module.exports = LikeModel