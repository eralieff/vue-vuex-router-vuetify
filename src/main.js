import Vue from 'vue';
import router from '@/router';
import axios from 'axios';
import store from '@/store';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
