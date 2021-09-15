<script>
import { mapActions } from "vuex";
import PurchaseOrderForm from "../../components/purchase-order-form.vue";

const defaultPurchaseOrder = {
  requestDate: null,
  requestor: null,
  vendor: null,
  supplies: [null, null, null, null, null, null],
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
      title: "New Purchase Order",
      purchaseOrder: null,
    };
  },
  components: {
    PurchaseOrderForm,
  },
  created() {
    let id = this.$route.params.id;
    if (id) {
      this.purchaseOrder = this.$store.dispatch("getPurchaseOrder", id);
    } else {
      this.purchaseOrder = defaultPurchaseOrder;
    }
    console.log(id);
    this.purchaseOrder = defaultPurchaseOrder;
  },
  computed: {},
  methods: {
    ...mapActions("purchaseOrders", ["putPurchaseOrdersAction"]),
    addPurchaseOrder() {
      // this.putPurchaseOrdersAction();
      this.$store.dispatch("addPurchaseOrder");
      this.data.purchaseOrder = defaultPurchaseOrder;
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
          @submitPurchaseOrder="addPurchaseOrder"
        />
      </div>
    </div>
  </div>
</template>
