import Marquee from './src/marquee'

Marquee.install = function (Vue) {
  Vue.component(Marquee.name, Marquee)
}

export default Marquee
