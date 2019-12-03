import NativeScroll from './src/NativeScroll'

NativeScroll.install = function (Vue) {
  Vue.component(NativeScroll.name, NativeScroll)
}

export default NativeScroll
