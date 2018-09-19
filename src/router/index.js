import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    // 望みのポジションを返す
  }
})
