var HTTP = require('../utils/http.js')
class BookModel extends HTTP {
  constructor() {
    super()
  }
  getHotList(success) {
    var params = { url: '/book/hot_list', success: success}
    this.request(params)
  }
  getHotKeyWord(success) {
    var params = { url: '/book/hot_keyword', success: success}
    this.request(params)
  }
  getBookDetail(success) {
    var params = {
      url: '/book/<id>/detail', success: success}
  }
  getSearchResult(q, success) {
    var params = {
      url: '/book/search?q='+ q, 
      success: success
    }
    this.request(params)
  }
}
module.exports = BookModel