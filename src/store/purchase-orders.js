import Vue from "vue";
import axios from "axios";
import moment from "moment";

// Vue.axios.defaults.baseURL = "http://localhost:7071/api/purchase-orders";
// const API = "/api/purchase-orders";
// const HEADERS = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

export default {
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  state: {
    purchaseOrders: [],
    purchaseOrder: {},
  },
  mutations: {
    PURCHASE_ORDERS(state, purchaseOrders) {
      state.purchaseOrders = purchaseOrders;
    },
  },
  actions: {
    getPurchaseOrders({ commit }) {
      axios.get("/api/purchase-orders").then((res) => {
        let purchaseOrders = res == null ? [] : res.data;
        commit(
          "PURCHASE_ORDERS",
          purchaseOrders.map((purchaseOrder) => {
            purchaseOrder.requestDateFormatted = moment(
              purchaseOrder.requestDate
            ).format("MM/DD/YYYY");
            purchaseOrder.description = purchaseOrder.supplies
              .filter((x) => x)
              .join(", ");
            purchaseOrder.subTotalFormatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(purchaseOrder.subTotal);
            purchaseOrder.dateNeededFormatted = moment(
              purchaseOrder.dateNeeded
            ).format("MM/DD/YYYY");
            return purchaseOrder;
          })
        );
      });
    },

    // getPurchaseOrder({ commit }, id) {
    //   axios.get(API + "/" + id).then((res) => {
    //     let purchaseOrder = res == null ? {} : res.data;
    //     commit("PURCHASE_ORDER", transform(purchaseOrder));
    //   });
    // },

    async putPurchaseOrder({ commit, getters }, { purchaseOrder }) {
      let purchaseOrders = getters.purchaseOrders;
      if (purchaseOrder.id === 0) {
        // add
        purchaseOrder.id =
          purchaseOrders.reduce((max, po) => (po.id > max ? po.id : max), 0) +
          1;
        // purchaseOrders.push(purchaseOrder);
        // localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
      } else {
        // update
        purchaseOrders = purchaseOrders.filter(
          (po) => po.id !== purchaseOrder.id
        );
        // purchaseOrders.push(purchaseOrder);
        // localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
      }
      purchaseOrders.push(purchaseOrder);
      localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
    },

    async delPurchaseOrder({ commit, getters }, { id }) {
      alert("del purchase order");
    },
  },
  getters: {
    purchaseOrders: (state) => {
      return state.purchaseOrders;
    },

    purchaseOrderById: (state, getters) => (id) => {
      return getters.purchaseOrders.find((po) => po.id == id);
    },
  },
};
