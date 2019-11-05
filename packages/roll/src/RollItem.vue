<template>
  <div class="zzp-roll-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzpRollItem',
  data () {
    return {
      name: 'ZzpRollItem'
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzp-roll-item {
    display: flex;
    height: 100%;
    line-height: 1.4;
    align-items: center;
  }
</style>
