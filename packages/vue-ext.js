import watchPopStateChange from './assets/javascripts/lib/watchPopStateChange'
export default {
  install (Vue, globalVueOptions = {}) {
    Vue.prototype.$ext = Vue.prototype.$ext || {
      mount (Component, componentOptions = {}, vueOptions = {}) {
        let parentDom = componentOptions['onEl'] || document.body
        delete componentOptions['onEl']

        const instance = new Vue({
          ...Object.assign({}, globalVueOptions, vueOptions),
          render (h) {
            return h(Component, { ...componentOptions })
          }
        })

        parentDom.appendChild(instance.$mount().$el)
        let component = instance.$children[0]

        watchPopStateChange(component, true, () => {
          Vue.prototype.$ext.unmount(component)
        })

        return component
      },
      async unmount (component) {
        if (component.close instanceof Function) {
          await component.close()
        }
        component.$root.$el.parentNode && component.$root.$el.parentNode.removeChild(component.$root.$el)
        component.$root.$destroy()
      },
      // return timout
      sleep (time) {
        return new Promise(resolve => {
          resolve(setTimeout(() => {
            resolve()
          }, time))
        })
      }
    }
  }
}
