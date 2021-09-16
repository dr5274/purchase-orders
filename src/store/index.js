import Vue from 'vue';
import Vuex from 'vuex';
import purchaseOrdersModule from './purchase-orders';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    purchaseOrders: purchaseOrdersModule,
  },
  state: {},
});
