// pages/book/book.js
var BookModel = require('../../models/bookData.js')
var bookModel = new BookModel()
Page({
  data: {
    hotList: [],
    hotKeyWord: [],
    isFocus: false,
    placeholder: "搜索书籍",
  },
  onLoad(options) {
    var that = this
    bookModel.getHotList(function(res) {
      that.setData({hotList: res})
    })
    bookModel.getHotKeyWord(function(res) {
      that.setData({hotKeyWord: res.hot})
    })
  },
  onFocus() {
    this.setData({
      isFocus: true
    })
  },
  onCancel() {
    this.setData({
      isFocus: false
    })
  }
})