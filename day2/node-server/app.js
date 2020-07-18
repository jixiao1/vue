const http=require('http');
// 这个核心模块，能够帮我们解析 URL地址，从而拿到  pathname  query 
const urlModule=require('url');
const server=http.createServer();
server.on('request',function(req,res){
	//const url=req.url;
	var data={
		name:'jsx',
		age:19,
		sex:'男'
	}
	const {pathname:url,query}=urlModule.parse(req.url,true);
	if(url==='/getscript'){
		var code=`${query.callback}(${JSON.stringify(data)})`;
		res.end(code);
	}else{
		res.end('404');
	}
})
server.listen(3000,function(){
	console.log("server running 3000")
})
