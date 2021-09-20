<script>
import { mapGetters, mapActions } from "vuex";
import PurchaseOrderForm from "../components/purchase-order-form.vue";

const defaultPurchaseOrder = {
  requestDate: null,
  requestor: null,
  vendor: null,
  supplies: [null, null, null, null, null, null],
  supplied: [false, false, false, false, false, false],
  quoteNumber: null,
  subTotal: null,
  dateNeeded: null,
  billableSC: null,
};

export default {
  name: "PurchaseOrder",
  data() {
    return {
      routePath: "/purchase-order",
      title: "Purchase Order",
      purchaseOrder: {},
      isReviewing: false,
    };
  },
  components: {
    PurchaseOrderForm,
  },
  watch: {
    "$route.params.id": function (id) {
      this.loadPurchaseOrder(id);
    },
  },
  created() {
    this.loadPurchaseOrder(this.$route.params.id);
  },
  computed: {
    ...mapGetters("purchaseOrders", { purchaseOrderById: "purchaseOrderById" }),
  },
  methods: {
    loadPurchaseOrder(id) {
      let purchaseOrder = this.purchaseOrderById(id);
      if (purchaseOrder) {
        this.purchaseOrder = purchaseOrder;
        this.isReviewing = true;
      } else {
        this.purchaseOrder = defaultPurchaseOrder;
        this.isReviewing = false;
      }
    },
    ...mapActions("purchaseOrders", { savePurchaseOrder: "savePurchaseOrder" }),
    savePurchaseOrder() {
      this.$store.dispatch("savePurchaseOrder", this.purchaseOrder);
    },
  },
};
</script>

<template>
  <div class="content-container">
    <div class="columns is-multiline is-variable">
      <div class="column is-10">
        <PurchaseOrderForm
          :purchaseOrder="purchaseOrder"
          :isReviewing="isReviewing"
          @savePurchaseOrder="savePurchaseOrder"
        />
      </div>
    </div>
  </div>
</template>
