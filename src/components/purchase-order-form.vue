<script>
export default {
  name: "PurchaseOrderForm",
  props: {},
  methods: {
    onSubmit() {
      this.$emit('submitPurchaseOrder');
    }
  },
};
</script>

<template>
  <section class="form">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="field">
          <label class="label">Request Date</label>
          <div class="control">
            <input class="input" type="date" required />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Requestor</label>
          <div class="control">
            <input class="input" type="text" required />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Vendor</label>
          <div class="control">
            <input class="input" type="text" required />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <label class="label">Requested Supplies</label>
        <div class="columns">
          <div class="column is-half">
            <input class="input" type="text" />
          </div>
          <div class="column is-half">
            <input class="input" type="text" />
          </div>
        </div>

        <div class="columns">
          <div class="column is-half">
            <input class="input" type="text" />
          </div>
          <div class="column is-half">
            <input class="input" type="text" />
          </div>
        </div>

        <div class="columns">
          <div class="column is-half">
            <input class="input" type="text" />
          </div>
          <div class="column is-half">
            <input class="input" type="text" />
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-quarter">
        <div class="field">
          <label class="label">Quote Number</label>
          <div class="control">
            <input class="input" type="text" required />
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="field">
          <label class="label">Sub-Total</label>
          <div class="control">
            <input class="input" type="text" required />
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="field">
          <label class="label">Date Needed</label>
          <div class="control">
            <input class="input" type="date" required />
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="field">
          <label class="label">Billable SC</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>
      </div>
    </div>

    <button class="button is-primary is-rounded" v-on:click="onSubmit">Submit</button>
  </section>
</template>
