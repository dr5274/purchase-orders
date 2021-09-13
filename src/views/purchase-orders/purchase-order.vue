<script>
import PurchaseOrderForm from '../../components/purchase-order-form.vue';

export default {
  name: "PurchaseOrder",
  data() {
    return {
      routePath: "/purchase-order",
      title: "New Purchase Order",
    };
  },
  components: {
    PurchaseOrderForm,
  },
  created() {},
  computed: {},
  methods: {
    submitPurchaseOrder() {
      alert("order submitted");
    }
  },
};
</script>

<template>
  <div class="content-container">
    <div class="columns is-multiline is-variable">
      <div class="column is-10">
        <PurchaseOrderForm @submitPurchaseOrder="submitPurchaseOrder" />
      </div>
    </div>
  </div>
</template>
