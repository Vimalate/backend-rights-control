/*
 * @Author: Vimalakirti
 * @Date: 2020-06-14 21:01:42
 * @LastEditTime: 2020-06-14 21:19:40
 * @Description:
 * @FilePath: \Vue权限控制\初始代码\backend-rights-control\src\utils\permission.js
 */
import Vue from 'vue'
import router from '@/router'
// 自定义指令
Vue.directive('permission', {
  inserted(el, binding) {
    console.log(el)
    console.log(binding)
    const action = binding.value.action
    const effect = binding.value.effect
    console.log(router.currentRoute.meta)
    if (router.currentRoute.meta.indexOf(action) == -1) {
      if (effect === 'disabled') {
        // 元素禁用
        el.disabled = true
        el.classList.add('is-disabled')
      } else {
        el.parentElement.removeChild(el)
      }
    }
  }
})
