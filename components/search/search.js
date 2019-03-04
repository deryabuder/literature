// components/search/search.js
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
    value: '',
    isFocus: false,
    placeholder: "搜索书籍"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onFocus() {
      this.setData({
        isFocus: true,
        placeholder: "书籍名"
      })
    },
    onToBook() {
      this.setData({
        isFocus: false,
        placeholder: "搜索书籍"
      })
    },
    onDelete() {
      this.setData({
        isFocus: false,
        placeholder: "搜索书籍"
      })
    }
  }
})
