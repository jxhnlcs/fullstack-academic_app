import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MyCoursesView from '../views/MyCoursesView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Página Inicial' },
  },

  {
    path: '/mycourses',
    name: 'mycourses',
    component: MyCoursesView,
    meta: { title: 'Página Inicial' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
