// pages/popular-content/popular-content.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    favorItem: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      favorItem: JSON.parse(options.favorItem)
    })
  }
})