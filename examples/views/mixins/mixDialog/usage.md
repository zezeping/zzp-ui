# mixin - mixDialog

### Usage
```
import mixDialog from 'zzp-ui/packages/mixins/mixDialog'
export default {
   mixins: [mixDialog]
}
```


### mixDialog Props 

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| mixOnConfirmFunc | 外部传入 | - | - | N | - |

### mixDialog Methods 

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| mixOnCancel | 关闭$ext.mount挂在的该ui | - | - | - | - |
| mixOnConfirm | 如果传入props: `mixOnConfirmFunc`则调用，并调用`mixOnCancel`关闭对话框 | - | - | - | - |
 
 ---
 
 ### source code
```javascript
export default {
  props: {
    mixOnConfirmFunc: [Function]
  },
  data () {
    return {
      mixShowDialog: true
    }
  },
  methods: {
    mixOnCancel () {
      this.mixShowDialog = false
      this.$ext.unmount(this)
    },
    mixOnConfirm () {
      this.mixOnConfirmFunc && this.mixOnConfirmFunc(...arguments)
      this.mixOnCancel()
    }
  }
}
```
