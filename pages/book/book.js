// pages/book/book.js
var BookModel = require('../../models/bookData.js')
var bookModel = new BookModel()
console.log(bookModel)
Page({
  data: {
    hotList: []
  },
  onLoad(options) {
    var that = this
    bookModel.getHotList(function(res) {
      that.setData({hotList: res})
    })
  }
})