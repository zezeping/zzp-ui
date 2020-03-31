# Radio 布局 [pc&wap]

### Install

单独安装组件
```vue
import Vue from 'vue'
import radio from 'zzp-ui/packages/radio'
Vue.use(radio)
```
或
```vue
import RadioGroup from 'zzp-ui/packages/radio/radioGroup'
import Radio from 'zzp-ui/packages/radio/radio'
export default {
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  }
}
```

### Usage
```vue
<template>
  <h5>基础用法</h5>
  {{ items }}
  <zzp-radio-group v-model="items">
    <zzp-radio :value="1">复选框A</zzp-radio>
    <zzp-radio :value="2">复选框B</zzp-radio>
    <zzp-radio :value="3">复选框C</zzp-radio>
  </zzp-radio-group>
  <h5>disabled</h5>
  <zzp-radio-group v-model="items">
    <zzp-radio :value="1">复选框A</zzp-radio>
    <zzp-radio :value="2" disabled>复选框B</zzp-radio>
    <zzp-radio :value="3">复选框C</zzp-radio>
  </zzp-radio-group>
  <h5>简写</h5>
  <zzp-radio-group v-model="items" :options="options"></zzp-radio-group>
</template>
<script>
export default {
  data () {
    return {
      usage,
      items: 1,
      options: [{label: '复选框A', value: 1}, {label: '复选框B', value: 2}, {label: '复选框C', value: 3}]
    }
  }
}
</script>
```

### Props
### Props

> ZzpRadioGroup Props

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | `v-model` | - | - | Y | - |
| options | 选项数组 | `Array` | `[]` | - | - |
| optionLabel | label key | `String` | `label` | - | - |
| optionValue | value key | `String` | `value` | - | - |
| optionDisabled | disabled key | `String` | `disabled` | - | - |
| disabled | 值 | `boolean` | `false` | - | - |

> ZzpRadio Props

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| value | 值 | `Number` | - | Y | - |
| disabled | 值 | `boolean` | `false` | - | - |

### slot

> ZzpRadioGroup Slot

> ZzpRadio Slot






