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

  methods: {
    onSaveChanges() {
      this.$emit("onSaveChanges", this.purchaseOrder);
    },

    onCancelChanges() {
      this.$emit("onCancelChanges", this.purchaseOrder);
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
            chips
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="purchaseOrder.requestor"
            label="Requestor"
            required
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.requestDate"
            label="Request Date"
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker v-model="purchaseOrder.dateNeeded" label="Date Needed" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="purchaseOrder.vendor"
            label="Vendor"
            required
          />
        </v-col>

        <v-col v-if="isReviewing" cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.requestSent"
            label="Requisition Sent"
          />
        </v-col>

        <v-col v-if="isReviewing" cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.dateReceived"
            label="Date Received"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[0]">
            <template v-slot:label>
              <v-text-field v-model="purchaseOrder.supplies[0]" />
            </template>
          </v-switch>
          <v-text-field v-else v-model="purchaseOrder.supplies[0]" />
        </v-col>

        <v-col cols="12" sm="4">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[1]">
            <template v-slot:label>
              <v-text-field v-model="purchaseOrder.supplies[1]" />
            </template>
          </v-switch>
          <v-text-field v-else v-model="purchaseOrder.supplies[1]" />
        </v-col>

        <v-col cols="12" sm="4">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[2]">
            <template v-slot:label>
              <v-text-field v-model="purchaseOrder.supplies[2]" />
            </template>
          </v-switch>
          <v-text-field v-else v-model="purchaseOrder.supplies[2]" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[3]">
            <template v-slot:label>
              <v-text-field v-model="purchaseOrder.supplies[3]" />
            </template>
          </v-switch>
          <v-text-field v-else v-model="purchaseOrder.supplies[3]" />
        </v-col>

        <v-col cols="12" sm="4">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[4]">
            <template v-slot:label>
              <v-text-field v-model="purchaseOrder.supplies[4]" />
            </template>
          </v-switch>
          <v-text-field v-else v-model="purchaseOrder.supplies[4]" />
        </v-col>

        <v-col cols="12" sm="4">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[5]">
            <template v-slot:label>
              <v-text-field v-model="purchaseOrder.supplies[5]" />
            </template>
          </v-switch>
          <v-text-field v-else v-model="purchaseOrder.supplies[5]" />
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
            v-model="purchaseOrder.poNumber"
            label="PO Number"
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
          <v-text-field
            v-model="purchaseOrder.subTotal"
            label="Sub-Total"
            required
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <v-textarea
            v-model="purchaseOrder.notes"
            label="Notes"
            outlined
            auto-grow
            clearable
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <v-btn color="primary" class="mr-4" @click="onSaveChanges">
            Save
          </v-btn>
          <v-btn v-if="isReviewing" class="mr-4" @click="onCancelChanges">
            Cancel
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
