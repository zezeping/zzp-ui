<template>
  <div class="zzp-sticky" :class="{ 'fixed-top': fixedTop, 'fixed-bottom': fixedBottom }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzpSticky',
  props: {
    whenTop: {
      type: Boolean,
      default: false
    },
    whenBottom: {
      type: Boolean,
      default: false
    },
    container: {
      required: false
    }
  },
  data () {
    return {
      scrollEventListener: null,
      fixedTop: false,
      fixedOffsetTop: 0,
      fixedBottom: false,
      fixedOffsetBottom: 0
    }
  },
  computed: {
  },
  watch: {
    container (nv) {
      nv && this.watchContainer(nv)
    }
  },
  methods: {
    computePosition () {
      let containerRect = this.container.getBoundingClientRect()
      let elementRect = this.$el.getBoundingClientRect()
      if (this.whenTop) {
        if (this.fixedTop) {
          if (this.container.scrollTop <= this.fixedOffsetTop) {
            this.fixedTop = false
          }
        } else {
          if (elementRect.y <= containerRect.y) {
            this.fixedOffsetTop = this.$el.offsetTop
            this.fixedTop = true
          }
        }
      }
      if (this.whenBottom) {
        if (this.fixedBottom) {
          if (this.container.scrollTop + containerRect.height - elementRect.height >= this.fixedOffsetBottom) {
            this.fixedBottom = false
          }
        } else {
          if (elementRect.y >= containerRect.y + containerRect.height - elementRect.height) {
            this.fixedOffsetBottom = this.$el.offsetTop
            this.fixedBottom = true
          }
        }
      }
    },
    watchContainer () {
      if (!this.scrollEventListener) {
        this.scrollEventListener = (e) => { this.computePosition() }
        this.container.addEventListener('scroll', this.scrollEventListener)
        // 默认执行一次，初始化元素计算粘性效果
        this.computePosition()
      }
    }
  },
  beforeDestroy () {
    this.container.removeEventListener('scroll', this.scrollEventListener)
  }
}
</script>

<style lang="scss">
  .zzp-sticky {
    &.fixed-top {
      position: fixed;
      top: 0; right: 0; left: 0;
    }
    &.fixed-bottom {
      position: fixed;
      bottom: 0; right: 0; left: 0;
    }
  }
</style>
