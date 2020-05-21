export default function (options) {
  let message = '数值错误'
  function maxValueValidator (rule, value, callback) {
    if ((options['maxValue'] || options['maxValue'] === 0) && (value || `${value}` === '0')) {
      if (options['canEqual']) {
        if (options['maxValue'] <= value) {
          return callback()
        } else {
          message = `请输入小于等于${options['maxValue']}的值`
          return callback(new Error(message))
        }
      } else {
        if (options['maxValue'] < value) {
          return callback()
        } else {
          message = `请输入小于${options['maxValue']}的值`
          return callback(new Error(message))
        }
      }
    }
    // 默认合法
    callback()
  }
  return Object.assign({ validator: maxValueValidator, message, trigger: 'blur' }, options)
}
