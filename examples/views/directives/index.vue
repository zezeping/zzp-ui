<template>
  <zzp-row flex class="directives">
    <zzp-col>
      <div class="menu-item" :class="{actived: $route.name === 'DirectiveInput'}" @click="$router.push({name: 'DirectiveInput'})">Input</div>
      <div class="menu-item" :class="{actived: $route.name === 'DirectiveImg'}" @click="$router.push({name: 'DirectiveImg'})">Img</div>
    </zzp-col>
    <zzp-col :span="24">
      <router-view/>
    </zzp-col>
  </zzp-row>
</template>

<style lang="scss" scoped>
  .directives {
    padding: 10px 20px;
    height: 100%;
    .menu-item {
      line-height: 40px;

      &.actived {
        color: #419EFF;
      }
    }
  }
</style>
