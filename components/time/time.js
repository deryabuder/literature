// components/time/time.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: Number, 
    pubdate: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 0,
    currentMonth: '',
    currentYear: ''
  },
  // 用onLoad和attached获取不到数据
  ready() {
    this.getTime()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 终于获取到数据了
    getTime() {
      var pubdate = this.properties.pubdate
      var currentMonth = pubdate.substr(6, 1)
      var currentYear = pubdate.substr(0, 4)
      currentMonth = this.SectionToChinese(currentMonth)
      this.setData({
        index: this.properties.index,
        currentMonth: currentMonth,
        currentYear: currentYear
      })
    },
    SectionToChinese(section) {
      var chnNumChar = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      section = Number(section) - 1
      return chnNumChar[section]
    }
  }
})