<template>
  <usage-with-demo :usage="usage">
    <zzp-rate class="one-rate" icon="icon-star" active-color="#f00" v-model="rate" settable type="full">full: {{ rate }}</zzp-rate>
    <zzp-rate class="one-rate" icon="icon-star" active-color="#f00" v-model="rate" settable type="half">half: {{ rate }}</zzp-rate>
    <zzp-rate class="one-rate" icon="icon-star" active-color="#f00" v-model="rate" settable type="real">real: {{ rate }}</zzp-rate>
    <zzp-rate icon="icon-star" :value="0.5"></zzp-rate>
    <zzp-rate icon="icon-star" :value="1"></zzp-rate>
    <zzp-rate icon="icon-star" :value="3.8"></zzp-rate>
    <zzp-rate icon="icon-star" :value="5"></zzp-rate>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      rate: 3.3
    }
  }
}
</script>

<style lang="scss" scoped>
  .one-rate {
    /deep/ .zzp-icon {
      font-size: 20px;
      margin-right: 5px;
    }
  }
</style>
