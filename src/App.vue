<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/random-facts">Random Facts</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/contact">Contact</router-link>
  </div>
  <RouterView/>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
