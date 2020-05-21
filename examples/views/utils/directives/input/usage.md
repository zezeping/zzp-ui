# Input 相关指令 [pc&wap]

> 安装Input 所有指令
```javascript
import Vue from 'vue'
import input from 'zzp-ui/packages/utils/directives/input'
Vue.use(input)
```


## `v-debounce` 防抖

> 单独安装`v-debounce`组件
```vue
import Vue from 'vue'
import debounce from 'zzp-ui/packages/utils/directives/input/debounce'
Vue.directive('debounce', debounce)
```

> Usage
- `v-debounce`: default: `600ms`

文本框内容改变后`600ms`内不再改变文本内容触发`change`事件

如果需要绑定的值也延迟`600ms`，添加`lazy`参数
```html
<input type="text" v-model="input" @change="changeInputValue" v-debounce="600">
<input type="text" v-model.lazy="input" @change="changeInputValue" v-debounce="600">
```
