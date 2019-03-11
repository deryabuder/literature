// components/popular-content/popular-content.js
var PopularModel = require('../../models/popularData.js')
var popularModel = new PopularModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentItem: {}
  },

  onLoad(options) {
    console.log(1111)
    if (options.type && options.id) {
      let type = options.type
      let id = options.id
      popularModel.getSpecific(type, id, (res) => {
        this.setData({
          currentItem: res
        })
      })
    } else {
      this.setData({
        currentItem: this.properties.currentItem
      })
    }
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