import Vue from 'vue' // SE6 模块导入方式 commonJS var Vue = require("vue")
import App from './App.vue' // var app = require("./App.vue")
import router from './router/index'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
