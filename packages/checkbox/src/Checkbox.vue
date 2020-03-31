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
  @import "../../assets/stylesheets/mixins/variables";
  .zzp-checkbox {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    color: #5e6d82;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    &.disabled {
      @include disabled;
    }
    &.checked {
      color: #409eff;
    }
    .iconfont {
      padding-right: 2px;
    }
    input {
      display: none;
    }
  }
</style>
