<template>
  <div class="zzp-scroll">
    <slot name="topFixed"></slot>
    <!--{{shouldScrollTopFixed}} - {{shouldScrollBottomFixed}}-->
    <!--{{refreshStatus}} - {{loadMoreStatus}} - {{hasMore}}-->
    <div class="_zzp-wrapper" :class="{[direction]: true}" ref="wrapperRef">
      <div class="_zzp-scroll-content" ref="contentRef">
        <!--下拉刷新-->
        <div class="refresh-view-container" v-if="enableRefresh" :style="{lineHeight: `${refreshConfig && refreshConfig.stop}px`}">
          <slot name="refreshView" :refreshStatus="refreshStatus">
            <div class="content-box" v-if="refreshStatus === 'normal'">
              <span>{{ refreshConfig && refreshConfig.txt.normal || '下拉刷新'}}</span>
            </div>
            <div class="content-box" v-else-if="refreshStatus === 'meetRefresh'">
              <span>{{ refreshConfig && refreshConfig.txt.meetRefresh || '释放刷新'}}</span>
            </div>
            <div class="content-box" v-else-if="refreshStatus === 'refreshing'">
              <span>{{refreshConfig && refreshConfig.txt.refreshing || '加载中...'}}</span>
            </div>
            <div class="content-box" v-else-if="refreshStatus === 'rebounding'">
              <span>{{refreshConfig && refreshConfig.txt.rebounding || '加载完成'}}</span>
            </div>
          </slot>
        </div>
        <!-- 内容区 -->
        <!--view - 空页面-->
        <template v-if="enabledBlankView">
          <slot name="blankView">
            <p class="blank-view">暂无数据</p>
          </slot>
        </template>
        <!--view - 真实数据-->
        <template v-else>
          <!--beforeScrollTopFixed slot-->
          <slot name="beforeScrollTopFixed"></slot>
          <!--whenScrollTopFixed slot-->
          <template v-if="allSlotKeys.indexOf('whenScrollTopFixed') !== -1">
            <div class="when-scroll-top-fixed" :class="{'visibility-hidden': shouldScrollTopFixed}" ref="whenScrollTopFixedRef">
              <slot name="whenScrollTopFixed">scrollTopFixed</slot>
            </div>
          </template>
          <!--default slot-->
          <slot></slot>
          <!--whenScrollBottomFixed slot-->
          <template v-if="allSlotKeys.indexOf('whenScrollBottomFixed') !== -1">
            <div class="when-scroll-bottom-fixed" :class="{'visibility-hidden': shouldScrollBottomFixed}" ref="whenScrollBottomFixedRef">
              <slot name="whenScrollBottomFixed">scrollBottomFixed</slot>
            </div>
          </template>
          <!--afterScrollBottomFixed slot-->
          <slot name="afterScrollBottomFixed"></slot>
        </template>
        <!--上拉加载更多-->
        <div class="loadmore-view-container" v-if="enableLoadMore && !enabledBlankView" :style="{lineHeight: `${loadMoreConfig && loadMoreConfig.threshold}px`}">
          <slot name="loadMoreView" :loadMoreStatus="loadMoreStatus">
            <div class="content-box" v-if="!hasMore">
              <span>{{ loadMoreConfig && loadMoreConfig.txt.noMore || '没有更多数据了'}}</span>
            </div>
            <div class="content-box" v-else-if="loadMoreStatus === 'normal'">
              <span>{{loadMoreConfig && loadMoreConfig.txt.normal || '上拉加载更多'}}</span>
            </div>
            <div class="content-box" v-else-if="loadMoreStatus === 'loading' || loadMoreStatus === 'normal'">
              <span>{{loadMoreConfig && loadMoreConfig.txt.loading || '正在加载...'}}</span>
            </div>
            <div class="content-box" v-else-if="loadMoreStatus === 'rebounding'">
              <span>{{loadMoreConfig && loadMoreConfig.txt.rebounding || '已加载'}}</span>
            </div>
          </slot>
        </div>
      </div>
      <!-- 固定 whenScrollTopFixed slot-->
      <template v-if="allSlotKeys.indexOf('whenScrollTopFixed') !== -1 && shouldScrollTopFixed && !enabledBlankView">
        <div class="when-scroll-top-fixed enabled">
          <slot name="whenScrollTopFixed"></slot>
        </div>
      </template>
      <!-- 固定 whenScrollBottomFixed slot-->
      <template v-if="allSlotKeys.indexOf('whenScrollBottomFixed') !== -1 && shouldScrollBottomFixed && !enabledBlankView">
        <div class="when-scroll-bottom-fixed enabled">
          <slot name="whenScrollBottomFixed"></slot>
        </div>
      </template>
    </div>
    <slot name="bottomFixed"></slot>
  </div>
</template>

