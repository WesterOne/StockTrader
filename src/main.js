import Vue from 'vue'
import App from './App.vue'

// Vue Router
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

// Vuex
import store from './store/store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
