<template>
  <div id="app">
    <UserSearch/>    
  </div>
</template>
<script>
import UserSearch from '@/components/UserSearch.vue';

export default {
  name: "App",
  components: {
    UserSearch
  }
};
</script>

<style>
#app {
  text-align: center;
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


