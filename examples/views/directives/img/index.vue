<template>
  <usage-with-demo :usage="usage">
    <img :src="imgSrc" alt="" v-src="realImgSrc" width="100px">
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      imgSrc: 'http://img5.imgtn.bdimg.com/it/u=2760992680,1549153901&fm=26&gp=0.jpg',
      realImgSrc: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.realImgSrc = 'http://pic58.nipic.com/file/20141226/4949133_151007773000_2.jpg'
    }, 3000)
  }
}
</script>
