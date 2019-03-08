// components/popular-img/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentImg: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentImg: ''
  },
  attached() {
    this.setData({
      currentImg: this.properties.currentImg
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})