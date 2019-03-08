// pages/popular/popular.js
var PopularModel = require('../../models/popularData.js')
var popularModel = new PopularModel()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentItem: {},
    index: 8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    // 获取数据是异步的，因此后面没有接收到数据
    popularModel.getLatest(function(res) {
      that.setData({
        currentItem: res
      })
    })
    this.setData({
      index: this.data.currentItem.index
    })
  },
  onNext() {
    var that = this
    var index = that.data.currentItem.index
    if (index < 8) {
      popularModel.getNext(index, function(res) {
        that.setData({
          currentItem: res
        })
      })
      index = index + 1
      that.setData({
        index: index
      })
    }
  },
  onPrev() {
    var that = this
    var index = that.data.currentItem.index
    if (index > 1) {
      popularModel.getPrevious(index, function(res) {
        that.setData({
          currentItem: res
        })
      })
      index = index - 1
      that.setData({
        index: index
      })
    }
  }
})