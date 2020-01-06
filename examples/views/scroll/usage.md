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
    <zzp-scroll enableRefresh @refresh="refreshData" enableLoadMore  @loadMore="mixLoadMoreScrollData" ref="zScroll">
      <div slot="topFixed" style="background: #aaa">topFixed <button @click="toggleBlankView">toggleBlankView</button></div>
      <ul slot="beforeScrollTopFixed">
        <li>slot - beforeScrollTopFixed</li>
      </ul>
      <ul slot="whenScrollTopFixed">
        <li style="background: #f00">slot - whenScrollTopFixed</li>
      </ul>
      <ul>
        <li v-for="(item, idx) in mixScrollData.items" :key="idx">{{item.id}} - {{ item['Name'] }}</li>
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
import mixScroll from '../../mixins/mixScroll'
export default {
  mixins: [mixScroll],
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
| probeType | [`scroll派发滚动事件的时机`](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#probetype) | `Number` | `3` | - | - |
| bindToWrapper | [`move`事件绑定到滚动的容器上(默认在`document`上)](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#bindtowrapper) | `Boolean` | `false`(`vant popup`组件移动端无法滚动可以将该属性设置为`true`) | - | - |
| autoBlur | [在滚动之前会让当前激活的元素（input、textarea）自动失去焦点](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#autoblurv170) | `Boolean` | `true` | - | - |
| preventDefault | [`事件派发后是否阻止浏览器默认行为`](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#preventdefault) | `Boolean` | `true` | - | - |
| preventDefaultException | [`允许部分原生组件的默认行为`](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#preventdefaultexception) | `Object` | `{tagName: /^(INPUT\|TEXTAREA\|BUTTON\|SELECT)$/i, className: /(^\|\s)preventDefaultException(\s\|$)/}` | - | - |
| stopPropagation | [是否阻止事件冒泡。多用在嵌套 scroll 的场景](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#stoppropagationv190) | `Boolean` | `false` | - | - |
| bounce | [当滚动超过边缘的时候会有一小段回弹动画](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#bounce) | `Boolean`, `Object` | `true` | - | - |
| useTransition | [是否使用 CSS3 transition 动画。如果设置为 false，则使用 requestAnimationFrame 做动画](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#usetransition) | `Boolean` | `false(官方默认值为true)` | - | - |
| autoKeyboard | 是否自动适应移动端键盘弹起 | `Boolean` | `false` | - | - |

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

| 名称 | 说明 | 参数 | 额外说明 | 版本 |
| ---- | ---- | ---- | ---- | ---- |
| topFixed | 顶部固定 | - | - | - |
| bottomFixed | 底部固定 | - | - | - |
| blankView | 空白页 | - | - | - |
| beforeScrollTopFixed | 顶部滚动吸顶slot之前的视图 | - | - | - |
| whenScrollTopFixed | 顶部滚动吸顶 | - | - | - |
| default | 默认内容区 | - | - | - |
| whenScrollBottomFixed | 底部吸底 | - | - | - |
| afterScrollBottomFixed | 底部吸底slot之后的视图 | - | - | - |
| refreshView | 自定义下来刷新的视图 | `refreshStatus` | `refreshStatus`的值包括`normal 正常状态`,`meetRefresh 释放后可以执行刷新`, `refreshing 正在刷新中`, `rebounding: 刷新完成，回弹过程中` | - |
| loadMoreView | 自定义加载更多的视图 | `loadMoreStatus` | `loadMoreStatus`的值包括`normal 正常状态`, `loading 正在刷新中`, `rebounding: 加载完成，回弹过程中` | - |



--- 

### 常见问题解答

> 问：`van-popup`组件内部使用组件页面无法滚动

设置 `bindToWrapper` 为 `true`

> 问：微信中二维码在`Android`中长按无法弹出识别二维码, 或者小米手机原生浏览器`video`播放后无法暂停视频

给 `img`/`video` 添加class `preventDefaultException`

> 问：滚动时页面出现闪烁

设置 `useTransition` 为 `false` 

---
mixScroll   

```javascript
export default {
  data () {
    return {
      _mixApiFunc: null,
      _mixApiParams: {},
      mixApiExtraParams: {},
      mixScrollData: {
        fetching: false,
        items: [],
        pagination: null,
        // 是否存在空页面
        existBlankView: true
      }
    }
  },
  methods: {
    mixFetchScrollData (apiFunc, params = {}, appendMore = false) {
      this._mixApiFunc = apiFunc
      this._mixApiParams = Object.assign({ page: 1, pageSize: 10 }, params || {}, this.mixApiExtraParams)
      this.mixScrollData.fetching = true
      // if (!appendMore) {
      //   this.mixScrollData.items = []
      // }
      return apiFunc(this._mixApiParams).then(res => {
        this.mixScrollData.fetching = false
        if (appendMore) {
          this.mixScrollData.items = this.mixScrollData.items.concat(res.data.items)
        } else {
          this.mixScrollData.items = res.data.items
        }
        this.mixScrollData.pagination = res.data.pagination
        let hasMore = this.mixScrollData.pagination.total > this.mixScrollData.items.length
        this.$refs['zScroll'] && this.$refs['zScroll'].stopLoading(hasMore)
        this.$refs['zScroll'] && this.$refs['zScroll'].changeBlankViewStatus(this.mixScrollData.existBlankView && !this.mixScrollData.items.length)
        return res
      }).catch(err => {
        console.log(err)
        this.mixScrollData.fetching = false
        let hasMore = this.mixScrollData.pagination.total > this.mixScrollData.items.length
        this.$refs['bScrollRef'] && this.$refs['bScrollRef'].stopLoading(hasMore)
      })
    },
    mixLoadMoreScrollData () {
      this._mixApiFunc && this.mixFetchScrollData(this._mixApiFunc, Object.assign(this._mixApiParams, {
        page: this.mixScrollData.pagination.page + 1,
        pageSize: this.mixScrollData.pagination.pageSize
      }), true)
    }
  }
}
```
