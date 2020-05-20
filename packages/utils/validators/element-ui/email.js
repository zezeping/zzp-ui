export default function (opt = {}) {
  return Object.assign({ type: 'email', message: '邮箱格式不正确', trigger: 'blur' }, opt)
}
