import elementUiValidators from './element-ui'
export default {
  install (Vue, varName = '$validators') {
    Vue.use(elementUiValidators, varName)
  }
}
