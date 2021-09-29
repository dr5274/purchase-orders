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
        { text: "Actions", value: "_id", sortable: false },
      ],
      dialog: false,
    };
  },
  components: {},
  methods: {
    editPurchaseOrder(id) {
      this.$router.push({ name: "purchase-order", params: { id: id } });
    },
    deletePurchaseOrder(id) {
      this.dialog = false;
      this.$emit("deletePurchaseOrder", id);
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
      item-key="_id"
      multi-sort
      :sort-by="['dateNeededFormatted']"
      :sort-desc="[false]"
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

      <template v-slot:[`item._id`]="{ item }">
        <v-icon small @click="editPurchaseOrder(item._id)">mdi-pencil</v-icon>
        <span>&nbsp;</span>
        <v-dialog v-model="dialog" width="400">
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
              <v-btn color="secondary" text @click="dialog = false"> No </v-btn>
              <v-btn color="primary" text @click="deletePurchaseOrder(item._id)">
                Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
  </div>
</template>
