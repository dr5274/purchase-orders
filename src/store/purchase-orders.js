import moment from "moment";

// const API = "http://localhost:7071/api/purchaseOrders";
// const HEADERS = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

const _defaultData = [
  {
    id: 10,
    requestDate: "2021-08-25",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 11,
    requestDate: "2021-08-31",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 12,
    requestDate: "2021-09-09",
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
    dateNeeded: "2021-09-14",
    billableSC: "741344",
  },
  {
    id: 20,
    requestDate: "2021-08-25",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 21,
    requestDate: "2021-08-31",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 22,
    requestDate: "2021-09-09",
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
    dateNeeded: "2021-09-14",
    billableSC: "741344",
  },
  {
    id: 30,
    requestDate: "2021-08-25",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 31,
    requestDate: "2021-08-31",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 32,
    requestDate: "2021-09-09",
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
    dateNeeded: "2021-09-14",
    billableSC: "741344",
  },
  {
    id: 40,
    requestDate: "2021-08-25",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 41,
    requestDate: "2021-08-31",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 42,
    requestDate: "2021-09-09",
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
    dateNeeded: "2021-09-14",
    billableSC: "741344",
  },
  {
    id: 50,
    requestDate: "2021-08-25",
    requestor: "Henry",
    vendor: "PSI",
    supplies: ["compound", "discs", "red tape"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "1040781",
    subTotal: 1933.73,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 51,
    requestDate: "2021-08-31",
    requestor: "Sig",
    vendor: "Allied High Tech",
    supplies: ["diamond paste", "magnetic base adhesive back", "Chem-pol"],
    supplied: [false, false, false, false, false, false],
    quoteNumber: "86228",
    subTotal: 5722.0,
    dateNeeded: "1999-01-01",
    billableSC: "non-billable",
  },
  {
    id: 52,
    requestDate: "2021-09-09",
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
    dateNeeded: "2021-09-14",
    billableSC: "741344",
  },
];

export default {
  strict: process.env.NODE_ENV !== "production",
  namespaced: true,
  state: {
    purchaseOrders: null,
  },
  mutations: {},
  actions: {
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
        purchaseOrders = purchaseOrders.filter((po) => po.id !== purchaseOrder.id);
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
      let purchaseOrders = JSON.parse(localStorage.getItem("purchaseOrders"));
      if (!purchaseOrders) {
        purchaseOrders = _defaultData;
        localStorage.setItem("purchaseOrders", JSON.stringify(purchaseOrders));
      }
      return purchaseOrders.map((po) => {
        // handle formatting/transformation
        po.requestDateFormatted = moment(po.requestDate).format("MM/DD/YYYY");
        po.description = po.supplies.filter(x => x).join(", ");
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
