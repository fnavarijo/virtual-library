import * as VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Book from './pages/Book.vue';

const routes = [
  { path: '/book/:id', component: Book },
  { path: '/', component: Home },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});