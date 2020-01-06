import Model from './model'

export default {
  install (Vue) {
    Vue.component(Model.name, Model)
  }
}
