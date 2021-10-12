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
      purchaseOrder: _defaultPurchaseOrder,
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
    onSaveChanges(purchaseOrder) {
      _savePurchaseOrder(purchaseOrder)
        .then((res) => {
          if (this.isReviewing) {
            this.$router.push({ name: "purchase-orders" });
          } else {
            if (!alert("The purchase order has been saved.")) {
              this.$router.go(); // reload new order
            }
          }
        })
        .catch((error) => {
          alert(error);
        });
    },

    onCancelChanges() {
      this.$router.push({ name: "purchase-orders" });
    },
  },
};
</script>

<template>
  <div>
    <PurchaseOrderForm
      :purchaseOrder="purchaseOrder"
      :assignees="assignees"
      :isReviewing="isReviewing"
      @onSaveChanges="onSaveChanges"
      @onCancelChanges="onCancelChanges"
    />
  </div>
</template>
