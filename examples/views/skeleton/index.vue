<template>
  <usage-with-demo :usage="usage">
    <div class="page" ref="page">
      <div>skeleton disabled: {{ disabled }}</div>
      <zzp-skeleton :disabled="disabled" color="#f2f2f2">
        <div>
          <p><span data-skeleton>骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏 骨架屏</span></p>
          <p><span data-skeleton="#999">骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏骨架屏 骨架屏骨架屏骨架屏骨</span></p>
          <ul>
            <img data-skeleton="#ff0" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2888261511,2808819884&fm=26&gp=0.jpg" alt="" style="width: 50px; height: 50px; display: inline-block; border-radius: 50%">
            <li><span data-skeleton="green">111</span></li>
            <li><span data-skeleton>222</span> <span data-skeleton>hello</span></li>
          </ul>
        </div>
      </zzp-skeleton>
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
      disabled: false
    }
  },
  mounted () {
    setInterval(() => {
      this.disabled = !this.disabled
    }, 10 * 1000)
  }
}
</script>

<style lang="scss" scoped>
  .page {
    background: #fff;
    color: #f00;
  }
</style>
