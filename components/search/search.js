// components/search/search.js
var BookModel = require('../../models/bookData.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotKeyWord: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    isFocus: false,
    placeholder: "书籍名",
    hotKeyWord: [],
    searchHistory: []
  },
  onLoad() {
    this.setData({
      hotKeyWord: this.properties.hotKeyWord
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel() {
      // 调用的是父组件的事件
      this.triggerEvent('cancel')
    },
    onDelete() {
      console.log(11111)
      this.setData({
        isFocus: false,
        value: ''
      })
    },
    onConfirm() {
      
    }
  }
})