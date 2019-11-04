<template>
  <div class="zzp-row" :class="{flex, [`justify-${justify}`]: flex && justify, [`align-${align}`]: flex && align}"
       :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzpRow',
  props: {
    flex: [Boolean],
    align: String,
    justify: String,
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    style () {
      const margin = `-${Number(this.gutter) / 2}px`
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzp-row {
    display: block;

    &.flex {
      display: flex;

      &.justify-start {
        justify-content: flex-start
      }

      &.justify-center {
        justify-content: center
      }

      &.justify-end {
        justify-content: flex-end
      }

      &.justify-space-around {
        justify-content: space-around
      }

      &.justify-space-between {
        justify-content: space-between
      }

      &.align-top {
        align-items: flex-start
      }

      &.align-center {
        align-items: center
      }

      &.align-bottom {
        align-items: flex-end
      }
    }
  }
</style>
