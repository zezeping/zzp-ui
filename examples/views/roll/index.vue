<template>
  <usage-with-demo :usage="usage">
    <p>【default】direction: up,  autoplay: 4000, speed: 500, height: 16px</p>
    <zzp-roll :items="items" style="height: 16px; background: #cccccc; padding: 0 5px;">
      <template v-slot="{item}">
        <zzp-roll-item style="height: 16px">{{item}}</zzp-roll-item>
      </template>
    </zzp-roll>

    <p>【default】direction: up, visibleCount="4"  autoplay: 4000, speed: 500, height: 64px</p>
    <zzp-roll :items="items" direction="up" visibleCount="4" style="height: 64px; background: #cccccc;">
      <template v-slot="{item}">
        <zzp-roll-item style="height: 16px">{{item}}</zzp-roll-item>
      </template>
    </zzp-roll>

    <p>【default】direction: left, visibleCount="4"  autoplay: 4000, speed: 500, width: 64px</p>
    <zzp-roll :items="items2" direction="left" visibleCount="4" style="width: 64px; background: #cccccc; margin: 0 auto">
      <template v-slot="{item}">
        <zzp-roll-item style="display: inline-block; width: 16px">{{ item }}</zzp-roll-item>
      </template>
    </zzp-roll>

    <p>【default】direction: down, visibleCount="4"  autoplay: 4000, speed: 500, height: 64px</p>
    <zzp-roll :items="items" direction="down" visibleCount="4" style="height: 64px; background: #cccccc;">
      <template v-slot="{item}">
        <zzp-roll-item style="height: 16px">{{item}}</zzp-roll-item>
      </template>
    </zzp-roll>

    <p>【default】direction: right, visibleCount="4"  autoplay: 4000, speed: 500, width: 64px</p>
    <zzp-roll :items="items2" direction="right" visibleCount="4" style="width: 64px; background: #cccccc; margin: 0 auto;">
      <template v-slot="{item}">
        <zzp-roll-item style="display: inline-block; width: 16px">{{ item }}</zzp-roll-item>
      </template>
    </zzp-roll>
  </usage-with-demo>
</template>

<script>
import usage from './usage.md'
export default {
  data () {
    return {
      usage,
      items: ['共创美好未来0', '共创美好未来1', '共创美好未来2', '共创美好未来3', '共创美好未来4'],
      items2: [0, 1, 2, 3, 4]
    }
  },
  methods: {
  }
}
</script>
