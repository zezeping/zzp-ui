<template>
  <zzp-row flex class="mixins">
    <zzp-col>
      <div class="menu-item" :class="{actived: $route.name === 'MixinModel'}" @click="$router.push({name: 'MixinModel'})">MixModel</div>
    </zzp-col>
    <zzp-col :span="24">
      <router-view/>
    </zzp-col>
  </zzp-row>
</template>

<style lang="scss" scoped>
  .mixins {
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
