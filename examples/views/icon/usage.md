# Icon输出 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import icon from 'zzp-ui/packages/icon'
Vue.use(icon)
```
或
```vue
import Icon from 'zzp-ui/packages/icon/icon'
export default {
  components: {
    [Icon.name]: Icon
  }
}
```

## Usage

```vue
<template>
    <zzp-icon icon="icon-star"></zzp-icon>
</template>
```

### Json Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| icon | 图标 | `String` | - | Y | - |
| color | 颜色 | `String` | - | - | - |

