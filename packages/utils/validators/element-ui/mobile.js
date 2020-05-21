import regex from './regex'
export default function (options) {
  options.regex = options.regex || /^1\d{10}$/
  options.message = options.message || '手机号格式不正确'
  return regex(options)
}
