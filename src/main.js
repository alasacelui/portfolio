import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Typewriter from 'vue-typewriter'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Typewriter);

Vue.config.productionTip = false

// assets
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
