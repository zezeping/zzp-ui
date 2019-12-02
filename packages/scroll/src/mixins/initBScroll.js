import BScroll from 'better-scroll'
// import { getRect } from '../lib'
export default {
  props: {
    // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options-advanced.html#pulldownrefresh
    refreshConfig: {
      type: [Object],
      default () { return { threshold: 50, stop: 30, txt: { normal: '下拉刷新', meetRefresh: '释放刷新', refreshing: '加载中...', rebounding: '加载完成' } } }
    },
    // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options-advanced.html#pullupload
    loadMoreConfig: {
      type: [Object],
      default () { return { threshold: 30, txt: { normal: '上拉加载更多', rebounding: '已加载', loading: '正在加载...', noMore: '没有更多数据了' } } }
    },
    // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options-advanced.html#scrollbar
    scrollbarConfig: {
      type: [Boolean, Object],
      default () {
        return {
          fade: true,
          interactive: false // 1.8.0 新增
        }
      }
    },
    startX: {
      type: [Number],
      default: 0
    },
    startY: {
      type: [Number],
      default: 0
    },
    freeScroll: {
      type: [Boolean],
      default: false
    },
    direction: {
      type: String,
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      },
      default: 'vertical'
    },
    enableRefresh: {
      type: [Boolean],
      default: false
    },
    enableLoadMore: {
      type: [Boolean],
      default: false
    },
    probeType: {
      type: Number,
      default: 3
    },
    mouseWheel: {
      type: [Boolean],
      default: false
    },
    bindToWrapper: {
      type: [Boolean],
      default: false
    },
    autoBlur: {
      type: [Boolean],
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: true
    },
    preventDefaultException: {
      type: Object,
      default () {
        return {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/i,
          className: /(^|\s)preventDefaultException(\s|$)/
        }
      }
    },
    stopPropagation: {
      type: [Boolean],
      default: false
    },
    bounce: {
      type: [Boolean, Object],
      default: true
    },
    useTransition: {
      type: [Boolean],
      default: true
    }
  },
  data () {
    return {
      scroll: null,
      /*
      * normal 正常状态
      * meetRefresh 释放后可以执行刷新
      * refreshing 正在刷新中
      * rebounding: 刷新完成，回弹过程中
      * */
      refreshStatus: 'normal',
      /*
      * normal 正常状态
      * loading 正在刷新中
      * rebounding: 加载完成，回弹过程中
      * */
      loadMoreStatus: 'normal'
    }
  },
  methods: {
    _initScroll () {
      let wrapperRef = this.$refs['wrapperRef']
      let contentRef = this.$refs['contentRef']
      // 保证dom渲染完成
      if (!wrapperRef || !contentRef) {
        return
      }
      // 保证只初始化一次
      if (this.scroll) {
        return
      }
      // if (this.refreshConfig || this.loadMoreConfig) {
      //   contentRef.style.minHeight = `${getRect(wrapperRef).height}px`
      // }
      let options = {
        probeType: this.probeType,
        click: true,
        scrollY: this.freeScroll || this.direction === 'vertical',
        scrollX: this.freeScroll || this.direction === 'horizontal',
        scrollbar: this.scrollbarConfig,
        pullDownRefresh: this.enableRefresh && this.refreshConfig,
        pullUpLoad: this.enableLoadMore && this.loadMoreConfig,
        startX: this.startX,
        startY: this.startY,
        freeScroll: this.freeScroll,
        preventDefault: this.preventDefault,
        preventDefaultException: this.preventDefaultException,
        bindToWrapper: this.bindToWrapper,
        autoBlur: this.autoBlur,
        stopPropagation: this.stopPropagation,
        // 是否支持pc滚轮滚动
        mouseWheel: this.mouseWheel,
        bounce: this.bounce,
        useTransition: this.useTransition
        // zoom: this.zoom
      }
      // if (this.scroll) {
      //   this.scroll.destroy()
      // }
      this.scroll = new BScroll(wrapperRef, options)
      // 初始化下拉刷新
      if (this.enableRefresh) {
        this._initPullDownRefresh()
      }
      // 初始化加载更多
      if (this.enableLoadMore) {
        this._initPullUpLoad()
      }
      this._afterInitScroll()
    },
    _initPullDownRefresh () {
      this.scroll.on('pullingDown', () => {
        if (this.enableRefresh && this.refreshStatus === 'meetRefresh') {
          this.refreshStatus = 'refreshing'
          this.$emit('refresh')
        } else {
          this.scroll['finishPullDown']()
        }
      })
    },
    // loadMore
    _initPullUpLoad () {
      this.scroll.on('pullingUp', () => {
        if (this.enableLoadMore && this.refreshStatus === 'normal' && this.loadMoreStatus === 'normal' && this.hasMore) {
          this.loadMoreStatus = 'loading'
          this.$emit('loadMore')
        } else {
          this.scroll['finishPullUp']()
        }
      })
    },
    _watchImgsLoad () {
      // 解决better-scroll因为图片没有下载完导致的滚动条高度不够，无法浏览全部内容的问题。
      // 原因是better-scroll初始化是在dom加载后执行，此时图片没有下载完成，导致滚动条高度计算不准确。
      // 利用图片的complete属性进行判断，当所有图片下载完成后再对scroll重新计算。
      let imgs = this.$refs['wrapperRef'].getElementsByTagName('img')
      let length = imgs.length
      if (length) {
        let finishedImgs = []
        let timer = setInterval(() => {
          for (let img of imgs) {
            if (finishedImgs.length === imgs.length) {
              this.forceUpdate() // bs提供的刷新的方法，详见官网
              return clearInterval(timer)
            } else if (img.complete) {
              if (finishedImgs.indexOf(img) === -1) {
                finishedImgs.push(img)
              }
            }
          }
        }, 100)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
      this._watchImgsLoad()
    })
  },
  beforeDestroy () {
    this.scroll && this.scroll.destroy()
  }
}
