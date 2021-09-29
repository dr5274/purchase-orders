import Vue from "vue";
import axios from "axios";
import moment from "moment";

const _apiUrl = "/api/purchase-orders";
// const _apiUrl = "http://localhost:7071/api/purchase-orders";

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
      axios.get(_apiUrl).then((res) => {
        commit(
          "PURCHASE_ORDERS",
          res.data.purchaseOrders.map((purchaseOrder) => {
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

    createPurchaseOrder({ commit }, { purchaseOrder }) {
      axios.post(_apiUrl, purchaseOrder)
        .then((res) => {});
    },

    updatePurchaseOrder({ commit }, { purchaseOrder }) {
      axios.put(_apiUrl + `/${purchaseOrder._id}`, purchaseOrder)
        .then((res) => {});
    },

    deletePurchaseOrder({ commit }, { _id }) {
      axios.delete(_apiUrl + `/${_id}`)
        .then((res) => {});
    },
  },

  getters: {
    purchaseOrders: (state) => {
      return state.purchaseOrders;
    },

    purchaseOrderById: (state, getters) => (_id) => {
      return getters.purchaseOrders.find((po) => po._id == _id);
    },
  },
};
