import Vue from 'vue'
import App from './App.vue'
import router from '../public/router.js'
import Login from './components/login.vue'
import HelloWorld from './components/HelloWorld'
import VueRouter from 'vue-router';
// import VueRouter from 'vue-router';

Vue.config.productionTip = false


const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')