import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false;
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount('#app');
