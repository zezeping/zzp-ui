import RadioGroup from './src/RadioGroup'
import Radio from './src/Radio'

export default {
  install (Vue) {
    Vue.component(RadioGroup.name, RadioGroup)
    Vue.component(Radio.name, Radio)
  }
}
