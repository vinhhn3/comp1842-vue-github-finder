import { createRouter, createWebHistory } from "vue-router";

import AboutPage from "../pages/AboutPage.vue";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import UserPage from "../pages/UserPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
  { path: "/user/:id", component: UserPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
