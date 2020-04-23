<template>
  <div class="zzp-signed-board" :class="{ disabled }">
    <slot></slot>
    <canvas class="canvas" ref="canvas"
            @mousedown.prevent.stop="touchstart($event)" @mousemove.prevent.stop="touchmove($event)" @mouseup.prevent.stop="touchend($event)" @mouseleave="touchend($event)"
            @touchstart.prevent.stop="touchstart($event)" @touchmove.prevent.stop="touchmove($event)" @touchend.prevent.stop="touchend($event)"></canvas>
  </div>
</template>

<script>
export default {
  name: 'ZzpSignedBoard',
  props: {
    signedOptions: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      canvas: null,
      drawing: false,
      moveCount: 0
    }
  },
  computed: {
    calcSignedOptions () {
      return Object.assign({
        fillStyle: '#f2f2f2',
        strokeStyle: '#000',
        lineWidth: '1'
      }, this.signedOptions)
    }
  },
  methods: {
    touchstart (e) {
      this.drawing = true
      let rect = e.target.getBoundingClientRect()
      let cxt = this.canvas.getContext('2d')
      cxt.beginPath()
      cxt.strokeStyle = this.calcSignedOptions.strokeStyle
      cxt.lineWidth = this.calcSignedOptions.lineWidth
      let rectX = rect.x || rect.left
      let rectY = rect.y || rect.top
      let x = e.offsetX || (e.changedTouches[0].pageX - rectX)
      let y = e.offsetY || (e.changedTouches[0].pageY - rectY)
      cxt.moveTo(x, y)
    },
    touchmove (e) {
      if (this.drawing) {
        if (e.offsetX || e.changedTouches) {
          let rect = e.target.getBoundingClientRect()
          let rectX = rect.x || rect.left
          let rectY = rect.y || rect.top
          let cxt = this.canvas.getContext('2d')
          let x = e.offsetX || (e.offsetX === 0 ? e.offsetX : (e.changedTouches[0].pageX - rectX))
          let y = e.offsetY || (e.offsetY === 0 ? 0 : (e.changedTouches[0].pageY - rectY))
          cxt.lineTo(x, y)
          cxt.stroke()
          this.moveCount++
        }
      }
    },
    touchend () {
      this.drawing = false
      let cxt = this.canvas.getContext('2d')
      cxt.closePath()
      this.$emit('changeMoveCount', this.moveCount)
    },
    clear () {
      let cxt = this.canvas.getContext('2d')
      cxt.fillStyle = this.calcSignedOptions.fillStyle
      cxt.fillRect(0, 0, this.canvas.width, this.canvas.width)
      this.moveCount = 0
      this.$emit('changeMoveCount', this.moveCount)
    },
    toImage (type = 'image/png') {
      return this.canvas.toDataURL(type)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.canvas = this.$refs['canvas']
      this.canvas.setAttribute('width', this.$el.clientWidth)
      this.clear()
    })
  }
}
</script>

<style lang="scss" scoped>
  .zzp-signed-board {
    position: relative;

    &.disabled {
      canvas {
        pointer-events: none;
      }
    }

    canvas {
      display: block;
    }
  }
</style>
