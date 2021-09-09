<script>
export default {
  name: 'OrderSummary',
  props: {
    requestDate: {
      type: String,
      default: () => '',
    },
    requestor: {
      type: String,
      default: () => '',
    },
    vendor: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<template>
  <div class="card-content">
    <div class="content">
      <div class="name">{{ requestDate }}</div>
      <div class="description">{{ requestor }}</div>
      <div class="description">{{ vendor }}</div>
    </div>
  </div>
</template>
