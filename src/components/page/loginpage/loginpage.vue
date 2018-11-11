<template>
    <div>
        <mt-header title="登陆">
		  	<div slot="left">
		    	<mt-button icon="back" @click='goBack()'></mt-button>
		  	</div>
		  	<mt-button slot="right" @click="regiSter()">账户注册</mt-button>
		</mt-header>
		<mt-field label="用户名" placeholder="请输入用户名/手机号" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<div class="other-wrapper">
		感谢大家对我的支持，本示例可以前往我的github去下载!!!
		</div>
		<div class="login-btn">
			<mt-button type="primary" style="width: 100%;" @click="userLogin()">登陆</mt-button>
		</div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import { Toast } from 'mint-ui';
export default {
	
	data () {
		return {
			username:"",
			password:'',
		}
	},
	computed:{
		...mapState({
	      stateuser:state=>state.login,
	    })
	},
	methods:{
		...mapMutations({
			setLogin:'login/setLogin'
		}),
		//本来是想用这个接口的，不过这个数据mock平台不允许跨域请求，没办法，这里就是模拟登陆。
		userLogin(){
			//userLogin({username:this.username,password:this.password,key:'2892255b74690'})
			if(this.password != this.stateuser.password){
				Toast({
				  	message: '密码错误',
				  	position: 'middle',
				  	duration: 2000
				});
				return
			}
			if((this.username)!=(this.stateuser.username||this.stateuser.phone)){
				Toast({
				  	message: '用户名/手机号错误',
				  	position: 'middle',
				  	duration: 2000
				});
				return
			}
			Toast({
			  	message: '登陆成功',
			  	position: 'middle',
			  	duration: 2000
			});
			this.setLogin(t)
			setTimeout(()=>{
				this.$router.push({name:'shouye'})
			},1000)
		},
		regiSter(){
			this.$router.push({name:'registerpage'})
		},
		/*用vuex模拟登陆,本来登陆这部分也是要用到vuex的*/
	},
	created(){
		console.log(this.stateuser)
	}
}
</script>
<style scoped="scoped" lang="scss">
.other-wrapper{
	padding:10px;
	border-top: 1px solid #EAEAEA;
	color: #A9A9A9;
}
.login-btn{
	padding:10px;
}
</style>
