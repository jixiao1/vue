var info = {
  name: 'zs',
  age: 20
}

export default info
/* export default {
  address: '北京'
} */

// 注意： export default 向外暴露的成员，可以使用任意的变量来接收
// 注意： 在一个模块中，export default 只允许向外暴露1次
// 注意： 在一个模块中，可以同时使用 export default 和 export 向外暴露成员
/*export default{
	name:'jx',
	age:23
}*/
// 注意： 在一个模块中，可以同时使用 export default 和 export 向外暴露成员
export var title='小欣喜'
export var content = '哈哈哈'
//注意： 使用 export 导出的成员，必须严格按照 导出时候的名称，来使用  {}  按需接收；
// 注意： 使用 export 导出的成员，如果 就想 换个 名称来接收，可以使用 as 来起别名；
