<template>
  <marquee class="zzp-marquee" :behavior="behavior" :direction="direction" :scrollamount="speed">
    <slot></slot>
  </marquee>
</template>

<script>
export default {
  name: 'ZzpMarquee',
  props: {
    behavior: {
      default: 'scroll',
      validator (value) {
        return ['scroll', 'slide', 'alternate'].indexOf(value) > -1
      }
    },
    direction: {
      default: 'left',
      validator (value) {
        return ['up', 'down', 'left', 'right'].indexOf(value) > -1
      }
    },
    speed: {
      type: [String, Number],
      default: 6
    }
  }
}
</script>
