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
    mouseWheel: {
      type: [Boolean],
      default: false
    },
    bindToWrapper: {
      type: [Boolean],
      default: false
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
        probeType: 3,
        click: true,
        scrollY: this.freeScroll || this.direction === 'vertical',
        scrollX: this.freeScroll || this.direction === 'horizontal',
        scrollbar: this.scrollbarConfig,
        pullDownRefresh: this.enableRefresh && this.refreshConfig,
        pullUpLoad: this.enableLoadMore && this.loadMoreConfig,
        startX: this.startX,
        startY: this.startY,
        freeScroll: this.freeScroll,
        bindToWrapper: this.bindToWrapper,
        stopPropagation: true,
        // 是否支持pc滚轮滚动
        mouseWheel: this.mouseWheel
        // bounce: this.bounce,
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
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  beforeDestroy () {
    this.scroll && this.scroll.destroy()
  }
}
