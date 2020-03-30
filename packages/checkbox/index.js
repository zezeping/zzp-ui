import CheckboxGroup from './src/CheckboxGroup'
import Checkbox from './src/Checkbox'

export default {
  install (Vue) {
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Checkbox.name, Checkbox)
  }
}
