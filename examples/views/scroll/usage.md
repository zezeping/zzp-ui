# Scroll base BetterScroll [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import scroll from 'zzp-ui/packages/scroll'
Vue.use(scroll)
```
```vue
import Scroll from 'zzp-ui/packages/scroll/scroll'
export default {
  components: {
    [Scroll.name]: Scroll
  }
}
```

## Usage

```vue
<template>
    <zzp-scroll enableRefresh @refresh="refreshData" enableLoadMore  @loadMore="loadMoreData" ref="zScroll">
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
</template>

<script>
export default {
  data () {
    return {
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
```

### Scroll Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| refreshConfig | 下拉刷新基础配置项 | `Object` | `{ threshold: 50, stop: 30, txt: { normal: '下拉刷新', meetRefresh: '释放刷新', refreshing: '加载中...', rebounding: '加载完成' } }` | - | - |
| loadMoreConfig | 加载更多基础配置项 | `Object` | `{ threshold: 30, txt: { normal: '上拉加载更多', rebounding: '已加载', loading: '正在加载...', noMore: '没有更多数据了' } }` | - | - |
| scrollbarConfig | 滚动条基础配置项 | `Boolean`,`Object` | `{ fade: true, interactive: false }` | - | - |
| startX | 横轴方向初始化位置 | `Number` | `0` | - | - |
| startY | 纵轴方向初始化位置 | `Number` | `0` | - | - |
| freeScroll | 支持横向和纵向同时滚动 | `Boolean` | `false` | - | - |
| direction | 方向，可选：`horizontal`，`vertical` | `String` | `vertical` | - | - |
| enableRefresh | 是否允许下拉刷新 | `Boolean` | `false` | - | - |
| enableLoadMore | 是否允许加载更多 | `Boolean` | `false` | - | - |
| mouseWheel | 是否支持滚轮 | `Boolean` | `false` | - | - |
| bindToWrapper | [`move`事件绑定到滚动的容器上(默认在`document`上)](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#bindtowrapper) | `Boolean` | `false`(`vant popup`组件移动端无法滚动可以将该属性设置为`true`) | - | - |

### Scroll methods 

| 方法 | 说明 | 参数 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| changeBlankViewStatus | 显示/隐藏空白页 | `show[Boolean]`: 是否显示 | `false` | - | - |
| autoPullDownRefresh | 进入页面自动调用下来刷新 | - | - | - | - |
| forceUpdate | 强制刷新 | `hasMore[Boolean]`: 是否还有更多数据（`false`将不再调用加载更多） | - | - | - |
| scrollTo | [滚动到坐标](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api.html#scrolltox-y-time-easing) | `x = 0, y = 0, time, easing` | - | - | - |
| scrollBy | [相对于当前坐标滚动](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api.html#scrollbyx-y-time-easing) | `x = 0, y = 0, time, easing` | - | - | - |
| scrollToElement | [滚动到元素](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api.html#scrolltoelementel-time-offsetx-offsety-easing) | `el, time, offsetX, offsetY, easing` | - | - | - |


### Scroll slots 

| 名称 | 说明 | 默认 | 额外说明 | 版本 |
| ---- | ---- | ---- | ---- | ---- |
| topFixed | 顶部固定 | - | - | - |
| bottomFixed | 底部固定 | - | - | - |
| blankView | 空白页 | - | - | - |
| beforeScrollTopFixed | 顶部滚动吸顶slot之前的视图 | - | - | - |
| whenScrollTopFixed | 顶部滚动吸顶 | - | - | - |
| default | 默认内容区 | - | - | - |
| whenScrollBottomFixed | 底部吸底 | - | - | - |
| afterScrollBottomFixed | 底部吸底slot之后的视图 | - | - | - |


