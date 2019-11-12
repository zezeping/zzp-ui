<template>
  <qrcode class="zzp-qrcode" :value="value" :options="options" :tag="tag"></qrcode>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
export default {
  name: 'ZzpQrcode',
  props: {
    value: {
      required: true
    },
    options: {
      type: Object
    },
    tag: {
      type: String,
      default: 'canvas',
      validator (value) {
        return ['canvas', 'img'].indexOf(value) !== -1
      }
    }
  },
  components: {
    [VueQrcode.name]: VueQrcode
  }
}
</script>
