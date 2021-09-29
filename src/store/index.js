import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import purchaseOrdersModule from './purchase-orders';

Vue.use(Vuex);
Vue.use(axios);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    purchaseOrders: purchaseOrdersModule,
  },
  state: {},
});
