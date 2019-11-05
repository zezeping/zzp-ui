import Row from './src/Row'
import Col from './src/Col'

export default {
  install (Vue) {
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
  }
}
