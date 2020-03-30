<template>
  <usage-with-demo :usage="usage">
    <zzp-row>
      <zzp-col span="6"><zzp-icon icon="icon-star"></zzp-icon></zzp-col>
      <zzp-col span="6"><zzp-icon icon="icon-checkbox"></zzp-icon></zzp-col>
      <zzp-col span="6"><zzp-icon icon="icon-checkbox-active"></zzp-icon></zzp-col>
      <zzp-col span="6"><zzp-icon icon="icon-star"></zzp-icon></zzp-col>
    </zzp-row>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      json: {
        name: 'ZhangSan',
        age: 18,
        address: {
          province: 'Beijing',
          City: 'Beijing'
        },
        isGay: false,
        ca: null,
        favor: ['swimming', 'basketball']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzp-col {
    text-align: center;
    padding: 10px;
    /*background: #f00;*/
  }
</style>
