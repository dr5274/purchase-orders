<script>
import {
  _getPurchaseOrders,
  _deletePurchaseOrder,
} from "../data-access/purchase-orders";
import moment from "moment";
import PurchaseOrderList from "../components/purchase-order-list.vue";

export default {
  name: "PurchaseOrders",
  data() {
    return {
      routePath: "/purchase-orders",
      title: "Purchase Orders",
      purchaseOrders: [],
    };
  },
  created() {
    _getPurchaseOrders().then((res) => {
      this.purchaseOrders = res.map((purchaseOrder) => {
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
        purchaseOrder.requestSentFormatted = moment(
          purchaseOrder.requestSent
        ).format("MM/DD/YYYY");
        purchaseOrder.dateReceivedFormatted = moment(
          purchaseOrder.dateReceived
        ).format("MM/DD/YYYY");
        return purchaseOrder;
      });
    });
  },
  components: {
    PurchaseOrderList,
  },
  methods: {
    deletePurchaseOrder(_id) {
      _deletePurchaseOrder(_id).then((res) => {
        _getPurchaseOrders().then((res) => {
          this.purchaseOrders = res;
        });
      });
    },
  },
};
</script>

<template>
  <PurchaseOrderList
    :purchaseOrders="purchaseOrders"
    @deletePurchaseOrder="deletePurchaseOrder"
  />
</template>
