<template>
  <div class="zzp-rate">
    <div class="box bottom">
      <zzp-icon class="bg" :icon="icon" :color="color" v-for="(i, idx) in max" :key="idx" ref="itemBgRateRef" @click.native="setRate(idx)"></zzp-icon>
    </div>
    <div class="box top">
      <zzp-icon class="active" :icon="icon" :color="activeColor" v-for="(i, idx) in intCount" :key="idx" ref="itemRateRef" @click.native="setRate(idx)"></zzp-icon>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon/icon'
export default {
  name: 'ZzpRate',
  props: {
    value: {
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#D8D8D8'
    },
    activeColor: {
      type: String,
      default: '#FF9B5E'
    },
    max: {
      type: [Number, String],
      default: 5
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
    },
    isFullCount () {
      return Math.abs(parseInt(this.currentValue) - this.currentValue) < 0.0001
    },
    intCount () {
      return this.isFullCount ? Math.round(this.currentValue) : parseInt(this.currentValue) + 1
    }
  },
  watch: {
    value: {
      handler (nv) {
        if (!this.isFullCount) {
          this.$nextTick(() => {
            this.handleIncompleteRate()
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    handleIncompleteRate () {
      let incompleteValue = this.currentValue - parseInt(this.currentValue)
      let oneWidth = this.$refs['itemBgRateRef'][0].$el.offsetWidth
      this.$refs['itemRateRef'][this.intCount - 1].$el.style.width = `${incompleteValue * oneWidth}px`
    },
    setRate (idx) {
      this.currentValue = idx + 1
    }
  },
  components: {
    [Icon.name]: Icon
  }
}
</script>

<style lang="scss">
  .zzp-rate {
    position: relative;
    .box {
      &.top {
        position: absolute;
        left: 0; top: 0;
      }

      .zzp-icon {
        display: inline-block;
        overflow: hidden;
      }
    }

  }
</style>
