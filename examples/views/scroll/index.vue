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
    <zzp-scroll enableRefresh @refresh="refreshData" enableLoadMore  @loadMore="mixLoadMoreScrollData" ref="zScroll" style="height: 370px">
      <div slot="topFixed" style="background: #aaa">topFixed <button @click="toggleBlankView">toggleBlankView</button></div>
      <ul slot="beforeScrollTopFixed">
        <li>slot - beforeScrollTopFixed</li>
      </ul>
      <ul slot="whenScrollTopFixed">
        <li style="background: #f00">slot - whenScrollTopFixed</li>
      </ul>
      <ul>
        <li v-for="(item, idx) in mixScrollData.items" :key="idx">
          {{item.id}} - {{ item['Name'] }}
        </li>
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
import mixScroll from '../../mixins/mixScroll'
export default {
  mixins: [mixScroll],
  data () {
    return {
      usage,
      items: []
    }
  },
  methods: {
    refreshData () {
      this.mixFetchScrollData(this.api.getArticles)
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
