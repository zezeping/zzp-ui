class ExObject extends Object {
  static isObject (v) {
    return typeof v === 'function' || `${v}` === '[object Object]'
  }
  static assignDeep (target, ...args) {
    if (this.isObject(target)) {
      for (let i = 0; i < args.length; i++) {
        this.keys(args[i]).forEach(key => {
          if (this.isObject(target[key]) && this.isObject(args[i][key])) {
            this.assignDeep(target[key], args[i][key])
          } else {
            target[key] = args[i][key]
          }
        })
      }
      return target
    } else {
      throw new Error('target is not a object')
    }
  }
}
export default ExObject
