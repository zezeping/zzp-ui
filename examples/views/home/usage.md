# zzp-ui [![npm](https://img.shields.io/npm/v/zzp-ui.svg?style=flat-square)](https://www.npmjs.com/package/zzp-ui)

本项目设计初衷是为了补足市面UI组件的不足，建议配合其他组件库使用，不建议全局引入！


## Global Install All

> 引入编译过后的组件库
```
import Vue from 'vue'
import ZzpUi from 'zzp-ui'
import 'zzp-ui/lib/zzp-ui.css'
Vue.use(ZzpUi)
```
> 未编译的组件库
```
import Vue from 'vue'
import ZzpUi from 'zzp-ui/packages'
Vue.use(ZzpUi)
```

---

## Single add $ext
```javascript
import Vue from 'vue'
import VueExt from 'zzp-ui/packages/vue-ext'
Vue.use(VueExt, globalVueOptions) // Vue.prototype.$ext
```
* `globalVueOptions`： eg: `{axios, store, router}`

> Usage
 ```
 // 挂载, 其中vueOptions的值可以覆盖globalVueOptions
 let componentInstance = this.$ext.mount(Component, componentOptions, vueOptions)
 // 卸载
 this.$ext.unmount(componentInstance)
 ```
