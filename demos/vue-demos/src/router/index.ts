import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/components",
    name: "components",
    component: () => import("../views/Components.vue"),
  },
  {
    path: "/components/navbars",
    name: "Navbars",
    component: () => import("../views/ComponentPages/NavbarPage.vue"),
  },
  {
    path: "/components/blogs",
    name: "Blogs",
    component: () => import("../views/ComponentPages/BlogPage.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
