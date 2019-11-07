import debounce from './debounce'
export default {
  install (Vue) {
    // v-debounce
    Vue.directive('debounce', debounce)
  }
}
