<template>
  <div class="nav-bar">
    <router-link :class="{actived: $route.name === 'Home'}" to="/">首页</router-link>
    <router-link :class="{actived: $route.name === 'Layout'}" to="/layout">Layout 布局</router-link>
    <router-link :class="{actived: $route.name === 'Scroll'}" to="/scroll">Scroll</router-link>
    <router-link :class="{actived: $route.name === 'Roll'}" to="/roll">Roll 滚动</router-link>
    <router-link :class="{actived: $route.name === 'Json'}" to="/json">Json数据</router-link>
    <router-link :class="{actived: $route.name === 'Qrcode'}" to="/qrcode">Qrcode上传</router-link>
    <router-link :class="{actived: $route.name === 'Uploader'}" to="/uploader">Uploader上传</router-link>
    <router-link :class="{actived: /^Directive/.test($route.name)}" to="/directives">Directives 指令</router-link>
    <router-link :class="{actived: /^Mixin/.test($route.name)}" to="/mixins">Mixins 混入</router-link>
    <router-link to="/about">关于</router-link>
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
        font-weight: 500;
        color: #000;
        &:after {
          position: absolute;
          content: '>';
          font-weight: 500;
          margin-left: 10px;
        }
      }
    }
  }
</style>
