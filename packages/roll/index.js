import Roll from './src/Roll'
import RollItem from './src/RollItem'

export default {
  install (Vue) {
    Vue.component(Roll.name, Roll)
    Vue.component(RollItem.name, RollItem)
  }
}
