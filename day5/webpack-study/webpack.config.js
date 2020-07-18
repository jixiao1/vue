
const path=require('path')
const webpack=require('webpack')
//导入在内存中生成的html页面的插件
const htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	devServer:{
		open:true,
		port:3000,
		contentBase:'src',
		hot:true//使用热更新
	},
	plugins:[
	  new webpack.HotModuleReplacementPlugin(),
	  new htmlWebpackPlugin({
	  	template:path.join(__dirname,'./src/index.html'),
	  	filename:'index.html'
	  })
	
	],
	module:{
		//这个节点，用于配置所有的第三方加载器
	 rules:[//第三方的规则
	    {test:/\.css$/,use:['style-loader','css-loader']},
	      {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
	 ]
	}
}
