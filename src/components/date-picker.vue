<script>
export default {
  // data: (vm) => ({
  //   date: this.value
  //     ? this.formatDate(this.value)
  //     : new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  //         .toISOString()
  //         .substr(0, 10),
  //   // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  //   //   .toISOString()
  //   //   .substr(0, 10),
  //   // dateFormatted: vm.formatDate(
  //   //   new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
  //   //     .toISOString()
  //   //     .substr(0, 10)
  //   // ),
  //   // date1: new Date(this.value)
  //   //   .toISOString()
  //   //   .substr(0, 10),
  //   // dateFormatted1: vm.formatDate(
  //   //   new Date(this.value)
  //   //     .toISOString()
  //   //     .substr(0, 10)
  //   // ),
  //   menu: false,
  // }),
  data(vm) {
    let date = this.value
      ? vm.formatDate(this.value)
      : new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10);
    return {
      menu: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
  props: {
    label: {},
    value: {},
  },
  created() {},
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    setValueToToday() {
      this.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    },
  },
};
</script>

<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="computedDateFormatted"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-btn text color="primary" @click="setValueToToday"> Today </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>
