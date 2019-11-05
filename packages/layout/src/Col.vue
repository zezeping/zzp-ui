<template>
  <div class="zzp-col" :class="{[`span-${span}`]: span, [`offset-${offset}`]: offset}" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzpCol',
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  computed: {
    gutter () {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },

    style () {
      const padding = `${this.gutter / 2}px`
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzp-col {
    display: inline-block;
    @for $i from 1 through 24 {
      &.span-#{$i} {
        width: $i * 100% / 24;
      }
      &.offset-#{$i} {
        margin-left: $i * 100% / 24;
      }
    }
  }
</style>
