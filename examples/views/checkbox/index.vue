<template>
  <usage-with-demo :usage="usage">
    <div>
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
      <zzp-checkbox-group v-model="items" :options="options" disabled></zzp-checkbox-group>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
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

<style lang="scss" scoped>
</style>
