import Json from './src/Json'

Json.install = function (Vue) {
  Vue.component(Json.name, Json)
}

export default Json
