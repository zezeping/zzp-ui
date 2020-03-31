<template>
  <div class="zzp-radio-group" :class="{ disabled }">
    <slot>
      <zzp-radio v-for="(option, index) in options" :key="index" :value="option[optionValue]" :disabled="option[optionDisabled] === true">{{ option[optionLabel] || option[optionValue] }}</zzp-radio>
    </slot>
  </div>
</template>

<script>
import Radio from './Radio'
import mixModel from '../../mixins/mixModel'
export default {
  name: 'ZzpRadioGroup',
  mixins: [mixModel],
  watch: {
    value: {
      handler (newVal) {
        this.updateChildren()
        this.$nextTick(() => {
          this.change(newVal)
        })
      },
      immediate: true
    }
  },
  methods: {
    change (val) {
      this.currentValue = val
      this.updateChildren()
    },
    updateChildren () {
      this.$children.filter(item => item.$options.name === 'ZzpRadio').forEach((child) => {
        child.checked = this.currentValue === child.value
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.updateChildren()
    })
  },
  components: {
    [Radio.name]: Radio
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/stylesheets/mixins/variables";
  .zzp-radio-group {
    &.disabled {
      @include disabled;
    }
  }
</style>
