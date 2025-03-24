<template>
  <div class="hello">
    <h1>MY GIT HUB PAGES TEST</h1>
    <button @click="fetchData">Click me!</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": 'your-api-key',
          "X-RapidAPI-Host": 'facts-by-api-ninjas.p.rapidapi.com',
        },
      })
        .then((response) => {
          response.json().then((data) => {
            this.fact = data[0].fact;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
