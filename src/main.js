// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons/iconfont/material-icons.css';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.min';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
