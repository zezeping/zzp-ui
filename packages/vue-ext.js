import watchPopStateChange from './assets/javascripts/lib/watchPopStateChange'
export default {
  install (Vue, globalVueOptions = {}) {
    Vue.prototype.$ext = Vue.prototype.$ext || {
      mount (Component, componentOptions = {}, vueOptions = {}) {
        let parentDom = componentOptions['onEl'] || document.body
        delete componentOptions['onEl']

        let vueConfig = Object.assign({}, globalVueOptions, vueOptions)
        vueConfig.render = function (h) {
          return h(Component, componentOptions)
        }
        const instance = new Vue(vueConfig)

        parentDom.appendChild(instance.$mount().$el)
        let component = instance.$children[0]

        watchPopStateChange(component, true, () => {
          Vue.prototype.$ext.unmount(component)
        })

        return component
      },
      unmount (component) {
        component.$root.$el.parentNode && component.$root.$el.parentNode.removeChild(component.$root.$el)
        component.$root.$destroy()
      }
    }
  }
}
