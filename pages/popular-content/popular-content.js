// components/popular-content/popular-content.js
var PopularModel = require('../../models/popularData.js')
var popularModel = new PopularModel()
Page({
  /**
   * 组件的初始数据
   */
  data: {
    currentItem: {},
    id: 0
  },

  onLoad(query) {
    var type = query.type
    var id = query.id
    this.setData({
      id: id
    })
    popularModel.getSpecific(type, id, (res) => {
      this.setData({
        currentItem: res
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onControl(e) {
      this.triggerEvent('tap', {
        playing: e.detail.playing
      }, {})
    }
  }
})