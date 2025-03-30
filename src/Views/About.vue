<!-- views/About.vue -->
<template>
    <goBack/>
    <div><h1>About Page</h1></div>
  </template>
  <script> 
  import goBack from '@/components/goBack.vue'
  export default {
    name: "About",
    components: {
      goBack,
    },
  };
  </script>
