import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Upcoming from "@/views/Upcoming.vue";
import Actor from "@/views/Actor.vue";
import Showrunner from "@/views/Showrunner.vue";
import Director from "@/views/Director.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    
    component: About,
  },
  {
    path: "/director",
    name: "Director",
    component: Director,
  },
  {
    path: "/showrunner",
    name: "Showrunner",
    component: Showrunner,
  },
  {
    path: "/actor",
    name: "Actor",
    component: Actor,
  },
  {
    path: "/upcoming-projects",
    name: "Upcoming Projects",
    component: Upcoming,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: "/",
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;