<script>
export default {
  name: 'PurchaseOrderListItem',
  props: {
    purchaseOrder: {
    },
  },
};
</script>

<template>
  <div class="card-content">
    <div class="content">
      <div class="name">{{ purchaseOrder.requestDate }}</div>
      <div class="description">{{ purchaseOrder.requestor }}</div>
      <div class="description">{{ purchaseOrder.vendor }}</div>
    </div>
  </div>
</template>
