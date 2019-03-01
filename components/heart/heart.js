// components/heart/heart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 251,
    isLike: false,
    src: "./images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeLike() {
      console.log(this.data.count)
      var count = this.data.count
      console.log(count)
      if(this.data.isLike) {
        count = count-1
        this.setData({ src: "./images/like@dis.png"})
      } else {
        count = count+1
        this.setData({ src: "./images/like.png" })
      }
      this.setData({ count: count })
      this.setData({ isLike: !this.data.isLike })
    }
  }
})
