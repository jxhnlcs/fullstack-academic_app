import { createRouter, createWebHistory } from 'vue-router';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

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
    meta: { title: 'Meus Cursos' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.name !== 'home') {
    if (!token) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Por favor, efetue login primeiro!',
        showConfirmButton: false,
        timer: 2000,
      });
      next({ name: 'home' });
    } else {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        next({ name: 'home' });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
