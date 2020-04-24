# Sticky 粘性布局 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import sticky from 'zzp-ui/packages/sticky'
Vue.use(sticky)
```
或
```vue
import Sticky from 'zzp-ui/packages/sticky/sticky'
export default {
  components: {
    [Sticky.name]: Sticky
  }
}
```

## Usage

```vue
<template>
<div class="scroll-container" ref="zScroll">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li class="sticky">
      <zzp-sticky :container="container" when-top when-bottom>
        <span>when-top</span>
        <span> when-bottom</span>
      </zzp-sticky>
    </li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      container: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.container = this.$refs['zScroll']
    })
  }
}
</script>
```

### Sticky Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| container | 滚动容器 | `Object` | - | Y | - |
| when-top | 是否滚动到`顶部`吸附 | `Boolean` | `false` | - | - |
| when-bottom | 是否滚动到`底部`吸附 | `Boolean` | `false` | - | - |

--- 

### Scroll methods 

| 方法 | 说明 | 参数 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| computePosition | 计算粘性效果 | - | - | - | - |
