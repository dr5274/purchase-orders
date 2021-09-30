<script>
import {
  _getPurchaseOrders,
  _deletePurchaseOrder,
} from "../data-access/purchase-orders";
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
      this.purchaseOrders = res;
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
