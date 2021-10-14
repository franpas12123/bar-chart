import Vue from 'vue';
import VueRouter from 'vue-router';
import Chartv1 from '@/components/Chartv1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'chartv1',
    component: Chartv1,
  },
  {
    path: '/chartv2',
    name: 'chartv2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/Chartv2.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
