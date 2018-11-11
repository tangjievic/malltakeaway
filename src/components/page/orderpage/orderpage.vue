<template>
    <div>
    	<!-- 未登陆的显示 -->
    	<div class="no-login" v-show="!loginstate">
    		<img src="./timg.jpg">
    		<div style="padding: 40px">
    			<div style="color:#555555;font-size: 18px;margin-bottom:30px;">登陆后查看订单哦！</div>
    			<div>
    				<mt-button type="primary" @click="toLogin()">立即登陆</mt-button>
    			</div>
    		</div>
    	</div>
    	<!-- 登陆显示 -->
    	<div v-show="loginstate">
    		<div style="padding: 20px;font-size: 18px;text-align:center;">暂无数据</div>
    	</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	
	data () {
		return {

		}
	},
	computed:{
		...mapState({
	      loginstate:state=>state.login.loginstate,
	    })
	},
	methods:{
		//跳转登陆页
		toLogin(){
			this.$router.push({name:'loginpage'})
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
.no-login{
	position: absolute;
	top:0;left:0;right: 0;
	bottom:60px;
	text-align: center;
	padding-top:50px;
	img{
		width: 80%;
	}
}
</style>
