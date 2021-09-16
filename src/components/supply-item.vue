<script>
export default {
  name: "Supply",
  props: {
    purchaseOrder: {},
    isReviewing: {},
    supplies: {},
    supplied: {}
  },
};
</script>

<template>
  <div class="columns">
    <div v-if="isReviewing" class="column is-1">
      <input
        v-if="isReviewing"
        class="checkbox"
        type="checkbox"
        v-model="supplied"
      />
    </div>
    <div class="column" :class="isReviewing ? 'is-11' : 'is-12'">
      <input class="input" type="text" v-model="supplies" />
    </div>
  </div>
</template>
