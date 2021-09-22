<script>
export default {
  data() {
    return {
      datePickerExpanded: false,
      content: this.value,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  created() {},
  methods: {
    showDatePicker() {
      setTimeout(() => {
        if (!this.datePickerExpanded) {
          this.datePickerExpanded = true;
        }
      }, 200);
    },
    hideDatePicker(value) {
      setTimeout(() => {
        if (this.datePickerExpanded) {
          this.datePickerExpanded = false;
        }
      }, 200);
    },
    setValueToToday() {
      this.content = new Date().toISOString().substring(0, 10);
    },
  },
};
</script>

<template>
  <v-menu
    v-model="datePickerExpanded"
    :nudge-right="20"
    transition="scale-transition"
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="label"
        prepend-inner-icon="mdi-calendar"
        hide-details
        v-model="content"
        v-on="on"
        @focus="showDatePicker"
        @blur="hideDatePicker"
      />
    </template>
    <v-date-picker v-model="content" no-title @input="hideDatePicker">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="setValueToToday"> Today </v-btn>
    </v-date-picker>
  </v-menu>
</template>
