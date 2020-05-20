import required from './required'
import email from './email'
import mobile from './mobile'
import regex from './regex'
import minValue from './minValue'
import maxValue from './maxValue'
export default {
  install (Vue, varName = '$validators') {
    Vue.prototype[varName] = Object.assign(Vue.prototype[varName] || {}, {
      required,
      email,
      mobile,
      regex,
      minValue,
      maxValue
    })
  }
}
