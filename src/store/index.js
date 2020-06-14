/*
 * @Author: Vimalakirti
 * @Date: 2020-06-14 17:04:07
 * @LastEditTime: 2020-06-14 19:53:54
 * @Description:
 * @FilePath: \Vue权限控制\初始代码\backend-rights-control\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    username: sessionStorage.getItem('username') || ''
  },
  mutations: {
    setRightList(state, data) {
      state.rightList = data
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    setUsername(state, data) {
      state.username = data
      sessionStorage.setItem('username', data)
    }
  },
  actions: {
  },
  getters: {
  }
})
