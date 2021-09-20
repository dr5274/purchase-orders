import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/purchase-order',
  },
  {
    path: '/purchase-order/:id?',
    name: 'purchase-order',
    component: () =>
      import(
        /* webpackChunkName: "purchase-order" */ './views/purchase-order.vue'
      ),
  },
  {
    path: '/purchase-orders',
    name: 'purchase-orders',
    component: () =>
      import(
        /* webpackChunkName: "purchase-orders" */ './views/purchase-orders.vue'
      ),
  },
]

const router = new VueRouter({
  routes
})

export default router
