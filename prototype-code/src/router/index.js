import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/views/Main.vue";
import Start from "@/components/views/Start.vue";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;