<template>
  <usage-with-demo :usage="usage">
    <div class="page" ref="page">
      <button @click="show=!show">boolShowDialog - {{ show }}</button>
      <button @click="jsShowDialog">jsShowDialog</button>
      <zzp-model v-model="show">hello dialog</zzp-model>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      show: false
    }
  },
  methods: {
    jsShowDialog () {
      // 打开模态框
      let model = this.$ext.mount(this.$options.components.ZzpModel, { onEl: this.$refs['page'] }).show()
      setTimeout(() => {
        // 关闭模态框
        this.$ext.unmount(model)
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    color: #f00;
  }
</style>
