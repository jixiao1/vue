//console.log('ok')
//import Vue from 'vue.js'
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】

// var login = {
//   template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }


// 1. 导入 login 组件
import login from './login.vue'
// 默认，webpack 无法打包 .vue 文件，需要安装 相关的loader： 
//  cnpm i vue-loader vue-template-compiler -D
//  在配置文件中，新增loader哦配置项 { test:/\.vue$/, use: 'vue-loader' }

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // components: {
  //   login
  // }
  /* render: function (createElements) { // 在 webpack 中，如果想要通过 vue， 把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现
    return createElements(login)
  }*/
    render: c => c(login)
  })
/*import m222 from './test.js'
console.log(m222)*/
import m1 ,{title,content} from './test.js'
console.log(m1)
console.log(title+"----"+content)

