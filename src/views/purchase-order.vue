<script>
import { mapGetters, mapActions } from "vuex";
import PurchaseOrderForm from "../components/purchase-order-form.vue";

const _defaultPurchaseOrder = {
  id: 0,
  requestDate: new Date().toISOString().substring(0, 10),
  requestor: null,
  vendor: null,
  supplies: ["", "", "", "", "", ""],
  supplied: [false, false, false, false, false, false],
  quoteNumber: null,
  subTotal: null,
  dateNeeded: new Date().toISOString().substring(0, 10),
  billableSC: null,
};

export default {
  name: "PurchaseOrder",
  data() {
    return {
      routePath: "/purchase-order",
      title: "Purchase Order",
      isReviewing: false,
    };
  },
  created() {
    this.getPurchaseOrder(this.$route.params.id);
  },
  components: {
    PurchaseOrderForm,
  },
  watch: {
    "$route.params.id": function (id) {
      this.getPurchaseOrder(id);
    },
  },

  computed: {
    ...mapGetters("purchaseOrders", { purchaseOrderById: "purchaseOrderById" }),
  },
  methods: {
    ...mapActions("purchaseOrders", { putPurchaseOrder: "putPurchaseOrder" }),

    getPurchaseOrder(id) {
      this.purchaseOrder = id
        ? this.purchaseOrderById(id)
        : _defaultPurchaseOrder;
      this.isReviewing = id ? true : false;
    },

    savePurchaseOrder(purchaseOrder) {
      this.putPurchaseOrder({ purchaseOrder });
    },
  },
};
</script>

<template>
  <PurchaseOrderForm
    :purchaseOrder="purchaseOrder"
    :isReviewing="isReviewing"
    @savePurchaseOrder="savePurchaseOrder"
  />
</template>
