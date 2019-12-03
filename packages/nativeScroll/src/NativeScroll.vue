<template>
  <div class="zzp-native-scroll">
    <div class="_zzp-native-scroll-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZzpNativeScroll'
}
</script>

<style lang="scss" scoped>
  /*https://www.cnblogs.com/xiahj/p/8036419.html*/
  .zzp-native-scroll {
    height: 100%;
    overflow: hidden;
    ._zzp-native-scroll-inner {
      position: static;
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      min-height: calc(100% + 1px);
    }
  }
</style>
