import { GET_PURCHASE_ORDERS } from './mutation-types';

const data = {
  purchaseOrders: [
    // {
    //   id: 10,
    //   requestDate: '4/5/84',
    //   requestor: 'ashley',
    //   vendor: 'lauren',
    // },
    // {
    //   id: 20,
    //   requestDate: '5/19/87',
    //   requestor: 'amanda',
    //   vendor: 'nicole',
    // },
    // {
    //   id: 30,
    //   requestDate: '4/17/88',
    //   requestor: 'lance',
    //   vendor: 'jonathan',
    // },
  ],
};
export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    purchaseOrders: [],
  },
  mutations: {
    [GET_PURCHASE_ORDERS](state, purchaseOrders) {
      state.purchaseOrders = purchaseOrders;
    },
  },
  actions: {
    async getPurchaseOrdersAction({ commit }) {
      try {
        commit(GET_PURCHASE_ORDERS, data.purchaseOrders);
        return data.purchaseOrders;
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    purchaseOrders: (state) => state.purchaseOrders,
  },
};
