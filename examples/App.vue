<template>
  <div id="app">
    <zzp-row flex align="top">
      <nav-bar></nav-bar>
      <zzp-col :span="24">
        <router-view/>
      </zzp-col>
    </zzp-row>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #eef1f5;
  color: #2c3e50;

  /*deep*/ a {
    color: #2c3e50;
  }

  .zzp-row {
    height: 100%;
    .zzp-col {
      height: 100%;
    }
  }
}
</style>
