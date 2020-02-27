# Json输出 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import json from 'zzp-ui/packages/json'
Vue.use(json)
```
或
```vue
import Json from 'zzp-ui/packages/json/json'
export default {
  components: {
    [Json.name]: Json
  }
}
```

## Usage

```vue
<template>
    <zzp-json :json="json"></zzp-json>
    <zzp-json :json="json" :colorable="false"></zzp-json>
    <zzp-json :json="json" :space="4"></zzp-json>
</template>

export default {
    data () {
      return {
        json: {
          name: 'ZhangSan',
          age: 18,
          address: {
            province: 'Beijing',
            City: 'Beijing'
          },
          isGay: false,
          ca: null,
          favor: ['swimming', 'basketball']
        }
      }
    }
}
```

### Json Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| json | 需要展示的`json`对象 | `Object`, `Array` | - | Y | - |
| colorable | 是否有颜色 | `Boolean` | `true` | - | - |
| space | 缩进字符数 | `Number` | `2` | - | - |

--- 

### 第三方类似组件
* https://github.com/michaelfitzhavey/vue-json-tree-view
