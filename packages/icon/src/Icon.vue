<template>
  <i class="zzp-icon iconfont" :class="{ [icon]: icon, rotate }" :style="{ color }"></i>
</template>

<script>
export default {
  name: 'ZzpIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    rotate: Boolean,
    color: {
      type: String,
      default: '#333'
    }
  }
}
</script>

<style lang="scss">
  @import url('//at.alicdn.com/t/font_1574589_7boz745yohd.css');
  @import "../../assets/stylesheets/mixins/animations/rotate";
  .zzp-icon {
    display: inline-flex;
    &.rotate {
      @include keyframes-animation-rotate;
      animation: animation-rotate 1.4s linear infinite;
    }
  }
</style>
