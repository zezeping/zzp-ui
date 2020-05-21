export default function (options) {
  let message = '数值错误'
  function minValueValidator (rule, value, callback) {
    if ((options['minValue'] || options['minValue'] === 0) && (value || `${value}` === '0')) {
      if (options['canEqual']) {
        if (options['minValue'] <= value) {
          return callback()
        } else {
          message = `请输入大于等于${options['minValue']}的值`
          return callback(new Error(message))
        }
      } else {
        if (options['minValue'] < value) {
          return callback()
        } else {
          message = `请输入大于${options['minValue']}的值`
          return callback(new Error(message))
        }
      }
    }
    // 默认合法
    callback()
  }
  return Object.assign({ validator: minValueValidator, message, trigger: 'blur' }, options)
}
