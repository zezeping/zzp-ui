<template>
  <usage-with-demo :usage="usage">
    <div class="page">
      <h3>高佣联盟</h3>
      <p>高佣联盟是一款购物返利软件，支持淘宝，拼多多，京东等各大购物平台，集全网比价，领取隐藏优惠券，购物返利于一身, 是一款必不能少的网购软件。</p>
      <div>打开微信，扫描如下二维码进行安装</div>
      <zzp-qrcode value="http://t.uc.cn/11_6mRFz"></zzp-qrcode>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    text-align: center;
    line-height: 40px;
    p {
      text-align: left;
      text-indent: 2em;
      line-height: 25px;
      margin-bottom: 15px;
    }
    .zzp-qrcode {
      display: block;
      margin: 0 auto;
    }
  }
</style>