<script>
import initBScroll from './mixins/initBScroll'
import mixAutoKeyboard from './mixins/mixAutoKeyboard'
export default {
  name: 'ZzpScroll',
  mixins: [initBScroll, mixAutoKeyboard],
  data () {
    return {
      shouldScrollTopFixed: false,
      shouldScrollBottomFixed: false,
      enabledBlankView: false,
      hasMore: true,
      beforeScrollPos: { x: 0, y: 0 }
    }
  },
  computed: {
    allSlotKeys () {
      return Object.keys(this.$slots).concat(Object.keys(this.$scopedSlots)).filter((value, index, self) => { return self.indexOf(value) === index })
    }
  },
  methods: {
    changeBlankViewStatus (show = false) {
      // if (this.allSlotKeys.indexOf('blankView') !== -1) {
      //   this.enabledBlankView = enableBlankView
      // }
      this.enabledBlankView = show
      this.hasMore = !show
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api-specific.html#autopulldownrefresh-v1140
    autoPullDownRefresh () {
      this.$nextTick(() => {
        this.scroll && this.scroll.autoPullDownRefresh()
      })
    },
    // scrollTo(x, y, time, easing)
    scrollTo (x = 0, y = 0, time, easing) {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollBy () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    stopLoading (hasMore) {
      this.forceUpdate(hasMore)
    },
    forceUpdate (hasMore) {
      this.hasMore = hasMore
      if (this.enableRefresh && this.refreshStatus === 'refreshing') {
        this.refreshStatus = 'rebounding'
        setTimeout(() => {
          this.scroll['finishPullDown']()
          this.refreshStatus = 'normal'
          this.refresh()
        }, 1200)
      } else if (this.enableLoadMore && this.loadMoreStatus === 'loading') {
        this.loadMoreStatus = 'rebounding'
        // 获取到列表重新计算底部吸底
        this.$nextTick(() => {
          this.__handlerOnScroll(this.beforeScrollPos)
        })
        setTimeout(() => {
          this.scroll['finishPullUp']()
          this.loadMoreStatus = 'normal'
          this.refresh()
        }, 1200)
      } else {
        this.refresh()
      }
    },
    // 初始化scroll完成自动调用该方法
    _afterInitScroll () {
      // 监听滚动
      if (this.allSlotKeys.indexOf('whenScrollTopFixed') !== -1 || this.allSlotKeys.indexOf('whenScrollBottomFixed') !== -1) {
        this.__handlerOnScroll(this.beforeScrollPos)
        this.scroll.on('scroll', (pos) => {
          this.__handlerOnScroll(pos)
        })
      }
    },
    __handlerOnScroll (pos) {
      this.beforeScrollPos = pos
      // 处理滚动fixed定位 垂直布局，并传有whenScrollTopFixed || whenScrollBottomFixed slot
      if (this.direction === 'vertical') {
        if (this.allSlotKeys.indexOf('whenScrollTopFixed') !== -1) {
          let offsetTop = (this.$refs['whenScrollTopFixedRef'] && this.$refs['whenScrollTopFixedRef'].offsetTop) || 9999999999
          // console.log(this.$refs['whenScrollTopFixedRef'] && this.$refs['whenScrollTopFixedRef'].offsetTop || '??')
          if (-offsetTop >= pos.y) {
            this.shouldScrollTopFixed = true
          } else {
            this.shouldScrollTopFixed = false
          }
        }
        if (this.allSlotKeys.indexOf('whenScrollBottomFixed') !== -1 && !this.enabledBlankView) {
          let rootClientHeight = this.$refs['wrapperRef'] && this.$refs['wrapperRef'].offsetHeight
          let selfClientHeight = this.$refs['whenScrollBottomFixedRef'] && this.$refs['whenScrollBottomFixedRef'].offsetHeight
          let offsetTop = (this.$refs['whenScrollBottomFixedRef'] && this.$refs['whenScrollBottomFixedRef'].offsetTop) || 0
          // console.log(rootClientHeight, offsetTop, rootClientHeight - selfClientHeight - offsetTop)
          if (rootClientHeight - selfClientHeight - offsetTop <= pos.y) {
            this.shouldScrollBottomFixed = true
          } else {
            this.shouldScrollBottomFixed = false
          }
        }
        if (!this.enableRefresh || this.refreshStatus === 'refreshing') {
          return
        }
        let { threshold = 50 } = this.refreshConfig
        if (pos.y >= threshold) {
          if (this.refreshStatus === 'normal') {
            this.refreshStatus = 'meetRefresh'
          }
        } else {
          if (this.refreshStatus === 'meetRefresh') {
            this.refreshStatus = 'normal'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzp-scroll {
    height: 100%;
    display: flex;
    flex-direction: column;
    ._zzp-wrapper {
      position: relative;
      flex: 1;
      overflow: hidden;

      &.horizontal {
        width: 100%;
        white-space: nowrap;
        ._zzp-scroll-content {
          display: inline-block;
        }
      }

      ._zzp-scroll-content {
        min-height: 100.5%;

        .refresh-view-container {
          position: absolute;
          left: 0;
          width: 100%;
          display: flex;
          line-height: 0;
          transform: translate(0, -100%);
          justify-content: center;
          align-items: center;
          transition: all;
          color: #999;
          .content-box {
            display: flex;
            align-items: center;
          }
        }
        .loadmore-view-container {
          color: #999;
          .content-box {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .visibility-hidden {
          visibility: hidden;
        }
      }
      .when-scroll-top-fixed {
        &.enabled {
          position: absolute;
          left: 0; right: 0; top: 0;
        }
      }
      .when-scroll-bottom-fixed {
        &.enabled {
          position: absolute;
          left: 0; right: 0; bottom: 0;
        }
      }
      .blank-view {
        text-align: center;
        line-height: 40px;
        color: #999;
      }
    }
  }
</style>
