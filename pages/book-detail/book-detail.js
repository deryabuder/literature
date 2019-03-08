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
    comments: [],
    seletedComments: []
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
      this.setData({
        comments: res.comments,
        seletedComments: res.comments.slice(0, 3)
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
  },
  onAddComment(e) {
    var commentStr = e._relatedInfo.anchorRelatedText
    var index = commentStr.indexOf('+')
    var content = commentStr.slice(0, index)
    var nums = commentStr.slice(index+1)
    var comment = {
      'content': content,
      'nums': nums
    }
    var comments = this.data.comments
    comments.unshift(comment)
    this.setData({comments : comments})
  }
})