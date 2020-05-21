export default function (options = {}) {
  return Object.assign({ type: 'email', message: '邮箱格式不正确', trigger: 'blur' }, options)
}
