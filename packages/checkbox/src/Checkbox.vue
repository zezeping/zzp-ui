<template>
  <label class="zzp-checkbox" :class="{ checked, disabled }">
    <i class="iconfont" :class="{ 'icon-checkbox-active': checked, 'icon-checkbox': !checked }"></i>
    <span class="checkbox-text">
      <input type="checkbox" v-model="checked" @change="changeHandler" :disabled="disabled">
      <slot>{{value}}</slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'ZzpCheckbox',
  props: {
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    changeHandler (event) {
      if (this.disabled) {
        return
      }
      this.checked = event.target.checked
      this.$parent.change(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzp-checkbox {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    padding: 5px;
    .iconfont {
      padding-right: 2px;
    }
    input {
      display: none;
    }
  }
</style>
