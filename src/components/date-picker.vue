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
    default: {},
    today: {},
    asap: {},
    noRush: {},
    required: {},
  },

  created() {
    if (this.default === "now") {
      this.picker = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
    }
  },

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
    _required(value) {
      return !this.required || value === null || !!value || "Value is required";
    },

    pick(date) {
      let value;
      switch (date) {
        case "today":
          this.picker = new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          )
            .toISOString()
            .substr(0, 10);
          break;
        case "asap":
          this.picker = "ASAP";
          break;
        case "noRush":
          this.picker = "No Rush";
          break;
      }
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
        :rules="[_required]"
      />
    </template>
    <v-date-picker v-model="picker" no-title scrollable>
      <v-btn v-if="today" text color="primary" @click="pick('today')">
        Today
      </v-btn>
      <v-spacer v-if="today"></v-spacer>
      <v-btn v-if="asap" text color="primary" @click="pick('asap')">
        ASAP
      </v-btn>
      <v-spacer v-if="asap"></v-spacer>
      <v-btn v-if="noRush" text color="primary" @click="pick('noRush')">
        No Rush
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>
