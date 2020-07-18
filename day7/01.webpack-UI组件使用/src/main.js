import Vue from 'vue'
 //1.导入Vue-router包
 import VueRouter from 'vue-router'
 //2.手动安装VueRouter
 Vue.use(VueRouter);
 //导入bootstrap
 import 'bootstrap/dist/css/bootstrap.css'
 //导入mui
 import './lib/mui/css/mui.min.css'
  //导入所有的Mint-UI组件
  //导入Mint-UI
  import MintUI from 'mint-ui'
  
  import 'mint-ui/lib/style.css'
  import './css/app.css'
  
  Vue.use(MintUI)
//导入app 组件
 import  app from './App.vue'
 // 导入 自定义路由模块
import router from './router.js'
 
 var vm=new Vue({
 	  el:'#app',
 	  render:c => c(app),
 	  router
 })
