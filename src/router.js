import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/components/page-not-found.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/purchase-order',
    },
    {
      path: '/purchase-order',
      name: 'purchase-order',
      component: () =>
        import(
          /* webpackChunkName: "purchase-order" */ './views/purchase-orders/purchase-order.vue'
        ),
    },
    {
      path: '/purchase-orders',
      name: 'purchase-orders',
      component: () =>
        import(
          /* webpackChunkName: "purchase-orders" */ './views/purchase-orders/purchase-orders.vue'
        ),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
