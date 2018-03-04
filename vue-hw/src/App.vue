<template>
  <div id="app">
    <UserSearch/>    
  </div>
</template>
<script>
import UserSearch from "@/components/UserSearch.vue";

export default {
  name: "App",
  components: {
    UserSearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cardsHolder {
  width: 600px;
  margin: 0 auto;
}
.card {
  border: 1px solid;
  margin: 10px;
}
</style>
