export default {
  props: {
    value: {
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function
    },
    // 是否正在加载数据
    loading: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    optionLabel: {
      type: String
    },
    optionValue: {
      type: String
    },
    optionDisabled: {
      type: [String, Boolean],
      default: false
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (nv) {
        this.$emit('input', nv)
      }
    }
  },
  watch: {
    currentValue (nv, ov) {
      this.$emit('change', nv, ov)
    }
  }
}
