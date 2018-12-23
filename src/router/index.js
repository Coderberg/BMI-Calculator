/* eslint linebreak-style: ["error", "windows"] */
import Vue from 'vue';
import Router from 'vue-router';
import Calculator from '@/components/Calculator';
import Categories from '@/components/Categories';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
  ],
});
