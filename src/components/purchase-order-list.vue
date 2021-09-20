<script>
export default {
  name: "PurchaseOrderList",
  props: {
    purchaseOrders: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Date Requested", value: "requestDateFormatted" },
        { text: "Requestor", value: "requestor" },
        { text: "Vendor", value: "vendor" },
        { text: "Description", value: "description" },
        { text: "Quote", value: "quoteNumber" },
        { text: "SubTotal", value: "subTotalFormatted" },
        { text: "Date Needed", value: "dateNeededFormatted" },
        { text: "Billable SC", value: "billableSC" },
      ],
    };
  },
  components: {},
  methods: {
    selectPurchaseOrder(purchaseOrder) {
      console.log(`You tried to select ${purchaseOrder.name}`);
      this.$emit("selected", purchaseOrder);
    },

    formattedDate(date) {
      return this.purchaseOrder.requestDate;
    },
  },
  computed: {},
};
</script>

<template>
  <div>
    <v-data-table
      dense
      :search="search"
      :headers="headers"
      :items="purchaseOrders"
      item-key="id"
      :items-per-page="10"
    >
      <template v-slot:top>
        <v-row>
          <v-col cols="12" offset="7" sm="5">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              clearable
              label="Search"
            />
          </v-col>
        </v-row>
      </template>
    </v-data-table>
  </div>
</template>
