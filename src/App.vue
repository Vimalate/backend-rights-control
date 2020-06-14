<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-14 17:04:07
 * @LastEditTime: 2020-06-14 20:45:36
 * @Description:
 * @FilePath: \Vue权限控制\初始代码\backend-rights-control\src\App.vue
-->
<template>
  <div id="app">
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { initDynamicRoutes } from '@/router'
export default {
  name: 'app',
  // 动态添加路由，防止刷新后显示错误
  created() {
    initDynamicRoutes()
  }
}
</script>

<style>
</style>
