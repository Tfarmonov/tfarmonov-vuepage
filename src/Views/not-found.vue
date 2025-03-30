<!-- views/not-found.vue -->
<template>
  <goBack/>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, that page doesn't exist.</p>
  </div>
</template>
<script>  
export default {
  name: "NotFound",
  components: {
    goBack,
  }, 
};
</script>
