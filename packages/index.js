import './assets/stylesheets/application.scss'

import VueExt from './vue-ext'

import Layout from './layout'
import Roll from './roll'
const uses = [Layout, Roll]
const components = []

// eg: Vue.use(zzp-ui, {router, store})
const install = function (Vue, globalVueOptions) {
  if (install.installed) {
    return
  }
  // this.$ext
  Vue.use(VueExt, globalVueOptions)
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
