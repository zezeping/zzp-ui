# Roll 滚动 [pc&wap]

## Install

单独安装组件
```vue
import Vue from 'vue'
import roll from 'zzp-ui/packages/roll'
Vue.use(roll)
```
或
```vue
import Roll from 'zzp-ui/packages/roll/roll'
import RollItem from 'zzp-ui/packages/roll/rollItem'
export default {
  components: {
    [Roll.name]: Roll,
    [RollItem.name]: RollItem
  }
}
```

## Usage

```vue
<template>
<p>direction: up,  autoplay: 4000, speed: 500, height: 16px</p>
<zzp-roll :items="items" style="height: 16px; background: #cccccc; padding: 0 5px;">
  <template v-slot="{item}">
    <zzp-roll-item style="height: 16px">{{item}}</zzp-roll-item>
  </template>
</zzp-roll>

<p>direction: up, visibleCount="4"  autoplay: 4000, speed: 500, height: 64px</p>
<zzp-roll :items="items" direction="up" visibleCount="4" style="height: 64px; background: #cccccc;">
  <template v-slot="{item}">
    <zzp-roll-item style="height: 16px">{{item}}</zzp-roll-item>
  </template>
</zzp-roll>

<p>direction: left, visibleCount="4"  autoplay: 4000, speed: 500, width: 64px</p>
<zzp-roll :items="items2" direction="left" visibleCount="4" style="width: 64px; background: #cccccc; margin: 0 auto">
  <template v-slot="{item}">
    <zzp-roll-item style="display: inline-block; width: 16px">{{ item }}</zzp-roll-item>
  </template>
</zzp-roll>

<p>direction: down, visibleCount="4"  autoplay: 4000, speed: 500, height: 64px</p>
<zzp-roll :items="items" direction="down" visibleCount="4" style="height: 64px; background: #cccccc;">
  <template v-slot="{item}">
    <zzp-roll-item style="height: 16px">{{item}}</zzp-roll-item>
  </template>
</zzp-roll>

<p>direction: right, visibleCount="4"  autoplay: 4000, speed: 500, width: 64px</p>
<zzp-roll :items="items2" direction="right" visibleCount="4" style="width: 64px; background: #cccccc; margin: 0 auto;">
  <template v-slot="{item}">
    <zzp-roll-item style="display: inline-block; width: 16px">{{ item }}</zzp-roll-item>
  </template>
</zzp-roll>
</template>

<script>
export default {
  data () {
    return {
      items: ['共创美好未来0', '共创美好未来1', '共创美好未来2', '共创美好未来3', '共创美好未来4'],
      items2: [0,1,2,3,4]
    }
  },
  methods: {
    clickMe () {
      console.log('111')
    }
  }
}
</script>  
```

### Roll Props 

| 参数 | 说明 | 类型 | 默认值 | 必填 | 版本 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| items | 需要遍历的元素 | `Array` | `[]` | - | - |
| speed | 多长时间切换下一张(单位`ms`) | `Number` | `4000` | - | - |
| visibleCount | 可见个数 | `Number` | `1` | - | - |
| direction | 滚动方向, 可选值：`up`, `down`, `left`, `right` | `String` | `up` | - | - |

