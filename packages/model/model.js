import Model from './src/Model'

Model.install = function (Vue) {
  Vue.component(Model.name, Model)
}

export default Model
