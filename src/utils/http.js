/*
 * @Author: Vimalakirti
 * @Date: 2020-06-14 17:04:07
 * @LastEditTime: 2020-06-14 21:28:40
 * @Description:
 * @FilePath: \Vue权限控制\初始代码\backend-rights-control\src\utils\http.js
 */
import axios from 'axios'
import Vue from 'vue'
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
axios.interceptors.request.use(req => {
  if (req.url !== 'login') {
    // 不是登录，加上token
    req.headers.Authorization = sessionStorage.getItem('token')
  }
  return req
})
