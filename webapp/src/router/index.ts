import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import PagesLayout from "@/pages/PagesLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import SudokuPage from "@/pages/SudokuPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "layout",
    component: PagesLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: HomePage,
      },
      {
        path: "sudoku",
        name: "sudoku",
        component: SudokuPage,
      },
      {
        path: "**",
        redirect: "/home",
      },
    ],
  },
  {
    path: "**",
    redirect: "/home",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
