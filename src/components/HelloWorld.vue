<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
  </div>
</template>

<script>
export default {
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
          "X-RapidAPI-Key": 'a495d6f694msh5105a256b58ac88p1ef101jsnd8b5a7c008e9',
          "X-RapidAPI-Host": 'facts-by-api-ninjas.p.rapidapi.com',
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.fact = data[0].fact;
      })
      .catch((err) => {
        console.error(err);
      });
    },
  },
};
</script>

<style scoped>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
}
</style>