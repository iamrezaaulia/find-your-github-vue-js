import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-router/dist/vue-router.js'

import App from './App.vue'
import routes from './routes.js'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
