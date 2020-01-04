<template>
  <div class="zzp-rate">
    <div class="container" :class="{settable}" @mouseenter="mouseenter" @mousemove="mousemove($event)" @mouseleave="mouseleave" @click="setRate($event)">
      <div class="box bottom">
        <zzp-icon class="bg" :icon="icon" :color="color" v-for="(i, idx) in max" :key="idx" ref="itemBgRateRef"></zzp-icon>
      </div>
      <div class="box top" :key="currentValue">
        <zzp-icon class="active" :icon="icon" :color="activeColor" v-for="(i, idx) in intCount" :key="idx" ref="itemRateRef"></zzp-icon>
      </div>
    </div>
    <div class="slot">
      <slot></slot>
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
    },
    type: {
      type: String,
      default: 'full',
      validator (value) {
        return ['full', 'half', 'real'].indexOf(value) !== -1
      }
    },
    settable: {
      type: Boolean,
      default: false
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
      if (this.tmpRateEnable) {
        switch (this.type) {
          // case 'full':
          //   this.$refs['itemRateRef'][this.intCount - 1].$el.style.width = `${oneWidth}px`
          //   break
          case 'half':
            this.$refs['itemRateRef'][this.intCount - 1].$el.style.width = `${incompleteValue <= 0.5 ? 0.5 * oneWidth : oneWidth}px`
            break
          case 'real':
            this.$refs['itemRateRef'][this.intCount - 1].$el.style.width = `${incompleteValue * oneWidth}px`
        }
      } else {
        this.$refs['itemRateRef'][this.intCount - 1].$el.style.width = `${incompleteValue * oneWidth}px`
      }
    },
    mousemove (event) {
      if (this.tmpRateEnable) {
        let idx1 = this.$refs['itemBgRateRef'].map(i => i.$el).indexOf(event.target)
        let idx2 = this.$refs['itemRateRef'].map(i => i.$el).indexOf(event.target)
        let idx = idx1 !== -1 ? idx1 : idx2
        idx !== -1 && this.setTmpRate(event, idx)
      }
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
      let rateWidth = this.$refs['itemBgRateRef'] && this.$refs['itemBgRateRef'][0].$el.clientWidth
      if (rateWidth) {
        this.tmpRate = baseRate + Number((event.offsetX / rateWidth).toFixed(2))
      }
    },
    setRate (event) {
      let idx1 = this.$refs['itemBgRateRef'].map(i => i.$el).indexOf(event.target)
      let idx2 = this.$refs['itemRateRef'].map(i => i.$el).indexOf(event.target)
      let idx = idx1 !== -1 ? idx1 : idx2
      if (idx !== -1) {
        let baseRate = idx
        let rateWidth = this.$refs['itemBgRateRef'] && this.$refs['itemBgRateRef'][0].$el.clientWidth
        let lastPercent = Number(event.offsetX / rateWidth)
        if (lastPercent === 0) {
          this.currentValue = baseRate
          return
        }
        switch (this.type) {
          case 'full':
            this.currentValue = baseRate + 1
            break
          case 'half':
            if (lastPercent <= 0.5) {
              this.currentValue = baseRate + 0.5
            } else {
              this.currentValue = baseRate + 1
            }
            break
          case 'real':
            this.currentValue = (baseRate + lastPercent).toFixed(2)
        }
      }
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
      &.settable {
        cursor: pointer;
        .zzp-icon {
          pointer-events: auto;
        }
      }
      .box {
        pointer-events: none;
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
  }
</style>
