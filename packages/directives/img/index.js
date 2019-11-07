import src from './src'
export default {
  install (Vue) {
    // v-src
    Vue.directive('src', src)
  }
}
