// pages/book-detail/book-detail.js
var BookModel = require('../../models/bookData.js')
var bookModel = new BookModel()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookDetail: {},
    isFocus: false,
    favor: {},
    comments: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bookModel.getBookDetail(options.index, (res)=>{
      this.setData({
        bookDetail: res
      })
    })
    bookModel.getBookFavor(options.index, (res)=> {
      this.setData({favor: res})
    })
    bookModel.getBookComment(options.index, (res)=>{
      console.log(res)
      this.setData({
        comments: res.comments
      })
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