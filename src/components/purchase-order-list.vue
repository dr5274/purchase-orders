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
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          class="mx-4"
        />
      </template>
    </v-data-table>

    <!-- <v-simple-table>
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
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="purchaseOrder in purchaseOrders" :key="purchaseOrder.id">
          <td class="has-text-right">
            {{ purchaseOrder.requestDateFormatted }}
          </td>
          <td>{{ purchaseOrder.requestor }}</td>
          <td>{{ purchaseOrder.vendor }}</td>
          <td>{{ purchaseOrder.description }}</td>
          <td>{{ purchaseOrder.quoteNumber }}</td>
          <td class="has-text-right">{{ purchaseOrder.subTotalFormatted }}</td>
          <td class="has-text-right">
            {{ purchaseOrder.dateNeededFormatted }}
          </td>
          <td>{{ purchaseOrder.billableSC }}</td>
          <td>
            <router-link
              :to="{ name: 'purchase-order', params: { id: purchaseOrder.id } }"
            >
              <span class="icon">
                <i class="far fa-edit"></i>
              </span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </v-simple-table> -->
  </div>
</template>
