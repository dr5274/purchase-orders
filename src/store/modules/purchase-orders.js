import axios from "axios";
import moment from "moment";

// const API = "http://localhost:7071/api/purchaseOrders";
// const HEADERS = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

const _defaultData = [
  {
    id: 10,
    requestDate: "4/5/84",
    requestor: "ashley",
    vendor: "lauren",
    supplies: ["first", "second", "third"],
    quoteNumber: "123",
    subTotal: 123.45,
    dateNeeded: "10/1/21",
    billableSC: "",
  },
  {
    id: 20,
    requestDate: "5/19/87",
    requestor: "amanda",
    vendor: "nicole",
    supplies: ["first", "second", "third"],
    quoteNumber: "123",
    subTotal: 123.45,
    dateNeeded: "10/1/21",
    billableSC: "",
  },
  {
    id: 30,
    requestDate: "4/17/88",
    requestor: "lance",
    vendor: "johnathon",
    supplies: ["first", "second", "third"],
    quoteNumber: "123",
    subTotal: 123.45,
    dateNeeded: "10/1/21",
    billableSC: "",
  },
];

export default {
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  state: {
    purchaseOrders: [],
  },
  mutations: {
    PURCHASE_ORDERS(state, purchaseOrders) {
      state.purchaseOrders = purchaseOrders;
    },
    // ADD_PURCHASE_ORDER(state, purchaseOrder) {
    // }
  },
  actions: {
    async _getPurchaseOrders({ commit }) {
      // axios.get('/api/purchaseOrders').then((response) => {
      //   commit('PURCHASE_ORDERS', response.data)
      // });
      let defaultData = _defaultData.map((po) => {
        po.requestDate = moment(po.requestDate).format("MM/DD/YYYY");
        po.dateNeeded = moment(po.dateNeeded).format("MM/DD/YYYY");
        return po;
      });
      commit("PURCHASE_ORDERS", _defaultData);
    },
    async getPurchaseOrder({ commit }, id) {
      // axios.get('/api/purchaseOrders/' + id).then((response) => {
      //   commit('PURCHASE_ORDERS', response.data)
      // });
    },
    async addPurchaseOrder({ commit }, purchaseOrder) {
      // axios.post('/api/purchaseOrders', purchaseOrder).then((response) => {
      //   commit('PURCHASE_ORDERS', response.data)
      // });
    },
  },
  getters: {
    purchaseOrders: (state) => state.purchaseOrders,
    purchaseOrderById: (state) => (id) => {
      return state.purchaseOrders.find(
        (purchaseOrder) => purchaseOrder.id === id
      );
    },
  },
};
