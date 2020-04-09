# SignedBoard 手签板 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import signedBoard from 'zzp-ui/packages/signedBoard'
Vue.use(signedBoard)
```
或
```vue
import SignedBoard from 'zzp-ui/packages/signedBoard/signedBoard'
export default {
  components: {
    [SignedBoard.name]: SignedBoard
  }
}
```

## Usage

```vue
<template>
    <zzp-signed-board ref="signedBoard"></zzp-signed-board>
</template>

<script>
import { downloadFileFromBase64 } from 'zzp-ui/packages/assets/javascripts/lib/downloadFile'
export default {
  methods: {
    getSignedBoardImage () {
      let imgBase64 = this.$refs['signedBoard'].toImage()
      downloadFileFromBase64(imgBase64, 'signed.png')
    }
  } 
}
</script>
```

### Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| disabled | 是否禁用 | `Boolean` | `false` | - | - |
| signedOptions | 手写板配置项 | `Object` | `{ fillStyle: '#f2f2f2', strokeStyle: '#000', lineWidth: '1' }` | - | - |

signedOptions
* fillStyle 画布背景色
* strokeStyle 画笔颜色
* lineWidth 画笔宽度
---

### methods 

| 方法 | 说明 | 参数 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| clear | 清除 | - | - | - | - |
| toImage | 生成图片 | `type[String]` | `image/png` | - | - |

---
