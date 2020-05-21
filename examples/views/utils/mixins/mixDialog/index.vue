<template>
  <usage-with-demo :usage="usage">
  </usage-with-demo>
</template>

<script>
  import usage from './usage.md'
  export default {
    data () {
      return {
        usage
      }
    },
    mounted () {
    }
  }
</script>
