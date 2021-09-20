import moment from "moment";

// const API = "http://localhost:7071/api/purchaseOrders";
// const HEADERS = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

const _defaultData = [
  {
    id: 10,
    requestDate: new Date(2021, 7, 25),//"8/25/2021",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 11,
    requestDate: "8/31/21",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 12,
    requestDate: "9/9/21",
    requestor: "John",
    vendor: "Grainger",
    supplies: [
      "LED light ring",
      "sink soap dispenser (x2)",
      "40 grit sand discs",
    ],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "cart",
    subTotal: 1176.53,
    dateNeeded: "9/14/21",
    billableSC: "741344",
  },
  {
    id: 20,
    requestDate: new Date(2021, 7, 25),//"8/25/2021",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 21,
    requestDate: "8/31/21",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 22,
    requestDate: "9/9/21",
    requestor: "John",
    vendor: "Grainger",
    supplies: [
      "LED light ring",
      "sink soap dispenser (x2)",
      "40 grit sand discs",
    ],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "cart",
    subTotal: 1176.53,
    dateNeeded: "9/14/21",
    billableSC: "741344",
  },
  {
    id: 30,
    requestDate: new Date(2021, 7, 25),//"8/25/2021",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 31,
    requestDate: "8/31/21",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 32,
    requestDate: "9/9/21",
    requestor: "John",
    vendor: "Grainger",
    supplies: [
      "LED light ring",
      "sink soap dispenser (x2)",
      "40 grit sand discs",
    ],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "cart",
    subTotal: 1176.53,
    dateNeeded: "9/14/21",
    billableSC: "741344",
  },
  {
    id: 40,
    requestDate: new Date(2021, 7, 25),//"8/25/2021",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 41,
    requestDate: "8/31/21",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 42,
    requestDate: "9/9/21",
    requestor: "John",
    vendor: "Grainger",
    supplies: [
      "LED light ring",
      "sink soap dispenser (x2)",
      "40 grit sand discs",
    ],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "cart",
    subTotal: 1176.53,
    dateNeeded: "9/14/21",
    billableSC: "741344",
  },
  {
    id: 50,
    requestDate: new Date(2021, 7, 25),//"8/25/2021",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 51,
    requestDate: "8/31/21",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1/1/1999",
    billableSC: "non-billable",
  },
  {
    id: 52,
    requestDate: "9/9/21",
    requestor: "John",
    vendor: "Grainger",
    supplies: [
      "LED light ring",
      "sink soap dispenser (x2)",
      "40 grit sand discs",
    ],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "cart",
    subTotal: 1176.53,
    dateNeeded: "9/14/21",
    billableSC: "741344",
  },
];

export default {
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  state: {
    purchaseOrders: null,
  },
  mutations: {
    PURCHASE_ORDERS(state, purchaseOrders) {
      state.purchaseOrders = purchaseOrders;
    },
  },
  actions: {
    async savePurchaseOrder({ commit }, purchaseOrder) {
      alert("save purchase order");
    },
  },
  getters: {
    purchaseOrders: (state) => {
      let purchaseOrders = state.purchaseOrders;
      if (!purchaseOrders) {
        purchaseOrders = localStorage.getItem("purchaseOrders");
        if (!purchaseOrders) {
          purchaseOrders = _defaultData;
        }
      }
      return purchaseOrders.map((po) => {
        // handle formatting/transformation
        po.requestDateFormatted = moment(po.requestDate).format("MM/DD/YYYY");
        po.description = po.supplies.join(', ');
        po.subTotalFormatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(po.subTotal);
        po.dateNeededFormatted = moment(po.dateNeeded).format("MM/DD/YYYY");
        return po;
      });
    },

    purchaseOrderById: (state, getters) => (id) => {
      return getters.purchaseOrders.find(
        (purchaseOrder) => purchaseOrder.id == id
      );
    },
  },
};
