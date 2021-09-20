<script>
import { mapGetters } from "vuex";
import PurchaseOrderList from "../components/purchase-order-list.vue";

export default {
  name: "PurchaseOrders",
  data() {
    return {
      routePath: "/purchase-orders",
      title: "Purchase Orders",
    };
  },
  components: {
    PurchaseOrderList,
  },
  computed: {
    ...mapGetters("purchaseOrders", { purchaseOrders: "purchaseOrders" }),
  },
};
</script>

<template>
  <PurchaseOrderList :purchaseOrders="purchaseOrders" />
</template>
