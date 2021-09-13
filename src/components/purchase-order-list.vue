<script>
import PurchaseOrderListItem from '@/components/purchase-order-list-item.vue';

export default {
  name: 'PurchaseOrderList',
  props: {
    purchaseOrders: {
      type: Array,
      default: () => [],
    },
  },
  components: { PurchaseOrderListItem },
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
          <PurchaseOrderListItem :purchaseOrder="purchaseOrder" />
        </div>
      </li>
    </ul>
  </div>
</template>
