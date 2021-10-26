<script>
import {
  _getPurchaseOrders,
  _deletePurchaseOrder,
} from "../api/purchase-orders";

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
        { text: "Actions", value: "_id", sortable: false, width: "120px" },
      ],
      exportFields: [
        { property: "complete", column: "Complete" },
        { property: "assignedToFormatted", column: "Assigned To" },
        { property: "requestor", column: "Requestor" },
        { property: "requestDateFormatted", column: "Date Requested" },
        { property: "dateNeededFormatted", column: "Date Needed" },
        { property: "vendor", column: "Vendor" },
        { property: "requestSentFormatted", column: "Requisition Sent" },
        { property: "dateReceivedFormatted", column: "Date Received" },
        { property: "supplies.0", column: "Supplies 1" },
        { property: "supplied.0", column: "Supplied 1" },
        { property: "supplies.1", column: "Supplies 2" },
        { property: "supplied.1", column: "Supplied 2" },
        { property: "supplies.2", column: "Supplies 3" },
        { property: "supplied.2", column: "Supplied 3" },
        { property: "supplies.3", column: "Supplies 4" },
        { property: "supplied.3", column: "Supplied 4" },
        { property: "supplies.4", column: "Supplies 5" },
        { property: "supplied.4", column: "Supplied 5" },
        { property: "supplies.5", column: "Supplies 6" },
        { property: "supplied.5", column: "Supplied 6" },
        { property: "dateReceivedFormatted", column: "Date Received" },
        { property: "quoteNumber", column: "Quote Number" },
        { property: "poNumber", column: "PO Number" },
        { property: "subTotal", column: "SubTotal" },
        { property: "billable", column: "Billable" },
        { property: "scNumber", column: "SC Number" },
        { property: "notes", column: "Notes" },
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

    downloadCSV() {
      let download = window.prompt("Save downloaded file as:");
      if (download) {
        let csv =
          this.exportFields.map((field) => '"' + field.column + '"').join(",") +
          "\n";
        this.purchaseOrders.map((po) => {
          csv +=
            this.exportFields
              .map((field) => {
                if (field.property.includes(".")) {
                  let split = field.property.split(".");
                  let property = split[0];
                  let index = split[1];
                  return '"' + po[property][index] + '"';
                } else {
                  return '"' + po[field.property] + '"';
                }
              })
              .join(",") + "\n";
        });

        const anchor = document.createElement("a");
        anchor.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
        anchor.target = "_blank";
        anchor.download = download;
        anchor.click();
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

    <template v-slot:[`header._id`]="{}">
      Actions
      <span>&nbsp;</span>
      <v-icon dense @click="downloadCSV()">mdi-download</v-icon>
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
