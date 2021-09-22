<script>
import { mapGetters, mapActions } from "vuex";
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
  methods: {
    deletePurchaseOrder(id) {
      this.delPurchaseOrder({ id });
    },
    ...mapActions("purchaseOrders", { delPurchaseOrder: "delPurchaseOrder" }),
  },
};
</script>

<template>
  <PurchaseOrderList
    :purchaseOrders="purchaseOrders"
    @deletePurchaseOrder="deletePurchaseOrder"
  />
</template>
