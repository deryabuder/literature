// components/heart/heart.js
var LikeModel = require('../../models/likeData.js')
var likeModel = new LikeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: Number,
    count: Number,
    id: Number,
    type: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    isLike: 0,
    id: 1,
    type: 100
  },

  /**
   * 自定义组件的生命周期
   */
  onLoad() {
    // 这里不能获取properties中的变量的属性
    this.setData({
      count: this.properties.count,
      isLike: this.properties.isLike,
      type: this.properties.type,
      id: this.properties.id
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeLike() {
      var count = this.data.count
      if (this.data.isLike) {
        count = count - 1
      } else {
        count = count + 1
      }
      this.setData({
        count: count
      })
      this.setData({
        isLike: !this.data.isLike
      })
      var likeOrCancel = this.data.isLike ? 'like' : 'cancel'
      var id = this.data.id
      var type = this.data.type
      console.log(this.data)
      likeModel.like(likeOrCancel, id, type)
    }
  }
})