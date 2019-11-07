# Layout 布局 [pc&wap]



### Install

单独安装组件
```vue
import Vue from 'vue'
import layout from 'zzp-ui/packages/layout'
Vue.use(layout)
```
或
```vue
import Row from 'zzp-ui/packages/layout/row'
import Col from 'zzp-ui/packages/layout/col'
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
}
```

### Usage
Layout 组件提供了`24列`栅格，通过在`Col`上添加`span`属性设置列所占的宽度百分比
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与`span`相同
```vue
<h5>基础用法</h5>
<zzp-row >
  <zzp-col span="8">span:8</zzp-col>
  <zzp-col span="8">span:8</zzp-col>
  <zzp-col span="8">span:8</zzp-col>
</zzp-row>
<hr>
<zzp-row>
  <zzp-col span="4">span: 4</zzp-col>
  <zzp-col span="10" offset="4">offset: 4, span: 10</zzp-col>
</zzp-row>

<hr>
<zzp-row>
  <zzp-col offset="12" span="12">offset: 12, span: 12</zzp-col>
</zzp-row>

<hr>
<h5>在列元素之间增加间距 (gutter="20")</h5>
<zzp-row gutter="20">
  <zzp-col span="8">span: 8</zzp-col>
  <zzp-col span="8">span: 8</zzp-col>
  <zzp-col span="8">span: 8</zzp-col>
</zzp-row>

<hr>
<h5>Flex 布局</h5>
<!-- 左对齐 -->
<zzp-row flex>
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
</zzp-row>

<!-- 居中 -->
<zzp-row flex justify="center">
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
</zzp-row>

<!-- 右对齐 -->
<zzp-row flex justify="end">
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
</zzp-row>

<!-- 两端对齐 -->
<zzp-row flex justify="space-between">
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
</zzp-row>

<!-- 每个元素的两侧间隔相等 -->
<zzp-row flex justify="space-around">
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
  <zzp-col span="6">span: 6</zzp-col>
</zzp-row>
```

### Props

> ZzpRow Props

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| gutter | 列元素之间的间距（单位为px） | `String`, `Number` | - | - | - |
| flex | flex布局 | `Boolean` | `false` | - | - |
| justify | Flex布局下的水平对齐方式，可选值为 `start`, `center`, `end`, `spance-between`, `space-around` | `String` | - | - | - |
| align | Flex布局下的垂直对齐方式，可选值为`top`, `center`, `bottom` | `String` | - | - | - |

> ZzpCol Props

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| span | 列元素宽度 | `Number` | - | - | - |
| offset | 列元素偏移距离 | `Number` | - | - | - |



