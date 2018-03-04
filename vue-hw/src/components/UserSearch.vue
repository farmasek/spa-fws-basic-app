<template>
  <div>
    Find github user:
    <input v-model="login" placeholder="login">  
    <div v-if="user">   
      <div class="profileHolder">
        <div>
          <h2>{{user.login}}</h2>
          <h1>{{user.name}}</h1>
          <p>{{user.bio}}</p>
          <i>{{user.company}}</i>
        </div>
          <img width="200px"
          height="200px"
          :src="user.avatar_url">
      </div>
    <nav>
      <router-link :to="`/repositories/${login}`">Repositories</router-link> |
      <router-link :to="`/following/${login}`">Following</router-link>
    </nav>
    <router-view/>
    
  </div>

  <div>
    <div v-if="!user">User not found </div> 
  </div>
  </div>
</template>

<script>
import { getUser } from "../http";

export default {
  name: "UserSearch",
  data: function() {
    return {
      login: "",
      user: null
    };
  },
  watch: {
    login: function(login) {
      this.user = null;
      getUser(login)
        .then(response => {
          this.user = response.data;
          this.$router.push(`/repositories/${login}`);
        })
        .catch(() => {
          this.user = null;
          this.$router.push("");
        });
    }
  }
};
</script>

<style>
.profileHolder {
  display: inline-flex;
  padding:1em;
}

.profileHolder div {
  padding: 0.5em;
}

</style>
