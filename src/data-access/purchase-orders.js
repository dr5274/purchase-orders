import axios from "axios";
import moment from "moment";

// const _apiUrl = "/api/purchase-orders";
const _apiUrl = "http://localhost:7071/api/purchase-orders";

export const _defaultPurchaseOrder = {
  _id: null,
  // requestDate: new Date().toISOString().substring(0, 10),
  // requestor: null,
  // vendor: null,
  supplies: ["", "", "", "", "", ""],
  supplied: [false, false, false, false, false, false],
  // quoteNumber: null,
  // subTotal: null,
  // dateNeeded: new Date().toISOString().substring(0, 10),
  // billableSC: null,
  // requestSent: new Date().toISOString().substring(0, 10),
  // dateReceived: new Date().toISOString().substring(0, 10),
  // poNumber: null,
  // complete: false,
  // notes: null,
  // assignedTo: null,
};

export const _getPurchaseOrders = () => {
  return axios.get(_apiUrl).then((res) => {
    return res.data.purchaseOrders.map((purchaseOrder) => transform(purchaseOrder));
  });
};

export const _getPurchaseOrder = (_id) => {
  if (_id) {
    return axios.get(_apiUrl + `/${_id}`).then((res) => {
      return transform(res.data.purchaseOrder);
    });
  } else {
    return Promise.resolve(_defaultPurchaseOrder);
  }
};

export const _savePurchaseOrder = (purchaseOrder) => {
  if (purchaseOrder._id === null) {
    return axios.post(_apiUrl + ``, purchaseOrder);
  } else {
    return axios.put(_apiUrl + `/${purchaseOrder._id}`, purchaseOrder);
  }
};

export const _deletePurchaseOrder = (_id) => {
  return axios.delete(_apiUrl + `/${_id}`);
};

const transform = (purchaseOrder) => {
  purchaseOrder.requestDateFormatted = moment(purchaseOrder.requestDate).format("MM/DD/YYYY");
  purchaseOrder.description = purchaseOrder.supplies.filter((x) => x).join(", ");
  purchaseOrder.subTotalFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(purchaseOrder.subTotal);
  purchaseOrder.dateNeededFormatted = moment(purchaseOrder.dateNeeded).format("MM/DD/YYYY");
  purchaseOrder.requestSentFormatted = moment(purchaseOrder.requestSent).format("MM/DD/YYYY");
  purchaseOrder.dateReceivedFormatted = moment(purchaseOrder.dateReceived).format("MM/DD/YYYY");
  return purchaseOrder;
};
