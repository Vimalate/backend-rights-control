/*
 * @Author: Vimalakirti
 * @Date: 2020-06-14 17:04:07
 * @LastEditTime: 2020-06-14 21:43:15
 * @Description:
 * @FilePath: \Vue权限控制\初始代码\backend-rights-control\src\utils\http.js
 */
import axios from 'axios'
import Vue from 'vue'
import router from '@/router'
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

const actionMapping = {
  'get': 'view',
  'post': 'add',
  'put': 'edit',
  'delete': 'delete'
}
axios.interceptors.request.use(req => {
  if (req.url !== 'login') {
    // 不是登录，加上token
    req.headers.Authorization = sessionStorage.getItem('token')
    // 当前请求发起方式对应的可操作权限
    const action = actionMapping[req.method]
    // 非范围内请求
    const right = router.currentRoute.meta
    if (right && right.indexOf(action) === -1) {
      // 没有权限
      alert('没有权限')
      return Promise.reject(new Error('没有权限'))
    }
    // 判断当前请求的行为
    // restful风格请求
    // get view
    // post add
    // put edit
    // delete delete
  }
  return req
})
