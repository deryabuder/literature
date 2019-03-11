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
    seletedComments: [],
    summary: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     *  因为请求数据是异步的，因此对请求数据的操作就在函数内部操作，
     *  如果写在外面，会在数据没有返回的时候操作数据。
     */
    bookModel.getBookDetail(options.index, (res)=>{
      this.setData({
        bookDetail: res,
        summary: res.summary.replace(/\\n/g, '\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
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