# Model 对话框 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import model from 'zzp-ui/packages/model'
Vue.use(model)
```
或
```vue
import Model from 'zzp-ui/packages/model/model'
export default {
  components: {
    [Model.name]: Model
  }
}
```

### Usage
```vue
<template>
  <zzp-dialog v-model="show">hello dialog</zzp-dialog>
  <button @click="showDialog"></button>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },   
  methods: {
    showDialog () {
      // 打开模态框
      let model = this.$ext.mount(this.$options.components.ZzpDialog).show()
      setTimeout(() => {
        // 关闭模态框
        this.$ext.unmount(model)
      }, 3000)
    }
  }
}
</script>
```

### Model Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| v-model | 控制显示隐藏 | `Boolean` | - | - | - |
| mask | 是否有面具 | `Boolean` | `true` | - | - |
| maskLock | 面具是否锁住 | `Boolean` | - | - | - |
| delayCloseTime | 调用close方法延迟关闭 | `Integer` | `150` 单位ms | - | - |
| doClose | 关闭后的回调 | `Function` | - | - | - |
| position | 位置 | `String` | `center` | - | - |
| content | 如果不传slot可以使用该字段自定义html | `String` | - | - | - |

### Model Methods 

| 名称 | 说明 | 返回值 | 版本 |
| ---- | ---- | ---- | ---- |
| show | 显示 | `component instance` | - |
| close | 关闭 | `Promise` | - |

### Model Events 

| 名称 | 说明 | 版本 |
| ---- | ---- | ---- |
| beforeClose | 关闭之前 | - |
