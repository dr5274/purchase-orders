<script>
import OrderSummary from '@/components/order-summary.vue';

export default {
  name: 'PurchaseOrderList',
  props: {
    purchaseOrders: {
      type: Array,
      default: () => [],
    },
  },
  components: { OrderSummary },
  methods: {
    selectPurchaseOrder(purchaseOrder) {
      console.log(`You tried to select ${purchaseOrder.name}`);
      this.$emit('selected', purchaseOrder);
    },
  },
};
</script>

<template>
  <div>
    <div v-if="!purchaseOrders.length">Loading data ...</div>
    <ul class="list">
      <li
        v-for="purchaseOrder in purchaseOrders"
        :key="purchaseOrder.id"
        role="presentation"
      >
        <div class="card">
          <OrderSummary
            :requestDate="purchaseOrder.requestDate"
            :requestor="purchaseOrder.requestor"
            :vendor="purchaseOrder.vendor"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
