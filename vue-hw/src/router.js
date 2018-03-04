import Vue from "vue";
import Router from "vue-router";
import Repositories from "./views/Repositories.vue";
import Following from "./views/Following.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/repositories/:login",
      name: "repositories",
      component: Repositories
    },
    {
      path: "/following/:login",
      name: "following",
      component: Following
    }
  ]
});
