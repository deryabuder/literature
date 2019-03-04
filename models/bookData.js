var HTTP = require('../utils/http.js')
class BookModel extends HTTP {
  constructor() {
    super()
  }
  getHotList(success) {
    var params = { url: '/book/hot_list', success: success}
    this.request(params)
  }
}
module.exports = BookModel