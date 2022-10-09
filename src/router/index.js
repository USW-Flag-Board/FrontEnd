import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import ListPage from "../views/ListPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/list",
      name: "ListPage",
      component: ListPage,
    },
  ],
});

export default router;
