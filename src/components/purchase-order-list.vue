<script>
export default {
  name: "PurchaseOrderList",

  props: {
    isLoading: {},
    purchaseOrders: {
      type: Array,
      default: () => [],
    },
    showComplete: {},
  },

  data() {
    return {
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
        { text: "Requestor", value: "requestor" },
        { text: "Vendor", value: "vendor" },
        { text: "Supplies", value: "suppliesFormatted" },
        { text: "Quote", value: "quoteNumber" },
        { text: "SubTotal", value: "subTotalFormatted" },
        { text: "Date Needed", value: "dateNeededFormatted" },
        { text: "Billable SC", value: "billableSC" },
        { text: "Notes", value: "notes" },
        { text: "Actions", value: "_id", sortable: false },
      ],
      deleteConfirmation: false,
    };
  },

  components: {},

  methods: {
    itemClass(purchaseOrder) {
      return purchaseOrder.complete ? "is-complete" : "";
    },

    editPurchaseOrder(id) {
      this.$router.push({ name: "purchase-order", params: { id: id } });
    },

    deletePurchaseOrder(id) {
      this.deleteConfirmation = false;
      this.$emit("deletePurchaseOrder", id);
    },
  },

  computed: {
    filteredPurchaseOrders() {
      return this.purchaseOrders.filter(
        (po) => !po.complete || this.showCompleted
      );
    },
  },
};
</script>

<template>
  <div>
    <v-data-table
      dense
      :search="search"
      :headers="headers"
      :items="filteredPurchaseOrders"
      item-key="_id"
      :item-class="itemClass"
      multi-sort
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
        <v-icon v-if="item.complete" small> mdi-checkbox-marked-outline </v-icon>
        <v-icon v-else small> mdi-checkbox-blank-outline </v-icon>
      </template>

      <template v-slot:[`item._id`]="{ item }">
        <v-icon small @click="editPurchaseOrder(item._id)">mdi-pencil</v-icon>
        <span>&nbsp;</span>
        <v-dialog v-model="deleteConfirmation" width="400">
          <template v-slot:activator="{ on }">
            <v-icon small v-on="on">mdi-delete</v-icon>
          </template>
          <v-card>
            <v-card-title class="grey lighten-2"> Delete </v-card-title>
            <v-card-text>
              Are you sure you want to delete this purchase order?
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" text @click="deleteConfirmation = false">
                No
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="deletePurchaseOrder(item._id)"
              >
                Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
  </div>
</template>
