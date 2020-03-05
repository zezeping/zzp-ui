class ExtFomData extends FormData {
  static fromJsonObject (jsonObj) {
    let formData = new ExtFomData()
    appendObject(formData, '', jsonObj)
    return formData
    function appendArray (formData, pKey, array) {
      array.forEach(item => {
        if (item instanceof Object && !(item instanceof File || item instanceof Blob)) {
          appendObject(formData, pKey, item)
        } else {
          formData.append(pKey, item)
        }
      })
    }
    function appendObject (formData, pKey, obj) {
      for (let key in obj) {
        let nowKey = pKey ? `${pKey}[${key}]` : key
        // 数组需要挨个添加
        if (obj[key] instanceof Array) {
          appendArray(formData, nowKey, obj[key])
        } else if (obj[key] instanceof Object) {
          appendObject(formData, nowKey, obj[key])
        } else { // 默认直接添加
          formData.append(nowKey, obj[key])
        }
      }
    }
  }

  toJsonObject () {
    let jsonObject = {}
    this.forEach((value, key) => {
      if (/\[/.test(key)) {
        handleNestKeyValue(jsonObject, key, value)
      } else {
        generateItem(jsonObject, key, value)
      }
    })
    return jsonObject

    function generateItem (obj, key, value) {
      if (obj.hasOwnProperty(key)) {
        if ((obj[key] instanceof Array)) {
          obj[key].push(value)
        } else {
          obj[key] = [obj[key], value]
        }
      } else {
        obj[key] = value
      }
    }

    function handleNestKeyValue (obj, key, value) {
      let splitKeys = key.replace(/]/g, '').split('[')
      let pObj = obj
      for (let i = 0; i < splitKeys.length - 1; i ++) {
        let key = splitKeys[i]
        if (pObj.hasOwnProperty(key)) {
          if (pObj[key] instanceof Array) {
            let objs = pObj[key].filter(item => item instanceof Object && !(item instanceof File || item instanceof Blob))
            // 不存在对象吗，则创建对象
            if (!objs.length) {
              let obj = {}
              pObj[key].push(obj)
              objs.push(obj)
            }
            pObj = objs[0]
          } else if (pObj[key] instanceof Object && !(pObj[key] instanceof File || pObj[key] instanceof Blob)) {
            pObj = pObj[key]
          } else {
            let obj = {}
            pObj[key] = [pObj[key], obj]
            pObj = obj
          }
        } else {
          pObj[key] = {}
          pObj = pObj[key]
        }
      }
      let lastKey = splitKeys[splitKeys.length - 1]
      generateItem(pObj, lastKey, value)
    }
  }
}
export default ExtFomData
