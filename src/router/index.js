/* eslint-disable */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Signup from "../views/SignupView";
import Login from "../views/LoginView";

import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Root",
    redirect: { path: "/login" },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (!store.state.isLoggedIn) {
        next({ name: "Login" });
        return
      }
      next();
      return;
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
