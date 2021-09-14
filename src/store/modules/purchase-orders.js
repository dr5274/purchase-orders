import { GET_PURCHASE_ORDERS } from "./mutation-types";

const API = "http://localhost:7071/api/purchaseOrders";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const _defaultData = [
  {
      "id": 10,
      "requestDate": "4/5/84",
      "requestor": "ashley",
      "vendor": "lauren",
      "supplies": [
        "first", "second", "third"
      ],
      "quoteNumber": "123",
      "subTotal": 123.45,
      "dateNeeded": "10/1/21",
      "billableSC": ""
  },
  {
      "id": 20,
      "requestDate": "5/19/87",
      "requestor": "amanda",
      "vendor": "nicole",
      "supplies": [
        "first", "second", "third"
      ],
      "quoteNumber": "123",
      "subTotal": 123.45,
      "dateNeeded": "10/1/21",
      "billableSC": ""
  },
  {
      "id": 30,
      "requestDate": "4/17/88",
      "requestor": "lance",
      "vendor": "johnathon",
      "supplies": [
        "first", "second", "third"
      ],
      "quoteNumber": "123",
      "subTotal": 123.45,
      "dateNeeded": "10/1/21",
      "billableSC": ""
  }
];

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
        // await fetch(API + "/", { headers: HEADERS, method: "GET" })
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((res) => {
        //     const data = res == null ? [] : res;
        //     commit(GET_PURCHASE_ORDERS, data);
        //     return data;
        //   });
        let data = _defaultData;
        commit(GET_PURCHASE_ORDERS, data);
        return data;
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
