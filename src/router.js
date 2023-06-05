import { createRouter, createWebHistory } from 'vue-router';
import login from './routes/login.vue';
import choosePlan from './routes/choosePlan.vue';
import register from './routes/register.vue'
import home from './routes/home.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/choose-plan',
    name: 'choosePlan',
    component: choosePlan
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/home',
    name: 'home',
    component: home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;