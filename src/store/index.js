import Vue from 'vue';
import Vuex from 'vuex';
import purchaseOrdersModule from './modules/purchase-orders';

export * from './modules/mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    purchaseOrders: purchaseOrdersModule,
  },
  state: {},
});
