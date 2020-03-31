# Checkbox 布局 [pc&wap]

### Install

单独安装组件
```vue
import Vue from 'vue'
import checkbox from 'zzp-ui/packages/checkbox'
Vue.use(checkbox)
```
或
```vue
import CheckboxGroup from 'zzp-ui/packages/checkbox/checkboxGroup'
import Checkbox from 'zzp-ui/packages/checkbox/checkbox'
export default {
  components: {
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox
  }
}
```

### Usage
```vue
<template>
  <h5>基础用法</h5>
  {{ items }}
  <zzp-checkbox-group v-model="items">
    <zzp-checkbox :value="1">复选框A</zzp-checkbox>
    <zzp-checkbox :value="2">复选框B</zzp-checkbox>
    <zzp-checkbox :value="3">复选框C</zzp-checkbox>
  </zzp-checkbox-group>
  <h5>disabled</h5>
  <zzp-checkbox-group v-model="items">
    <zzp-checkbox :value="1">复选框A</zzp-checkbox>
    <zzp-checkbox :value="2" disabled>复选框B</zzp-checkbox>
    <zzp-checkbox :value="3">复选框C</zzp-checkbox>
  </zzp-checkbox-group>
  <h5>简写</h5>
  <zzp-checkbox-group v-model="items" :options="options"></zzp-checkbox-group>
</template>
<script>
export default {
  data () {
    return {
      usage,
      items: [1],
      options: [{label: '复选框A', value: 1}, {label: '复选框B', value: 2}, {label: '复选框C', value: 3}]
    }
  }
}
</script>
```

### Props
### Props

> ZzpCheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | `v-model` | - | - | Y | - |
| options | 选项数组 | `Array` | `[]` | - | - |
| optionLabel | label key | `String` | `label` | - | - |
| optionValue | value key | `String` | `value` | - | - |
| optionDisabled | disabled key | `String` | `disabled` | - | - |
| disabled | 值 | `boolean` | `false` | - | - |

> ZzpCheckbox Props

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | 值 | `Number` | - | Y | - |
| disabled | 值 | `boolean` | `false` | - | - |

### slot

> ZzpCheckboxGroup Slot

> ZzpCheckbox Slot






