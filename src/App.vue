<template>
  <theNavigation/>
  <div>  
    <router-view></router-view>
  </div>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import theNavigation from '@/components/theNavigation.vue'
export default {
  name: 'App',
  components: {
   theNavigation,
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
