import type { RouteLocationNormalized } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Posts",
    component: () => import("@/pages/PostsPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to: RouteLocationNormalized) => {
  document.title = typeof to.meta.title === "string" ? to.meta.title : window.document.title;
});

export default router;
