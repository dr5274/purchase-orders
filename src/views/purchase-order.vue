<script>
import DatePicker from "../components/date-picker.vue";
import {
  _getPurchaseOrder,
  _savePurchaseOrder,
  _defaultPurchaseOrder,
} from "../data-access/purchase-orders";

export default {
  name: "PurchaseOrder",

  data() {
    return {
      routePath: "/purchase-order",
      title: "Purchase Order",
      purchaseOrder: _defaultPurchaseOrder,
      assignees: ["Amanda", "Lelana"],
      isValid: true,
    };
  },

  created() {
    _getPurchaseOrder(this.$route.params.id).then((res) => {
      this.purchaseOrder = res;
    });
  },

  watch: {
    "$route.params.id": function (id) {
      this.$refs.form.reset();
      _getPurchaseOrder(id).then((res) => {
        this.purchaseOrder = res;
      });
    },
  },

  components: {
    DatePicker,
  },

  computed: {
    isInvalid() {
      return !this.isValid;
    },

    isReviewing() {
      return this.purchaseOrder && this.purchaseOrder._id !== null;
    },
  },

  methods: {
    _required(value) {
      let hasValue = Array.isArray(value) ? value.length > 0 : !!value;
      return hasValue || "Value is required";
    },
    _requiredIfBillable(value) {
      return !this.purchaseOrder.billable || !!value || "Value is required";
    },

    onSaveChanges() {
      this.isValid = this.$refs.form.validate();
      if (this.isValid) {
        _savePurchaseOrder(this.purchaseOrder)
          .then((res) => {
            if (this.isReviewing) {
              this.$router.push({ name: "purchase-orders" });
            } else {
              if (!alert("The purchase order has been saved.")) {
                this.$refs.form.reset();
              }
            }
          })
          .catch((error) => {
            alert(error);
          });
      }
    },

    onCancelChanges() {
      this.$router.push({ name: "purchase-orders" });
    },
  },
};
</script>

<template>
  <v-form ref="form" v-model="isValid" lazy-validation>
    <div v-if="isInvalid" class="text-center">
      <v-chip v-if="isInvalid" class="ma-2" color="red" text-color="white">
        <v-avatar left>
          <v-icon small> mdi-alert </v-icon>
        </v-avatar>
        Some required values are missing. Please correct these inputs before
        saving.
      </v-chip>
    </div>

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
            :rules="[_required]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="purchaseOrder.requestor"
            label="Requestor"
            :rules="[_required]"
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.requestDate"
            label="Request Date"
            required="true"
          />
        </v-col>

        <v-col cols="12" sm="3">
          <DatePicker
            v-model="purchaseOrder.dateNeeded"
            label="Date Needed"
            required="true"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="purchaseOrder.vendor"
            label="Vendor"
            :rules="[_required]"
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
        <v-col cols="12" sm="4" class="switch-container">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[0]" />
          <v-text-field
            v-model="purchaseOrder.supplies[0]"
            :rules="[_required]"
          />
        </v-col>

        <v-col cols="12" sm="4" class="switch-container">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[1]" />
          <v-text-field v-model="purchaseOrder.supplies[1]" />
        </v-col>

        <v-col cols="12" sm="4" class="switch-container">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[2]" />
          <v-text-field v-model="purchaseOrder.supplies[2]" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4" class="switch-container">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[3]" />
          <v-text-field v-model="purchaseOrder.supplies[3]" />
        </v-col>

        <v-col cols="12" sm="4" class="switch-container">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[4]" />
          <v-text-field v-model="purchaseOrder.supplies[4]" />
        </v-col>

        <v-col cols="12" sm="4" class="switch-container">
          <v-switch v-if="isReviewing" v-model="purchaseOrder.supplied[5]" />
          <v-text-field v-model="purchaseOrder.supplies[5]" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="purchaseOrder.quoteNumber"
            label="Quote Number"
          />
        </v-col>

        <v-col v-if="isReviewing" cols="12" sm="3">
          <v-text-field v-model="purchaseOrder.poNumber" label="PO Number" />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field v-model="purchaseOrder.subTotal" label="Sub-Total" />
        </v-col>

        <v-col cols="12" sm="3" class="switch-container">
          <v-switch v-model="purchaseOrder.billable" />
          <v-text-field
            v-model="purchaseOrder.scNumber"
            label="Billable SC Number"
            :rules="[_requiredIfBillable]"
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
