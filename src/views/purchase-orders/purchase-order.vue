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
  methods: {},
};
</script>

<template>
  <div class="content-container">
    <!-- <div class="content-title-group">
      <h2 class="title">{{ title }}</h2>
    </div> -->

    <div class="columns is-multiline is-variable">
      <div class="column is-10">
        <PurchaseOrderForm></PurchaseOrderForm>
      </div>
    </div>
  </div>
</template>
