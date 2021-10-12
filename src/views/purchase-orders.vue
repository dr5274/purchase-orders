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
      isLoading: true,
      purchaseOrders: [],
    };
  },

  created() {
    _getPurchaseOrders().then((res) => {
      this.purchaseOrders = res.map((purchaseOrder) => {
        return purchaseOrder;
      });
      this.isLoading = false;
    });
  },

  components: {
    PurchaseOrderList,
  },

  methods: {
    deletePurchaseOrder(_id) {
      _deletePurchaseOrder(_id)
        .then((res) => {
          _getPurchaseOrders().then((res) => {
            this.purchaseOrders = res;
          });
        })
        .catch((error) => {});
    },
  },
};
</script>

<template>
  <PurchaseOrderList
    :isLoading="isLoading"
    :purchaseOrders="purchaseOrders"
    @deletePurchaseOrder="deletePurchaseOrder"
  />
</template>
