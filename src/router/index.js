import { createRouter, createWebHistory } from "vue-router";
import ComplaintHubView from "@/views/ComplaintHubView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "complain-home",
      component: ComplaintHubView,
      meta: { title: "ร้องเรียน" }
    },
  ],
});

export default router;
