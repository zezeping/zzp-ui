# Skeleton 骨架屏 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import skeleton from 'zzp-ui/packages/skeleton'
Vue.use(skeleton)
```
或
```vue
import Skeleton from 'zzp-ui/packages/skeleton/skeleton'
export default {
  components: {
    [Skeleton.name]: Skeleton
  }
}
```

## Usage

```vue
<template>
  <zzp-skeleton :disabled="disabled" color="#f2f2f2">
    <div>
      <p><span data-skeleton>骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏 骨架屏</span></p>
      <p><span data-skeleton="#999">骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏 骨架屏骨架屏骨架屏骨</span></p>
      <ul>
        <img data-skeleton="#ff0" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2888261511,2808819884&fm=26&gp=0.jpg" alt="" style="width: 50px; height: 50px; background: #f00; display: inline-block; border-radius: 50%">
        <li><span data-skeleton="green">111</span></li>
        <li><span data-skeleton>222</span> <span data-skeleton>hello</span></li>
      </ul>
    </div>
  </zzp-skeleton>
</template>

<script>
</script>
```

### Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| disabled | 是否禁用 | `Boolean` | `false` | - | - |
| color | 默认骨架颜色 | `String` | `#f2f3f5` | - | - |

--- 

### 其他

* `data-skeleton` 元素属性指定骨架屏的颜色可以覆盖默认骨架颜色

---

### 说明

* 多行文字，请使用`<span>`标签包裹


