import input from './input'
import heightFollowWidth from './heightFollowWidth'
export default {
  install (Vue) {
    Vue.use(input)
    Vue.use(heightFollowWidth)
  }
}
