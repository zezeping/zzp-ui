<template>
  <div class="zzp-signed-board" :class="{ disabled }">
    <canvas class="canvas" ref="canvas"
            @mousedown.prevent="touchstart($event)" @mousemove.prevent="touchmove($event)" @mouseup.prevent="touchend($event)" @mouseleave="touchend($event)"
            @touchstart.prevent="touchstart($event)" @touchmove.prevent="touchmove($event)" @touchend.prevent="touchend($event)"></canvas>
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
      drawing: false
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
      cxt.strokeStyle = this.calcSignedOptions.strokeStyle
      cxt.lineWidth = this.calcSignedOptions.lineWidth
      cxt.beginPath()
      let x = e.offsetX || (e.changedTouches[0].pageX - rect.x)
      let y = e.offsetY || (e.changedTouches[0].pageY - rect.y)
      cxt.moveTo(x, y)
    },
    touchmove (e) {
      if (this.drawing) {
        let rect = e.target.getBoundingClientRect()
        let cxt = this.canvas.getContext('2d')
        let x = e.offsetX || (e.changedTouches[0].pageX - rect.x)
        let y = e.offsetY || (e.changedTouches[0].pageY - rect.y)
        cxt.lineTo(x, y)
        cxt.stroke()
      }
    },
    touchend () {
      this.drawing = false
      let cxt = this.canvas.getContext('2d')
      cxt.closePath()
    },
    clear () {
      let cxt = this.canvas.getContext('2d')
      cxt.fillStyle = this.calcSignedOptions.fillStyle
      cxt.fillRect(0, 0, this.canvas.width, this.canvas.width)
    },
    toImage (type = 'image/png') {
      return this.canvas.toDataURL(type)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.canvas = this.$refs['canvas']
      this.clear()
    })
  }
}
</script>

<style lang="scss" scoped>
  .zzp-signed-board {
    &.disabled {
      pointer-events: none;
    }
    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
</style>
