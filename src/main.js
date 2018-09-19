// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import store from './store'
import router from './router'
import 'bulma/bulma.sass'

import { sync } from 'vuex-router-sync'
const unsync = sync(store, router)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
