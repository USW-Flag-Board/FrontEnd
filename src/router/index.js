import { createRouter, createWebHistory } from "vue-router";
import Dropdown from "../views/DropdownExist.vue";
import MainPage from "../views/MainPage.vue";
import ListPage from "../views/ListPage.vue";
import MyPage from "../views/MyPage.vue";
import SearchPage from "../views/SearchPage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: Dropdown,
      children: [
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
        {
          path: "/myPage",
          name: "MyPage",
          component: MyPage,
        },
        {
          path: "/searchPage",
          name: "SearchPage",
          component: SearchPage,
        },
      ],
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/SignUpPage",
      name: "SignUpPage",
      component: SignUpPage,
    },
  ],
});

export default router;
