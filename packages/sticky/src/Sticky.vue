<template>
  <div class="zzp-sticky" :class="{ 'fixed-top': fixedTop, 'fixed-bottom': fixedBottom }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzpSticky',
  props: {
    position: {
      type: String,
      default: 'top'
    },
    container: {
      required: false
    }
  },
  data () {
    return {
      fixedTop: false,
      fixedOffsetTop: 0,
      fixedBottom: false
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
    watchContainer () {
      console.log(this.container)
      this.container.addEventListener('scroll', (e) => {
        let currentScrollTop = this.container.scrollTop
        let containerRect = this.container.getBoundingClientRect()
        let elementRect = this.$el.getBoundingClientRect()
        switch (this.position) {
          case 'top':
            if (this.fixedTop) {
              console.log(111, currentScrollTop, this.fixedOffsetTop)
              if (this.container.scrollTop <= this.fixedOffsetTop) {
                this.fixedTop = false
              }
              // console.log(containerRect, elementRect, this.fixedElementRect)
            } else {
              if (elementRect.y <= containerRect.y) {
                this.fixedOffsetTop = this.$el.offsetTop
                this.fixedTop = true
              }
            }
            break
          case 'bottom':
            if (this.fixedTop) {
              if (this.container.scrollTop >= this.fixedOffsetTop) {
                this.fixedBottom = false
              }
              // console.log(containerRect, elementRect, this.fixedElementRect)
            } else {
              if (elementRect.y <= containerRect.y) {
                this.fixedOffsetBottom = this.$el.offsetTop
                this.fixedBottom = true
              }
            }
            break
        }
        console.log('----------', this.fixedTop)
        console.log(containerRect, elementRect)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.container)
    })
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
