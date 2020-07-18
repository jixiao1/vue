<template>
	<div>
		<h1>这是App组件</h1>
		<mt-button type="default" icon="more" @click="show">default</mt-button>
		<mt-button type="default" size="large" plain>default</mt-button>
		<mt-button type="default" size="small" disabled>default</mt-button>
		<button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
		<router-link to="/account">Account</router-link>
		<router-link to="/goodslist">GoodsList</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui'
	export default{
		data(){
			return{
				toastInstanse:null
			}
		},
		created(){
			this.getList();
		},
	  methods:{
	  	getList(){
	  		this.show();
	  		setTimeout(()=>{
	  			 this.toastInstanse.close()
	  		},3000)
	  	},
	  	show(){
	  		//Toast('提示消息')
	  	 this.toastInstanse=Toast({
	  			message:'这是消息',
	  			duration:-1,
	  			position:'top',
	  			 iconClass: 'glyphicon glyphicon-heart',//设置图标
	  			 className:'mytoast'
	  		});
	  	}
	  }
	}
</script>

<style>
</style>