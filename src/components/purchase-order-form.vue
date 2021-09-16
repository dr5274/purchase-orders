<script>
import SupplyItem from "../components/supply-item.vue";

export default {
  name: "PurchaseOrderForm",
  props: {
    purchaseOrder: {},
    isReviewing: {},
  },
  components: {
    SupplyItem,
  },
  methods: {
    onSave() {
      this.$emit("savePurchaseOrder", this.purchaseOrder);
    },
  },
};
</script>

<template>
  <section class="form">
    <div class="columns">
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Request Date</label>
          <div class="control">
            <input
              class="input"
              type="date"
              v-model="purchaseOrder.requestDate"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Requestor</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="purchaseOrder.requestor"
              required
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Vendor</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="purchaseOrder.vendor"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <label class="label">Requested Supplies</label>
        <div class="columns">
          <div class="column is-half">
            <SupplyItem
              :purchaseOrder="purchaseOrder"
              :isReviewing="isReviewing"
              :supplies="purchaseOrder.supplies[0]"
              :supplied="purchaseOrder.supplied[0]"
            />
          </div>
          <div class="column is-half">
            <SupplyItem
              :purchaseOrder="purchaseOrder"
              :isReviewing="isReviewing"
              :supplies="purchaseOrder.supplies[1]"
              :supplied="purchaseOrder.supplied[1]"
            />
          </div>
        </div>

        <div class="columns">
          <div class="column is-half">
            <SupplyItem
              :purchaseOrder="purchaseOrder"
              :isReviewing="isReviewing"
              :supplies="purchaseOrder.supplies[2]"
              :supplied="purchaseOrder.supplied[2]"
            />
          </div>
          <div class="column is-half">
            <SupplyItem
              :purchaseOrder="purchaseOrder"
              :isReviewing="isReviewing"
              :supplies="purchaseOrder.supplies[3]"
              :supplied="purchaseOrder.supplied[3]"
            />
          </div>
        </div>

        <div class="columns">
          <div class="column is-half">
            <SupplyItem
              :purchaseOrder="purchaseOrder"
              :isReviewing="isReviewing"
              :supplies="purchaseOrder.supplies[4]"
              :supplied="purchaseOrder.supplied[4]"
            />
          </div>
          <div class="column is-half">
            <SupplyItem
              :purchaseOrder="purchaseOrder"
              :isReviewing="isReviewing"
              :supplies="purchaseOrder.supplies[5]"
              :supplied="purchaseOrder.supplied[5]"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Quote Number</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="purchaseOrder.quoteNumber"
              required
            />
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Sub-Total</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="purchaseOrder.subTotal"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Date Needed</label>
          <div class="control">
            <input
              class="input"
              type="date"
              v-model="purchaseOrder.dateNeeded"
              required
            />
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Billable SC</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="purchaseOrder.billableSC"
            />
          </div>
        </div>
      </div>
    </div>

    <button class="button is-primary is-rounded" v-on:click="onSave">
      Save
    </button>
  </section>
</template>
