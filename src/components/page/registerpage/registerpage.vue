<template>
    <div>
    	<mt-header title="注册">
		  	<div slot="left">
		    	<mt-button icon="back" @click='goBack()'></mt-button>
		  	</div>
		</mt-header>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="验证码" placeholder="请输入验证码" type="number" v-model="yzm">
			<sendyzm :yzmurl="yzmurl" :params="params"></sendyzm>
		</mt-field>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="密码确认" placeholder="请再次输入密码" type="password" v-model="rpassword"></mt-field>
		<div class="res-btn">
		 	<mt-button type="primary" style="width:100%" @click="toRegister()">立即注册</mt-button>
		</div>
		<div class="tip">
			本部分是模拟注册，没有真正的短信发送，验证码清输入12345
		</div>
    </div>
</template>

<script>
import sendyzm from '@/components/module/sendzym/sendyzm'
import {mapState,mapMutations} from 'vuex'
import { Toast } from 'mint-ui';
export default {
	components:{
		sendyzm,
	},
	data () {
		return {
			phone:'',
			yzm:'',
			username:'',
			password:'',
			rpassword:'',
			yzmurl:'',
			params:{
				type:1,
				name:'name'
			}
		}
	},
	computed:{
		...mapState({
	      stateuser:state=>state.login.username,
	    })
	},
	methods:{
		...mapMutations({
			setUser:'login/setUser'
		}),
		sendyzm(){
			//正常这个按钮是要请求验证码接口的
		},
		toRegister(){
			/*实际项目中是掉接口，我这个就是模拟没有调接口，用的是vuex，这样可以帮助新手了解vuex怎么用*/
			// userRegister({
			// 	username:this.username,
			// 	password:this.password,
			// 	key:'2892255b74690'
			// })
			if(this.isEmpty(this.phone)){
				Toast({
				  	message: '手机号不能为空',
				  	position: 'middle',
				 	 duration: 2000
				});
				return
			}
			if(this.phoneFormat(this.phone)){
				return
			};
			if(this.isEmpty(this.yzm)){
				Toast({
				  	message: '请输入验证码',
				  	position: 'middle',
				 	 duration: 2000
				});
				return
			}
			if(this.isEmpty(this.username)){
				Toast({
				  	message: '用户名不能为空',
				  	position: 'middle',
				 	 duration: 2000
				});
				return
			}
			if(this.isEmpty(this.password)){
				Toast({
				  	message: '密码不能为空',
				  	position: 'middle',
				 	 duration: 2000
				});
				return
			}
			if(this.password!=this.rpassword){
				Toast({
				  	message: '密码确认错误',
				  	position: 'middle',
				 	duration: 2000
				});
				return
			}
			this.setUser({phone:this.phone,username:this.username,password:this.password})
			Toast({
			  	message: '注册成功',
			  	position: 'middle',
			 	duration: 2000
			});
			this.$router.push({name:'loginpage'})
		},
	},
	created(){
		console.log(this.stateuser)
	}
}
</script>
<style scoped="scoped" lang="scss">
.res-btn{
	border-top: 1px solid #EAEAEA;
	padding:10px;
}
.tip{
	padding: 10px;
	color: #A9A9A9;
}
</style>
