import './assets/stylesheets/application.scss'

import VueExt from './vue-ext'

import directives from './directives'

import layout from './layout'
import scroll from './scroll'
import roll from './roll'
import json from './json'
import qrcode from './qrcode'
import icon from './icon'
import rate from './rate'
import model from './model'
const uses = [layout, scroll, roll, json, qrcode, icon, rate, model]
const components = []

// eg: Vue.use(zzp-ui, {router, store})
const install = function (Vue, globalVueOptions) {
  if (install.installed) {
    return
  }
  // this.$ext
  Vue.use(VueExt, globalVueOptions)
  // directives
  Vue.use(directives)
  // components
  uses.map(component => Vue.use(component))
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}

// import VueExt from './vue-ext'
// export default {
//   // eg: Vue.use(zzp-ui, {router, store})
//   install (Vue, globalVueOptions) {
//     // this.$ext
//     Vue.use(VueExt, globalVueOptions)
//   }
// }
