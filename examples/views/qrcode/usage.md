# Qrcode 文字转二维码 [pc&wap]
base [vue-qrcode](https://github.com/fengyuanchen/vue-qrcode)

## Install

单独安装组件
```vue
import Vue from 'vue'
import qrcode from 'zzp-ui/packages/qrcode'
Vue.use(qrcode)
```
或
```vue
import Qrcode from 'zzp-ui/packages/qrcode/qrcode'
export default {
  components: {
    [Qrcode.name]: Qrcode
  }
}
```

### Usage
```vue
<zzp-qrcode value="http://t.uc.cn/11_6mRFz"></zzp-qrcode>
<!--<qrcode value="Hello, World!" :options="{ width: 200 }"></qrcode>-->

```

### Qrcode Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | 需要生成二维码的文本 | `String` | - | Y | - |
| options | 选项 | `Object` | - | - | - |
| tag | dom标签,允许的值：`canvas`, `img` | `String` | `canvas` | - | - |

---

[`vue-qrcode`](https://fengyuanchen.github.io/vue-qrcode/)
