import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts';
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.mixin({
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app');
