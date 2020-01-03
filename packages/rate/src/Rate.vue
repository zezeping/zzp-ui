<template>
  <div class="zzp-rate">
    <div class="container" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <div class="box bottom">
        <zzp-icon class="bg" :icon="icon" :color="color" v-for="(i, idx) in max" :key="idx" ref="itemBgRateRef" @mousemove.native="mousemove($event, idx)" @click.native="setRate(idx)"></zzp-icon>
      </div>
      <div class="box top">
        <zzp-icon class="active" :icon="icon" :color="activeColor" v-for="(i, idx) in intCount" :key="currentValue + idx" ref="itemRateRef" @mousemove.native="mousemove($event, idx)" @click.native="setRate(idx)"></zzp-icon>
      </div>
    </div>
    <div class="slot">
      <slot></slot> {{ tmpRate }}
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
  data () {
    return {
      tmpRate: -1,
      tmpRateEnable: false,
      tmpRateThrottle: null
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.tmpRate >= 0 ? this.tmpRate : this.value
      },
      set (nv) {
        this.$emit('input', nv)
      }
    },
    isFullCount () {
      return Math.abs(parseInt(this.currentValue) - this.currentValue) < 0.001
    },
    intCount () {
      return this.isFullCount ? Math.round(this.currentValue) : parseInt(this.currentValue) + 1
    }
  },
  watch: {
    currentValue: {
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
    mousemove (event, idx) {
      this.tmpRateEnable && this.setTmpRate(event, idx)
    },
    mouseenter () {
      this.tmpRateEnable = true
    },
    mouseleave (event, idx) {
      this.tmpRateEnable = false
      this.tmpRate = -1
    },
    setTmpRate (event, idx) {
      let baseRate = idx
      let rateDom = event.target
      let rateWidth = rateDom && rateDom.clientWidth
      if (rateWidth) {
        this.tmpRate = baseRate + Number((event.offsetX / rateWidth).toFixed(2))
      }
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
    display: flex;
    align-items: center;
    .container {
      .box {
        &.top {
          position: absolute;
          left: 0; top: 0;
        }

        .zzp-icon {
          display: inline-block;
          overflow: hidden;
          cursor: pointer;
        }
      }
    }
  }
</style>
