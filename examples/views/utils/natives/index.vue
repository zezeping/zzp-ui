<template>
  <zzp-row flex class="natives">
    <zzp-col style="min-width: 150px;">
      <div class="menus">
        <div class="menu-item" :class="{actived: $route.name === 'NativeExtObject'}" @click="$router.push({name: 'NativeExtObject'})">ExtObject</div>
        <div class="menu-item" :class="{actived: $route.name === 'NativeExtDate'}" @click="$router.push({name: 'NativeExtDate'})">ExtDate</div>
        <div class="menu-item" :class="{actived: $route.name === 'NativeExtFormData'}" @click="$router.push({name: 'NativeExtFormData'})">ExtFormData</div>
      </div>
    </zzp-col>
    <zzp-col :span="24">
      <router-view/>
    </zzp-col>
  </zzp-row>
</template>

<style lang="scss" scoped>
  .natives {
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
