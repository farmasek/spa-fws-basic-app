<template>
 <div>
     <h1> Following users</h1>
      <div class="cardsHolder" v-for="repository in repositores" :key="repository.id">
        <div class="card">
       <div class="firstLine"> <h4>{{repository.name}}</h4> <i>{{repository.language}}</i></div>
        <p>{{repository.description}}</p></div>
      
      </div>
    </div>
</template>

<script>
import { getUsersRepos } from "../http";

export default {
  name: "repositories",
  data: function() {
    return {
      repositores: []
    };
  },
  created: function() {
    this.repositores = [];
    getUsersRepos(this.$route.params.login)
      .then(response => {
        this.repositores = response.data;
      })
      .catch(() => {
        this.repositores = [];
      });
  }
};
</script>
<style>
.firstLine {
  display: inline-flex;
}
.firstLine i {
  padding: 1.3em;
}
</style>
