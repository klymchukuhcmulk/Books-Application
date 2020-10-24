import { createWebHistory, createRouter } from "vue-router";
import Guard from '@/router/Guard';
import Home from '@/components/Home';
import Login from '@/components/Login';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: Guard.auth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

export default createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes
})

