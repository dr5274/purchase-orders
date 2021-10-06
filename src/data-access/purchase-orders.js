import axios from "axios";

const _apiUrl = "/api/purchase-orders";
// const _apiUrl = "http://localhost:7071/api/purchase-orders";

export const _defaultPurchaseOrder = {
  _id: null,
  requestDate: null,
  requestor: null,
  vendor: null,
  supplies: ["", "", "", "", "", ""],
  supplied: [false, false, false, false, false, false],
  quoteNumber: null,
  subTotal: null,
  dateNeeded: null,
  billableSC: null,
  requestSent: null,
  dateReceived: null,
  poNumber: null,
  complete: false,
  notes: null,
  assignedTo: [],
};

const _formatDate = (obj, field) => {
  let value = obj[field];
  if (value) {
    let date = new Date(Date.parse(value) + new Date().getTimezoneOffset() * 60000);
    obj[field] = date.toISOString().substr(0, 10);
    obj[field + "Formatted"] = new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }
};

const _formatCurrency = (obj, field) => {
  let value = obj[field];
  if (value) {
    obj[field + "Formatted"] = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
};

const _transform = (purchaseOrder) => {
  _formatDate(purchaseOrder, "requestDate");
  _formatDate(purchaseOrder, "dateNeeded");
  _formatDate(purchaseOrder, "requestSent");
  _formatDate(purchaseOrder, "dateReceived");
  _formatCurrency(purchaseOrder, "subTotal");
  purchaseOrder.assignedToFormatted = purchaseOrder.assignedTo
          .filter((x) => x)
          .join(", ");
  purchaseOrder.suppliesFormatted = purchaseOrder.supplies
          .filter((x) => x)
          .join(", ");
  return purchaseOrder;
};

export const _getPurchaseOrders = () => {
  return axios.get(_apiUrl).then((res) => {
    return res.data.purchaseOrders.map((purchaseOrder) => {
      return _transform(purchaseOrder);
    });
  });
};

export const _getPurchaseOrder = (_id) => {
  if (_id) {
    return axios.get(_apiUrl + `/${_id}`).then((res) => {
      return _transform(res.data.purchaseOrder);
    });
  } else {
    return Promise.resolve(_transform(_defaultPurchaseOrder));
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
