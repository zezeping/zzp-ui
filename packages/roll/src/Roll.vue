<template>
  <div class="zzp-roll">
    <div class="_items-wrap" ref="sliderWrap" @transitionend="transitionend" :style="styles">
      <template v-for="item in tmpItems">
        <slot :item="item"></slot>
      </template>
    </div>
  </div>
</template>

<script>
import RollItem from './RollItem'
export default {
  name: 'ZzpRoll',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: [Number],
      default: 4000
    },
    speed: {
      type: Number,
      default: 500
    },
    visibleCount: {
      type: [Number, String],
      default: 1
    },
    direction: {
      type: String,
      validator (value) {
        return ['up', 'down', 'left', 'right'].indexOf(value) > -1
      },
      default: 'up'
    }
  },
  data () {
    return {
      tmpItems: [],
      autoPlayTimer: null,
      nowItemIndex: 0,
      firstItemHtml: '',
      lastItemHtml: '',
      styles: {
        transform: 0,
        transitionDuration: 0
      }
    }
  },
  watch: {
    items: {
      handler (nv) {
        if (nv) {
          this.$nextTick(() => {
            this.init()
          })
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    init () {
      this.destroy()
      let tItems = [...this.items]
      if (this.items.length >= this.visibleCount) {
        for (let i = 0; i < this.visibleCount; i++) {
          if (['up', 'left'].indexOf(this.direction) !== -1) {
            tItems.push(this.items[i])
          } else if (['down', 'right'].indexOf(this.direction) !== -1) {
            tItems.unshift(this.items[this.items.length - 1 - i])
          }
        }
        this.tmpItems = tItems
        if (['up', 'left'].indexOf(this.direction) !== -1) {
          this.nowItemIndex = 0
        } else if (['down', 'right'].indexOf(this.direction) !== -1) {
          this.nowItemIndex = this.items.length - 1
        }
        this.$nextTick(() => {
          this.goToItem(this.nowItemIndex, 0)
          if (this.autoplay) {
            this.startAutoPlay()
          }
        })
      }
    },
    goToItem (index, speed) {
      let children = this.$children.filter(item => {
        return item.name === 'ZzpRollItem'
      })
      if (['up', 'down'].indexOf(this.direction) !== -1) {
        this.setTranslate(-1 * children[index].$el.offsetTop, speed)
      } else {
        this.setTranslate(-1 * children[index].$el.offsetLeft, speed)
      }
    },
    setTranslate (translate, speed) {
      this.styles.transitionDuration = speed + 'ms'
      if (['up', 'down'].indexOf(this.direction) !== -1) {
        this.styles.transform = `translate3d(0, ${translate}px, 0)`
      } else {
        this.styles.transform = `translate3d(${translate}px, 0, 0)`
      }
    },
    startAutoPlay () {
      this.timer = setInterval(() => {
        switch (this.direction) {
          case 'up':
          case 'left':
            this.goToItem(++this.nowItemIndex, this.speed)
            break
          case 'down':
          case 'right':
            this.goToItem(--this.nowItemIndex, this.speed)
            break
        }
      }, this.autoplay)
    },
    transitionend () {
      let items = this.tmpItems
      let realItemsCount = items.length - this.visibleCount
      switch (this.direction) {
        case 'up':
        case 'left':
          if (this.nowItemIndex >= realItemsCount) {
            this.nowItemIndex = 0
            this.goToItem(this.nowItemIndex, 0)
          }
          break
        case 'down':
        case 'right':
          if (this.nowItemIndex <= 0) {
            this.nowItemIndex = items.length - this.visibleCount
            this.goToItem(this.nowItemIndex, 0)
          }
          break
      }
    },
    destroy () {
      clearInterval(this.timer)
    }
  },
  destroyed () {
    this.destroy()
  },
  components: {
    [RollItem.name]: RollItem
  }
}
</script>

<style lang="scss" scoped>
  .zzp-roll {
    position: relative;
    overflow: hidden;

    ._items-wrap {
      white-space: nowrap;
    }
  }
</style>
