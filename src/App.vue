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
          @click="$router.push('chartv1')"
        />
        <strong v-if="!isMobile()">Black Business Alliance</strong>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push({ name: 'chartv1' })" target="_blank" text>
        <v-icon>mdi-poll</v-icon>
        <span class="ml-2">V1 <span v-if="!isMobile()">Chart</span></span>
      </v-btn>
      <v-btn @click="$router.push({ name: 'chartv2' })" target="_blank" text>
        <v-icon>mdi-poll</v-icon>
        <span class="ml-2">V2 <span v-if="!isMobile()">Chart</span></span>
      </v-btn>
    </v-app-bar>
    <v-main class="app">
      <v-container fill-height fluid>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'App',
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
