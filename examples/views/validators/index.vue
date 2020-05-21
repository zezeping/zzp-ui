<template>
  <usage-with-demo :usage="usage">
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      form: {
        name: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs['formRef'].validate((valid) => {
        if (valid) {
        }
      })
    }
  }
}
</script>
