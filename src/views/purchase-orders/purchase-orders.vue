<script>
import { mapGetters } from "vuex";
import PurchaseOrderList from "../../components/purchase-order-list.vue";

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
  <div class="content-container">
    <div class="columns is-multiline is-variable">
      <div class="column is-12" v-if="purchaseOrders">
        <PurchaseOrderList :purchaseOrders="purchaseOrders" />
      </div>
    </div>
  </div>
</template>
