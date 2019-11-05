<template>
  <usage-with-demo :usage="usage">
    <zzp-json :json="json"></zzp-json>
    <zzp-json :json="json" :colorable="false"></zzp-json>
    <zzp-json :json="json" :space="4"></zzp-json>
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
