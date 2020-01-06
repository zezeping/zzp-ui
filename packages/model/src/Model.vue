<template>
  <div v-if="currentValue" class="zzp-model" :class="{[position]: position}">
    <div v-if="mask" class="mask fade-in" @click.self="!maskLock && close()" ref="maskRef"></div>
    <div class="main" ref="mainRef">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZzpModel',
  props: {
    value: {
      required: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskLock: [Boolean],
    delayCloseTime: {
      type: Number,
      default: 150
    },
    doClose: [Function],
    position: {
      type: String,
      default: 'center'
    }
  },
  data () {
    return {
      switch: this.value
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value || this.switch
      },
      set (nv) {
        this.$emit('input', nv)
        this.switch = nv
      }
    }
  },
  methods: {
    show () {
      this.switch = true
      return this
    },
    close () {
      return new Promise(resolve => {
        this.$emit('beforeClose')
        this.$refs['maskRef'] && this.$refs['maskRef'].classList.add('fade-out')
        this.$refs['mainRef'] && this.$refs['mainRef'].classList.add('fade-out')
        setTimeout(() => {
          this.currentValue = false
          this.doClose && this.doClose()
          resolve()
        }, this.delayCloseTime)
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/stylesheets/mixins/animations/fade';
  .zzp-model {
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: 1000;
    .mask {
      position: absolute;
      left: 0; right: 0; top: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.82);
      &.fade-in {
        @include animation-fade-in(0, .82, .12s);
      }
      &.fade-out {
        @include animation-fade-out(.82, 0, .12s);
      }
    }
    .main {`
      position: relative;
      display: inline-block;
      &.fade-out {
        @include animation-fade-out(.82, 0, .1s);
      }
    }
    &.center {
      .main {
        left: 50%;
        top: 48%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
