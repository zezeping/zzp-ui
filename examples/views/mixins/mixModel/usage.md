# mixin - mixModel

### Usage
```
import mixModel from 'zzp-ui/packages/mixins/mixModel'
export default {
   mixins: [mixModel]
}
```

### mixModel Props 

| 属性 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | `v-model`的值 | - | - | Y | - |
| multiple | 多选 | `Boolean` | `false` | - | - |
| clearable | 可清除 | `Boolean` | `false` | - | - |
| disabled | 是否禁用 | `Boolean` | `false` | - | - |
| filterable | 可过滤 | `Boolean` | `false` | - | - |
| placeholder | 占位符 | `String` | - | - | - |
| remote | 远程搜索 | `Boolean` | `false` | - | - |
| remoteMethod | 远程搜索方法 | `Function` | - | - | - |
| loading | 是否正在加载数据 | `Boolean` | `false` | - | - |
| options | 选项数组 | `Array` | `[]` | - | - |
| optionLabel | 展示的`key` | `String` | - | - | - |
| optionValue | 值的`key` | `String` | - | - | - |
| optionDisabled | 选项是否可用的`key` | `String`, `Boolean` | `false` | - | - |


> 计算属性

* currentValue

```
computed: {
  currentValue: {
    get () {
      return this.value
    },
    set (nv) {
      this.$emit('input', nv)
    }
  }
}
```

> 事件
* change(nv, ov)

```
watch: {
  currentValue (nv, ov) {
    this.$emit('change', nv, ov)
  }
}
```
