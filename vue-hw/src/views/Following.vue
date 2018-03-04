<template>
 <div>
     <h1> Following users</h1>
      <div class="cardsHolder" v-for="user in following" :key="user.login">
        <div class="card followingCard">
          <img width="100px" height="100px" :src="user.avatar_url" />
          <h4>{{user.login}}</h4>
        </div>
      </div>
    </div>
</template>

<script>

import { getUserFollowings } from "../http";

export default {
  name: "following",
  data: function() {
    return {
      following: []
    };
  },
  created: function() {
    this.following = [];
    getUserFollowings(this.$route.params.login)
      .then(response => {
        this.following = response.data;
      })
      .catch(() => {
        this.following = [];
      });
  }
};
</script>
<style>
.followingCard {
  display: inline-flex;
  width: 100%;
}
.followingCard h4 {
  padding: 1em;
}
</style>
