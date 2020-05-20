export default function (opt = {}) {
  return Object.assign({ required: true, message: '不允许为空', trigger: 'blur' }, opt)
}
