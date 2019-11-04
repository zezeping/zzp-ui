import Row from './src/row'
import Col from './src/col'

export default {
  install (Vue) {
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
  }
}
