export default {
  props: {
    autoKeyboard: {
      type: [Boolean],
      default: false
    }
  },
  data () {
    return {
      keyboardItems: [],
      keyboardResizeEventFunc: () => {
        this.keyboardItems.forEach(item => {
          let dom = item.dom
          if (dom && item.isFocus) {
            setTimeout(() => {
              if (item.viewHeight === window.innerHeight) {
                dom.blur()
              } else {
                (dom.scrollIntoViewIfNeeded && dom.scrollIntoViewIfNeeded(false)) || dom.scrollIntoView(false)
              }
            }, 200)
          }
        })
      }
    }
  },
  watch: {
    scroll (nv) {
      if (nv && this.autoKeyboard) {
        this._handleAutoKeyboard()
      }
    }
  },
  methods: {
    _handleAutoKeyboard () {
      this.keyboardItems = Array.from(this.$el.querySelectorAll('input')).concat(Array.from(this.$el.querySelectorAll('textarea'))).map(dom => {
        return {
          dom: dom,
          viewHeight: window.innerHeight,
          isFocus: false
        }
      })
      window.addEventListener('resize', this.keyboardResizeEventFunc)
      this.keyboardItems.forEach((item) => {
        item.isFocus = false
        item.dom.addEventListener('focus', (event) => {
          item.isFocus = true
        })
        item.dom.addEventListener('blur', (event) => {
          item.isFocus = false
        })
      })
      // better-scroll 提供支持 autoBlur http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#autoblurv170
      // input / textarea, 点击页面失去焦点
      // this.$el && this.$el.addEventListener('click', (event) => {
      //   this.keyboardItems.forEach(item => {
      //     if (event.target !== item.dom) {
      //       item.dom.blur()
      //     }
      //   })
      // })
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.keyboardResizeEventFunc)
  }
}
