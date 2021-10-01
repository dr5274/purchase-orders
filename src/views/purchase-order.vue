<script>
import {
  _getPurchaseOrder,
  _savePurchaseOrder,
  _defaultPurchaseOrder,
} from "../data-access/purchase-orders";
import PurchaseOrderForm from "../components/purchase-order-form.vue";

export default {
  name: "PurchaseOrder",
  data() {
    return {
      routePath: "/purchase-order",
      title: "Purchase Order",
      purchaseOrder: {
        requestDate: "1960-09-01",
        supplies: ["", "", "", "", "", ""],
        supplied: [false, false, false, false, false, false],
      },
      assignees: ["Amanda", "Lelana"],
    };
  },
  created() {
    _getPurchaseOrder(this.$route.params.id).then((res) => {
      this.purchaseOrder = res;
    });
  },
  watch: {
    "$route.params.id": function (id) {
      _getPurchaseOrder(id).then((res) => {
        this.purchaseOrder = res;
      });
    },
  },
  components: {
    PurchaseOrderForm,
  },
  computed: {
    isReviewing() {
      return this.purchaseOrder && this.purchaseOrder._id !== null;
    },
  },
  methods: {
    savePurchaseOrder(purchaseOrder) {
      _savePurchaseOrder(purchaseOrder);
    },
  },
};
</script>

<template>
  <PurchaseOrderForm
    :purchaseOrder="purchaseOrder"
    :assignees="assignees"
    :isReviewing="isReviewing"
    @savePurchaseOrder="savePurchaseOrder"
  />
</template>
