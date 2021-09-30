<script>
import DatePicker from "../components/date-picker.vue";

export default {
  name: "PurchaseOrderForm",
  props: {
    purchaseOrder: {},
    isReviewing: {},
    assignees: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DatePicker,
  },
  created() {},
  methods: {
    setDateNeeded(date) {
      alert(date);
    },
    savePurchaseOrder() {
      this.$emit("savePurchaseOrder", this.purchaseOrder);
    },
  },
};
</script>

<template>
  <v-form>
    <v-container>
      <v-row v-if="isReviewing">
        <v-col cols="12" sm="3">
          <v-switch v-model="purchaseOrder.complete" label="Complete" />
        </v-col>

        <v-col cols="12" sm="6">
          <v-combobox
            v-model="purchaseOrder.assignedTo"
            :items="assignees"
            label="Assigned To"
            dense
            multiple
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.requestDate"
            label="Request Date"
          />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.requestor"
            label="Requestor"
            required
          />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.vendor"
            label="Vendor"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1" xs="1" v-if="isReviewing">
          <v-switch class="ml-auto" v-model="purchaseOrder.supplied[0]" />
        </v-col>
        <v-col class="col-11" :class="isReviewing ? 'col-sm-3' : 'col-sm-4'">
          <v-text-field v-model="purchaseOrder.supplies[0]" />
        </v-col>

        <v-col cols="1" xs="1" v-if="isReviewing">
          <v-switch v-model="purchaseOrder.supplied[1]" />
        </v-col>
        <v-col class="col-11" :class="isReviewing ? 'col-sm-3' : 'col-sm-4'">
          <v-text-field v-model="purchaseOrder.supplies[1]" />
        </v-col>

        <v-col cols="1" xs="1" v-if="isReviewing">
          <v-switch v-model="purchaseOrder.supplied[2]" />
        </v-col>
        <v-col class="col-11" :class="isReviewing ? 'col-sm-3' : 'col-sm-4'">
          <v-text-field v-model="purchaseOrder.supplies[2]" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1" xs="1" v-if="isReviewing">
          <v-switch v-model="purchaseOrder.supplied[3]" />
        </v-col>
        <v-col class="col-11" :class="isReviewing ? 'col-sm-3' : 'col-sm-4'">
          <v-text-field v-model="purchaseOrder.supplies[3]" />
        </v-col>

        <v-col cols="1" xs="1" v-if="isReviewing">
          <v-switch v-model="purchaseOrder.supplied[4]" />
        </v-col>
        <v-col class="col-11" :class="isReviewing ? 'col-sm-3' : 'col-sm-4'">
          <v-text-field v-model="purchaseOrder.supplies[4]" />
        </v-col>

        <v-col cols="1" xs="1" v-if="isReviewing">
          <v-switch v-model="purchaseOrder.supplied[5]" />
        </v-col>
        <v-col class="col-11" :class="isReviewing ? 'col-sm-3' : 'col-sm-4'">
          <v-text-field v-model="purchaseOrder.supplies[5]" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.quoteNumber"
            label="Quote Number"
            required
          />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.subTotal"
            label="Sub-Total"
            required
          />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.billableSC"
            label="Billable SC"
            required
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker v-model="purchaseOrder.dateNeeded" label="Date Needed" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.poNumber"
            label="PO Number"
            required
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.requestSent"
            label="Request Sent"
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.dateReceived"
            label="Date Received"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <v-textarea
            v-model="purchaseOrder.notes"
            label="Notes"
            auto-grow
            clearable
          />
        </v-col>
      </v-row>

      <v-row>
        <v-btn color="success" class="mr-4" @click="savePurchaseOrder">
          Save
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
