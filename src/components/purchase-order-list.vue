<script>
export default {
  name: "PurchaseOrderList",
  props: {
     purchaseOrders: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  methods: {
    selectPurchaseOrder(purchaseOrder) {
      console.log(`You tried to select ${purchaseOrder.name}`);
      this.$emit("selected", purchaseOrder);
    },

    formattedDate(date) {
      return this.purchaseOrder.requestDate;
    }
  },
  computed: {
  }
};
</script>

<template>
  <div>
    <table class="table is-fullwidth is-striped is-not-bordered is-hoverable">
      <thead>
        <tr>
          <td class="has-text-right">Date Requested</td>
          <td>Requestor</td>
          <td>Vendor</td>
          <td>Description</td>
          <td>Quote</td>
          <td class="has-text-right">Sub-Total</td>
          <td class="has-text-right">Date Needed</td>
          <td>Billable SC</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="purchaseOrder in purchaseOrders" :key="purchaseOrder.id">
          <td class="has-text-right">{{ purchaseOrder.requestDate }}</td>
          <td>{{ purchaseOrder.requestor }}</td>
          <td>{{ purchaseOrder.vendor }}</td>
          <td>{{ purchaseOrder.description }}</td>
          <td>{{ purchaseOrder.quoteNumber }}</td>
          <td class="has-text-right">{{ purchaseOrder.subTotal }}</td>
          <td class="has-text-right">{{ purchaseOrder.dateNeeded }}</td>
          <td>{{ purchaseOrder.billableSC }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
