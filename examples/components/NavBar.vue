<template>
  <div class="nav-bar">
    <div class="nav-bar" style="position: fixed">
      <router-link :class="{actived: $route.name === 'Home'}" to="/">首页</router-link>
      <p class="group-title">布局</p>
      <router-link :class="{actived: $route.name === 'Layout'}" to="/layout">Layout 布局</router-link>
      <router-link :class="{actived: $route.name === 'Sticky'}" to="/sticky">Sticky粘性布局 </router-link>
      <router-link :class="{actived: $route.name === 'Scroll'}" to="/scroll">Scroll 滚动</router-link>
      <router-link :class="{actived: $route.name === 'Roll'}" to="/roll">Roll 滚动</router-link>
      <p class="group-title">展示</p>
      <router-link :class="{actived: $route.name === 'Json'}" to="/json">Json数据</router-link>
      <router-link :class="{actived: $route.name === 'Icon'}" to="/icon">Icon图标</router-link>
      <router-link :class="{actived: $route.name === 'Qrcode'}" to="/qrcode">Qrcode二维码</router-link>
      <router-link :class="{actived: $route.name === 'Dialog'}" to="/dialog">Dialog对话框</router-link>
      <router-link :class="{actived: $route.name === 'Skeleton'}" to="/skeleton">Skeleton骨架屏</router-link>
      <p class="group-title">Form</p>
      <router-link :class="{actived: $route.name === 'Radio'}" to="/radio">Radio</router-link>
      <router-link :class="{actived: $route.name === 'Checkbox'}" to="/checkbox">Checkbox</router-link>
      <router-link :class="{actived: $route.name === 'Rate'}" to="/rate">Rate评分</router-link>
      <router-link :class="{actived: $route.name === 'SignedBoard'}" to="/signedBoard">SignedBoard手签板</router-link>
      <p class="group-title" @click="$router.push({path: '/utils'})">Utils</p>
      <!--<router-link :class="{actived: /^\/utils/.test($route.path)}" to="/utils">Utils</router-link>-->
      <router-link :class="{actived: /^Directive/.test($route.name)}" to="/utils/directives">Directives 指令</router-link>
      <router-link :class="{actived: /^Mixin/.test($route.name)}" to="/utils/mixins">Mixins 混入</router-link>
      <router-link :class="{actived: /Validators$/.test($route.name)}" to="/utils/validators">Validators 数据验证</router-link>
      <router-link :class="{actived: /^Native/.test($route.name)}" to="/utils/natives">Natives 原生对象拓展</router-link>
      <router-link :class="{actived: $route.name === 'ThirdComponents'}" to="/thirdComponents">第三方组件</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .nav-bar {
    height: 100%;
    width: 215px;
    min-width: 215px;
    background: #fff;
    overflow: auto;

    .group-title {
      text-align: center;
      color: #999;
      font-size: 12px;
      margin: 15px 0 5px;
    }

    a {
      display: block;
      line-height: 34px;
      font-size: 13px;
      text-align: center;
      text-decoration: none;
      &:hover {
        color: #000;
      }
      &.actived {
        position: relative;
        font-size: 15px;
        /*font-weight: 500;*/
        color: #409eff;
        &:after {
          position: absolute;
          content: '>';
          /*font-weight: 500;*/
          margin-left: 10px;
        }
      }
    }
  }
</style>
