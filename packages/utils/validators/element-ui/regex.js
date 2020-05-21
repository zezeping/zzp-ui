export default function (options) {
  function regexValidator (rule, value, callback) {
    if (options.regex && value && !value.match(options.regex)) {
      return callback(new Error('匹配失败'))
    }
    callback()
  }
  return Object.assign({ validator: regexValidator, message: '格式错误', trigger: 'blur' }, options)
}
