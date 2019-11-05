<template>
  <usage-with-demo :usage="usage">
    <span>首页</span>
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
