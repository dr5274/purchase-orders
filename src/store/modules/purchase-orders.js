import { GET_PURCHASE_ORDERS } from "./mutation-types";

const API = "http://localhost:7071/api/purchaseOrders";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export default {
  strict: process.env.NODE_ENV !== "production",
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
        await fetch(API + "/", { headers: HEADERS, method: "GET" })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            const data = res == null ? [] : res;
            commit(GET_PURCHASE_ORDERS, data);
            return data;
          });
      } catch (error) {
        console.error(error);
      }
    },

    async putPurchaseOrderAction(purchaseOrder, { commit }) {
      try {
        await fetch(API + "/", {
          headers: HEADERS,
          method: "POST",
          body: JSON.stringify(purchaseOrder),
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            const data = res == null ? [] : res;
            commit(GET_PURCHASE_ORDERS, data);
            return data;
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    purchaseOrders: (state) => state.purchaseOrders,
  },
};
