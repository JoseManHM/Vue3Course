<template>
  <Navbar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view/>
</template>

<script>
import AboutPage from '../src/modules/pokemon/pages/AboutPage.vue'

import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    AboutPage,
    Navbar: defineAsyncComponent(() => import('@/modules/shared/components/Navbar'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
