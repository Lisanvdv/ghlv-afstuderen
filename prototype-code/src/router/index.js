import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/views/Main.vue";
import Start from "@/components/views/Start.vue";
import FinishedEarly from "@/components/views/FinishedEarly.vue";
import Finished from "@/components/views/Finished.vue";

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
  {
    path: "/finishedearly",
    name: "FinishedEarly",
    component: FinishedEarly,
  },
  {
    path: "/finished",
    name: "Finished",
    component: Finished,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;