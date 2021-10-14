import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts';
import router from './router';
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.mixin({
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    isMD() {
      return this.$vuetify.breakpoint.mdOnly;
    },
  },
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
