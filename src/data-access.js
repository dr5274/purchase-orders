import axios from "axios";

export const _apiBase = "/api/";
// export const _apiBase = "http://localhost:7071/api/";

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
  billable: false,
  scNumber: null,
  requestSent: null,
  dateReceived: null,
  poNumber: null,
  complete: false,
  assignedTo: [],
  notes: null,
};

const _formatDate = (obj, field) => {
  let value = obj[field];
  if (value) {
    switch (value) {
      case "ASAP":
      case "No Rush":
        obj[field + "Formatted"] = value;
        break;
      default:
        value = new Date(Date.parse(value) + new Date().getTimezoneOffset() * 60000);
        obj[field] = value.toISOString().substr(0, 10);
        obj[field + "Formatted"] = new Intl.DateTimeFormat("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        }).format(value);
        break;
    }
  } else {
    obj[field + "Formatted"] = null;
  }
};

const _formatCurrency = (obj, field) => {
  let value = obj[field];
  if (value) {
    obj[field + "Formatted"] = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  } else {
    obj[field + "Formatted"] = null;
  }
};

const _transform = (purchaseOrder) => {
  _formatDate(purchaseOrder, "requestDate");
  _formatDate(purchaseOrder, "dateNeeded");
  _formatDate(purchaseOrder, "requestSent");
  _formatDate(purchaseOrder, "dateReceived");
  _formatCurrency(purchaseOrder, "subTotal");
  purchaseOrder.assignedToFormatted = purchaseOrder.assignedTo.filter((x) => x).join(", ");
  purchaseOrder.suppliesFormatted = purchaseOrder.supplies.filter((x) => x).join(", ");
  return purchaseOrder;
};

export const _getPurchaseOrders = () => {
  return axios.get(_apiBase + "purchase-orders").then((res) => {
    return res.data.purchaseOrders.map((purchaseOrder) => {
      return _transform(purchaseOrder);
    });
  });
};

export const _getPurchaseOrder = (_id) => {
  if (_id) {
    return axios.get(_apiBase + `purchase-orders/${_id}`).then((res) => {
      return _transform(res.data.purchaseOrder);
    });
  } else {
    return Promise.resolve(_transform(_defaultPurchaseOrder));
  }
};

export const _savePurchaseOrder = (purchaseOrder) => {
  if (purchaseOrder._id === null) {
    return axios.post(_apiBase + "purchase-orders", purchaseOrder);
  } else {
    return axios.put(_apiBase + `purchase-orders/${purchaseOrder._id}`, purchaseOrder);
  }
};

export const _deletePurchaseOrder = (_id) => {
  return axios.delete(_apiBase + `purchase-orders/${_id}`);
};

export const _getAssignees = () => {
  return axios.get(_apiBase + "assignees").then((res) => {
    return res.data.assignees;
  });
};
