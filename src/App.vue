<template>
  <v-app app>
    <v-app-bar absolute dense>
      <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
      <span class="text-caption font-italic"> &nbsp;{{ appVersion }} </span>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { version } from "../package.json";

export default {
  name: "App",
  data() {
    return {
      appTitle: "Purchase Orders",
      appVersion: "v(" + version + ")",
      menuItems: [
        { title: "New Order", path: "/purchase-order" },
        { title: "Orders", path: "/purchase-orders" },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  margin: 50px 10px 0 10px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.v-input--selection-controls {
  padding-top: 0 !important;
}

.v-input--switch .v-label .v-input {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
</style>
