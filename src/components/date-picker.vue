<script>
export default {
  data() {
    return {
      menu: false,
    };
  },

  props: {
    label: {},
    value: {
      type: String,
      default: null,
    },
    required: {},
  },

  created() {},

  computed: {
    picker: {
      get() {
        return this.value;
      },

      set(val) {
        this.menu = false;
        this.$emit("input", val);
      },
    },
  },

  methods: {
    clearPicker() {
      this.picker = null;
    },

    pickToday() {
      this.picker = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
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
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="picker"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        :rules="[(v) => !!v || 'Value is required']"
      />
    </template>
    <v-date-picker v-model="picker" no-title scrollable>
      <v-btn text color="primary" @click="clearPicker"> Clear </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="pickToday"> Today </v-btn>
    </v-date-picker>
  </v-menu>
</template>
