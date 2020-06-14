/*
 * @Author: Vimalakirti
 * @Date: 2020-06-14 17:04:07
 * @LastEditTime: 2020-06-14 21:06:25
 * @Description:
 * @FilePath: \Vue权限控制\初始代码\backend-rights-control\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import './utils/http.js'
import './utils/dateformat.js'
import './utils/permission'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
