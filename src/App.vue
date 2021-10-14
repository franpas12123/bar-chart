<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/site_logo.png"
          transition="scale-transition"
          width="40"
        />
        <strong>Black Business Alliance</strong>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="app">
      <Chart />
    </v-main>
  </v-app>
</template>

<script>
import Chart from './components/Chart';

export default {
  name: 'App',

  components: {
    Chart,
  },

  data: () => ({
    items: [
      { title: 'Reports', icon: 'mdi-view-dashboard' },
      { title: 'Business Directory', icon: 'mdi-image' },
      { title: 'Contacts', icon: 'mdi-help-box' },
    ],
    right: null,
  }),
};
</script>

<style>
.app {
  background-color: #ebebeb;
}
.drawer {
  color: white;
  background-color: #363636;
}
.site-logo {
  height: 35px;
  width: auto;
  margin-right: 4px;
}
</style>
