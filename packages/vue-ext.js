// import watchPopStateChange from './assets/javascripts/lib/watchPopStateChange'
export default {
  install (Vue, globalVueOptions = {}) {
    Vue.prototype.$ext = Vue.prototype.$ext || {
      mount (Component, componentOptions = {}, vueOptions = {}) {
        const parentDom = componentOptions['onEl'] || document.body
        delete componentOptions['onEl']

        const instance = new Vue({
          ...Object.assign({}, globalVueOptions, vueOptions),
          watch: {
            '$route' (to, from) {
              const component = instance.$children[0]
              Vue.prototype.$ext.unmount(component)
            }
          },
          render (h) {
            return h(Component, { ...componentOptions })
          }
        })

        parentDom.appendChild(instance.$mount().$el)
        const component = instance.$children[0]
        return component
      },
      async unmount (component) {
        if (component.close instanceof Function) {
          await component.close()
        }
        component.$root.$el.parentNode && component.$root.$el.parentNode.removeChild(component.$root.$el)
        component.$root.$destroy()
      },
      sleep (time) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve()
          }, time)
        })
      }
    }
  }
}
