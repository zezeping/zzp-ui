import Roll from './roll'
import RollItem from './rollItem'

export default {
  install (Vue) {
    // Vue.component(Roll.name, Roll)
    // Vue.component(RollItem.name, RollItem)
    Vue.use(Roll)
    Vue.use(RollItem)
  }
}
