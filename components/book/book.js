// components/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotList: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onToDetial() {
      wx.navigateTo({
        url: '/pages/book-detail/book-detail'
      })
    }
  }
})
