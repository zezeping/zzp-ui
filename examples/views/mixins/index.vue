<template>
  <zzp-row flex class="mixins">
    <zzp-col style="min-width: 150px;">
      <div class="menus">
        <div class="menu-item" :class="{actived: $route.name === 'MixinModel'}" @click="$router.push({name: 'MixinModel'})">mixModel</div>
        <div class="menu-item" :class="{actived: $route.name === 'MixinDialog'}" @click="$router.push({name: 'MixinDialog'})">mixDialog</div>
        <div class="menu-item" :class="{actived: $route.name === 'MixinMobileOnPc'}" @click="$router.push({name: 'MixinMobileOnPc'})">mixMobileOnPc</div>
      </div>
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
    .menus {
      position: fixed;
      min-width: 100px;
      .menu-item {
        line-height: 40px;

        &.actived {
          color: #419EFF;
        }
      }
    }
  }
</style>
