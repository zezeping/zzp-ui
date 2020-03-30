<template>
  <div class="zzp-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzpCheckboxGroup',
  props: {
    value: {
      type: Array,
      require: true
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (nv) {
        this.$emit('input', nv)
        this.updateChildren()
      }
    }
  },
  watch: {
    value: {
      handler (newVal) {
        this.$nextTick(() => {
          this.currentValue = newVal
        })
      },
      immediate: true
    }
  },
  methods: {
    change (val) {
      let tmpValues = this.value
      let index = tmpValues.indexOf(val)
      if (index === -1) {
        tmpValues.push(val)
      } else {
        tmpValues.splice(index, 1)
      }
      this.currentValue = tmpValues
    },
    updateChildren () {
      this.$children.filter(item => item.$options.name === 'ZzpCheckbox').forEach((child) => {
        child.checked = this.value.indexOf(child.value) !== -1
      })
    }
  },
  updated () {
    console.log('updated')
    this.updateChildren()
  }
}
</script>
