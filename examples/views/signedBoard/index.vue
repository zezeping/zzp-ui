<template>
  <usage-with-demo :usage="usage">
    <div class="page" ref="page">
      <zzp-signed-board ref="signedBoard"></zzp-signed-board>
      <button @click="getSignedBoardImage">获取图片</button>
      <button @click="$refs['signedBoard'].clear()">重签</button>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
import { downloadFileFromBase64 } from '../../../packages/assets/javascripts/lib/downloadFile'
export default {
  data () {
    return {
      usage,
      show: false
    }
  },
  methods: {
    getSignedBoardImage () {
      let imgBase64 = this.$refs['signedBoard'].toImage()
      downloadFileFromBase64(imgBase64, 'signed.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    color: #f00;
  }
</style>
