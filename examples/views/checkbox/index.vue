<template>
  <usage-with-demo :usage="usage">
    <div>
      <h5>基础用法</h5>
      {{ items }}
      <zzp-checkbox-group v-model="items">
        <zzp-checkbox :value="1">1</zzp-checkbox>
        <zzp-checkbox :value="2">2</zzp-checkbox>
        <zzp-checkbox :value="3">3</zzp-checkbox>
      </zzp-checkbox-group>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      items: [1]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
