import Qrcode from './src/Qrcode'

Qrcode.install = function (Vue) {
  Vue.component(Qrcode.name, Qrcode)
}

export default Qrcode
