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
    currentImg: '',
    playing: false
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
    // audio的播放控制参考于https://www.cnblogs.com/liululin/p/6016617.html
    onPlay() {
      this.setData({
        playing: true
      })
      this.triggerEvent('tap', {
        playing: true
      }, {})
    },
    onPause() {
      this.setData({
        playing: false
      })
      this.triggerEvent('tap',{
        playing: false
      }, {})
    }
  }
})