# Rate评分 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import rate from 'zzp-ui/packages/rate'
Vue.use(rate)
```
或
```vue
import Rate from 'zzp-ui/packages/rate/rate'
export default {
  components: {
    [Rate.name]: Rate
  }
}
```

## Usage

```vue
<template>
    <zzp-rate class="one-rate" icon="icon-star" v-model="rate"></zzp-rate>
    <zzp-rate icon="icon-star" :value="0.5"></zzp-rate>
    <zzp-rate icon="icon-star" :value="1"></zzp-rate>
    <zzp-rate icon="icon-star" :value="3.8"></zzp-rate>
    <zzp-rate icon="icon-star" :value="5"></zzp-rate>
</template>

export default {
    data () {
      return {
        rate: 3
      }
    }
}
```

### Rate Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | 当前个数，显示支持小数 | `Number`` | - | Y | - |
| max | 最大个数 | `Number` | `5` | - | - |
| icon | 图标 | `String` | - | - | - |
| color | 底色 | `String` | `#D8D8D8` | - | - |
| activeColor | 激活颜色 | `String` | `#FF9B5E` | - | - |
| type | 类型, `可选：full, half, real` | `String` | `full` | - | - |

--- 

其他说明

* 调整大小： 设置 `zzp-rate`内部的`zzp-icon`的`font-size`
* 调整间距： 设置 `zzp-rate`内部的`zzp-icon`的`margin-right`

eg:
```scss
.one-rate {
  /deep/ .zzp-icon {
    font-size: 20px;
    margin-right: 5px;
  }
}
```

