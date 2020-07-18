// 由于 webpack 是基于Node进行构建的，所有，webpack的配置文件中，任何合法的Node代码都是支持的
var path=require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports= {
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'/dist'),
		filename:'bundle.js'
	},
	plugins:[
	   new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' // 设置生成的内存页面的名称
    })
	
	],
	module:{
		rules:[
		
		   {test:/\.css$/,use:['style-loader','css-loader']},
		   {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
		   {test:/.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7630&name=[hash:8]-[name].[ext]'},
		   {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
		    { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
		  
		]
	},
	resolve:{
		alias:{
			//"vue$":"vue/dist/vue.js"
		}
	}
}
