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
    this._getPurchaseOrders();
  },
  components: {
    PurchaseOrderList,
  },
  computed: {
    ...mapGetters("purchaseOrders", { purchaseOrders: "purchaseOrders" }),
  },
  methods: {
    ...mapActions("purchaseOrders", { _getPurchaseOrders: "getPurchaseOrders" }),
    ...mapActions("purchaseOrders", { _deletePurchaseOrder: "deletePurchaseOrder" }),

    deletePurchaseOrder(_id) {
      this._deletePurchaseOrder({ _id });
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
