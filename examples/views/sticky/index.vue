<template>
  <usage-with-demo :usage="usage">
    <div class="scroll-container" ref="zScroll">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li class="sticky">
          <zzp-sticky :container="container" when-top when-bottom>
            <span>when-top</span>
            <span> when-bottom</span>
          </zzp-sticky>
        </li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
      </ul>
    </div>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
data () {
  return {
    usage,
    container: null
  }
},
mounted () {
  this.$nextTick(() => {
    this.container = this.$refs['zScroll']
  })
}
}
</script>

<style lang="scss" scoped>
  .scroll-container {
    height: 100%;
    overflow: auto;
    overflow-scrolling: touch;
    &::-webkit-scrollbar { display:none }
  }
  li {
    background: #fff;
    line-height: 100px;

    &.sticky {
      .zzp-sticky {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background: #1b9fea;
      }
    }
  }
</style>
