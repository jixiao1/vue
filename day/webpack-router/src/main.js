import Vue from 'vue'
 //1.导入Vue-router包
 import VueRouter from 'vue-router'
 //2.手动安装VueRouter
 Vue.use(VueRouter);

//导入app 组件
 import  app from './App.vue'
 // 导入 自定义路由模块
import router from './router.js'
 
 var vm=new Vue({
 	  el:'#app',
 	  render:c => c(app),
 	  router
 })
