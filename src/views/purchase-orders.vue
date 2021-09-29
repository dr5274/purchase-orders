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
  created() {
    this.getPurchaseOrders();
  },
  components: {
    PurchaseOrderList,
  },
  computed: {
    ...mapGetters("purchaseOrders", { purchaseOrders: "purchaseOrders" }),
  },
  methods: {
    ...mapActions("purchaseOrders", { getPurchaseOrders: "getPurchaseOrders" }),
    ...mapActions("purchaseOrders", { delPurchaseOrder: "delPurchaseOrder" }),

    deletePurchaseOrder(id) {
      this.delPurchaseOrder({ id });
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
