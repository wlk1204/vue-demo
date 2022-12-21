import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/homepage';
import Help from '@/pages/help';
import Me from '@/pages/me';

const routes = [
  { path: '/', component: HomePage },
  { path: '/me', component: Me },
  { path: '/help', component: Help },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
