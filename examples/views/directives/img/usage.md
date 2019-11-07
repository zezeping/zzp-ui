# Img 相关指令 [pc&wap]

> 安装Img 所有指令
```javascript
import Vue from 'vue'
import img from 'zzp-ui/packages/directives/img'
Vue.use(img)
```


## `v-src`

> 单独安装`v-src`组件
```vue
import Vue from 'vue'
import src from 'zzp-ui/packages/directives/img/src'
Vue.directive('src', src)
```

> Usage
- v-src: 图片懒加载, 该参数url加载成功后才会真正显示该url
```vue
<img src="../assets/logo.png" alt="" v-src="imgSrc">
export default {
  data () {
    return {
      imgSrc: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.imgSrc = 'http://pic58.nipic.com/file/20141226/4949133_151007773000_2.jpg'
    }, 1000)
  }
}
```
