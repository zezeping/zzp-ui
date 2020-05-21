export default {
  // 指令的定义
  inserted: function (el, binding) {
    // 偏差值px， eg: -100 -> 宽度-100px作为高度
    let value = binding.value || 0
    let currentStyle = window.getComputedStyle(el, null) || el['currentStyle']
    let width = currentStyle.width
    // eslint-disable-next-line no-useless-escape
    let widthValue = width.match(/[0-9\.]/gi).join('')
    if (widthValue) {
      let heightValue = (parseFloat(widthValue) || 0) + (parseFloat(value) || 0)
      // console.log({widthValue, value, heightValue})
      el.style.height = currentStyle.width.replace(widthValue, heightValue)
    }
  }
}
