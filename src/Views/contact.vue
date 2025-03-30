<!-- views/contact.vue -->
<template>
    <goBack/>
    <div>
      <h1>Contact</h1>
      <p>Name: Temurbek Farmonov</p>
      <p>Email: Tmfarmonov@my.waketech.edu</p>
    </div>
  </template>
  <script>
  import goBack from '@/components/goBack.vue'
  export default {
    name: "Contact",
    components: {
      goBack,
    },
  };


</script>
