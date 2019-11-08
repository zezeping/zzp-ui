<template>
  <usage-with-demo :usage="usage">
    <zzp-scroll direction="horizontal" style="height: 80px; background: #999">
      <div style="display: inline-block; width: 100px">1</div>
      <div style="display: inline-block; width: 100px">2</div>
      <div style="display: inline-block; width: 100px">3</div>
      <div style="display: inline-block; width: 100px">4</div>
      <div style="display: inline-block; width: 100px">5</div>
      <div style="display: inline-block; width: 100px">6</div>
      <div style="display: inline-block; width: 100px">7</div>
    </zzp-scroll>
    <zzp-scroll enableRefresh @refresh="refreshData" enableLoadMore  @loadMore="loadMoreData" ref="zScroll" style="height: 370px">
      <div slot="topFixed" style="background: #aaa">topFixed <button @click="toggleBlankView">toggleBlankView</button></div>
      <ul slot="beforeScrollTopFixed">
        <li>slot - beforeScrollTopFixed</li>
      </ul>
      <ul slot="whenScrollTopFixed">
        <li style="background: #f00">slot - whenScrollTopFixed</li>
      </ul>
      <ul>
        <li v-for="(item, idx) in items" :key="idx">{{ item }}</li>
      </ul>
      <ul slot="whenScrollBottomFixed">
        <li style="background: #f00">slot - whenScrollBottomFixed</li>
      </ul>
      <ul slot="afterScrollBottomFixed">
        <li>slot - afterScrollBottomFixed</li>
      </ul>
      <div slot="bottomFixed" style="background: #aaa">bottomFixed</div>
    </zzp-scroll>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      items: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
    }
  },
  methods: {
    refreshData () {
      console.log('begin refreshing')
      // this.$refs['bScrollRef'].disable()
      setTimeout(() => {
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log('stop refreshing')
        this.$refs['zScroll'].stopLoading(true)
        // this.$refs['bScrollRef'].enable()
        this.$refs['zScroll'].changeBlankViewStatus(this.items.length === 0)
      }, 3000)
    },
    loadMoreData () {
      console.log('begin loadMore')
      setTimeout(() => {
        this.items = this.items.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
        this.$refs['zScroll'].stopLoading(this.items.length < 45)
        /* eslint-disable */
        console.log('finish loadMore')
        console.log(`items count: ${this.items.length}`)
      }, 3000)
    },
    toggleBlankView () {
      let zScroll = this.$refs['zScroll']
      zScroll.changeBlankViewStatus(!zScroll.enabledBlankView)
    }
  },
  mounted () {
    this.$refs['zScroll'].autoPullDownRefresh()
  }
}
</script>

<style lang="scss" scoped>
  li {
    line-height: 50px;
    &:nth-child(odd) {
      background: #eee;
    }
  }
</style>
