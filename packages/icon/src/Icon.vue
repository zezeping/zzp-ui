<template>
  <i class="zzp-icon iconfont" :class="{ [icon]: icon }" :style="{ color }"></i>
</template>

<script>
export default {
  name: 'ZzpIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#D8D8D8'
    }
  }
}
</script>

<style lang="scss">
  .zzp-icon {
  }
</style>
