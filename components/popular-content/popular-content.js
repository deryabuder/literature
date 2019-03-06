// components/popular-content/popular-content.js
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

  attached() {
    this.setData({
      currentItem: this.properties.currentItem,
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})