<script>
import {
  _getPurchaseOrders,
  _deletePurchaseOrder,
} from "../data-access/purchase-orders";

export default {
  name: "PurchaseOrders",

  data() {
    return {
      routePath: "/purchase-orders",
      title: "Purchase Orders",
      isLoading: true,
      purchaseOrders: [],
      showCompleted: false,
      search: "",
      headers: [
        {
          text: "Complete",
          value: "complete",
          width: "90px",
          align: "center",
          sortable: false,
        },
        { text: "Assigned To", value: "assignedToFormatted" },
        { text: "Date Requested", value: "requestDateFormatted" },
        { text: "Date Needed", value: "dateNeededFormatted" },
        { text: "Requestor", value: "requestor" },
        { text: "Vendor", value: "vendor" },
        { text: "Supplies", value: "suppliesFormatted" },
        { text: "Quote", value: "quoteNumber", showIf: "lgAndUp" },
        { text: "SubTotal", value: "subTotalFormatted", showIf: "lgAndUp" },
        { text: "Billable SC", value: "billableSC", showIf: "lgAndUp" },
        { text: "Notes", value: "notes", showIf: "lgAndUp" },
        { text: "Actions", value: "_id", sortable: false },
      ],
    };
  },

  created() {
    _getPurchaseOrders().then((res) => {
      this.purchaseOrders = res.map((purchaseOrder) => {
        return purchaseOrder;
      });
      this.isLoading = false;
    });
  },

  computed: {
    filteredHeaders() {
      return this.headers.filter(
        (header) => !header.showIf || this.$vuetify.breakpoint[header.showIf]
      );
    },

    filteredPurchaseOrders() {
      return this.purchaseOrders.filter(
        (po) => !po.complete || this.showCompleted
      );
    },
  },

  methods: {
    editPurchaseOrder(id) {
      this.$router.push({ name: "purchase-order", params: { id: id } });
    },

    deletePurchaseOrder(id) {
      if (confirm("Are you sure you want to delete this purchase order?")) {
        _deletePurchaseOrder(id)
          .then((res) => {
            _getPurchaseOrders().then((res) => {
              this.purchaseOrders = res;
            });
          })
          .catch((error) => {});
      }
    },
  },
};
</script>

<template>
  <v-data-table
    dense
    :headers="filteredHeaders"
    :items="filteredPurchaseOrders"
    :search="search"
    item-key="_id"
    :sort-by="['dateNeededFormatted']"
    :sort-desc="[false]"
    :items-per-page="10"
    :loading="isLoading"
    loading-text="Loading..."
  >
    <template v-slot:top>
      <v-row>
        <v-col cols="12" sm="4">
          <v-switch v-model="showCompleted" label="Show Completed" />
        </v-col>
        <v-col cols="12" offset="3" sm="5">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            clearable
            label="Search"
          />
        </v-col>
      </v-row>
    </template>

    <template v-slot:[`item.complete`]="{ item }">
      <v-simple-checkbox v-model="item.complete" disabled />
    </template>

    <template v-slot:[`item._id`]="{ item }">
      <v-icon small @click="editPurchaseOrder(item._id)">mdi-pencil</v-icon>
      <span>&nbsp;</span>
      <v-icon small @click="deletePurchaseOrder(item._id)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>
