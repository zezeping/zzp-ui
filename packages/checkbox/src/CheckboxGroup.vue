<template>
  <div class="zzp-checkbox-group" :class="{ disabled }">
    <slot>
      <zzp-checkbox v-for="(option, index) in options" :key="index" :value="option[optionValue]" :disabled="option[optionDisabled] === true">{{ option[optionLabel] || option[optionValue] }}</zzp-checkbox>
    </slot>
  </div>
</template>

<script>
import Checkbox from './Checkbox'
import mixModel from '../../utils/mixins/mixModel'
export default {
  name: 'ZzpCheckboxGroup',
  mixins: [mixModel],
  watch: {
    value: {
      handler (newVal) {
        this.updateChildren()
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
  mounted () {
    this.$nextTick(() => {
      this.updateChildren()
    })
  },
  components: {
    [Checkbox.name]: Checkbox
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheets/mixins/variables";
  .zzp-checkbox-group {
    &.disabled {
      @include disabled;
    }
  }
</style>
