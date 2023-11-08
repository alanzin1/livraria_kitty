import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Romance from '../pages/Romance.vue';
import Terror from '../pages/Terror.vue';
import Fantasia from '../pages/Fantasia.vue';
import Drama from '../pages/Drama.vue';
import Infantil from '../pages/Infantil.vue';
import Religioso from '../pages/Religioso.vue';
import Manga from '../pages/Manga.vue';
import Hqs from '../pages/Hqs.vue';
import Didatico from '../pages/Didatico.vue';
import Login from '../pages/Login.vue';
import Cadastro from '../pages/Cadastro.vue';
import LoginAdm from '../pages/LoginAdm.vue';
import Painel from '../pages/Painel.vue';


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Romance',
    component: Romance,
  },
  {
    path: '/Drama',
    component: Drama,
  },
  {
    path: '/Terror',
    component: Terror,
  },
  {
    path: '/Fantasia',
    component: Fantasia,
  },
  {
    path: '/Infantil',
    component: Infantil,
  },
  {
    path: '/Religioso',
    component: Religioso,
  },
  {
    path: '/Didatico',
    component: Didatico,
  },
  {
    path: '/Manga',
    component: Manga,
  },
  {
    path: '/Hqs',
    component: Hqs,
  },
  {
  path: '/Login',
  component: Login,
  },
  {
    path: '/Cadastro',
    component: Cadastro,
    },
    {
      path: '/LoginAdm',
      component: LoginAdm,
      },
   {
      path: '/Painel',
      component: Painel,
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
