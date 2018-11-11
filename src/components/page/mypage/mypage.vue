<template>
    <div>
    	<mt-header title="我的">
		</mt-header>
		<div class="main-wrapper">
			<div class="header-msg flex-layout" style="align-items: center;">
				<div class="headerimg flex-1">
					<div @click="toLogin()">
						<img src="./dh.png">
					</div>
				</div>
				<div class="flex-3">
					<div style="font-size:18px;color: #fff;" @click="toLogin()" v-if="!this.stateuser">立即登陆</div>
					<div style="font-size:18px;color: #fff;" v-else>{{statename}}</div>
					<div style="font-size: 12px;color:#fff;margin-top: 10px" v-if="!this.stateuser">登陆之后可享受更多优惠特权</div>
					<div style="font-size: 12px;color:#fff;margin-top: 10px" v-else>豪大大餐厅欢迎您</div>
				</div>
				<div class="flex-1" style="text-align: right;" @click="toLogin()">
					<i class="iconfont icon-jiantouyou" style="color:#fff"></i>
				</div>
			</div>
			<div class="mymenue">
				<ul class="flex-layout" @click="toOther()">
					<li class="flex-1">
						<img src="./qianbao.png" height="35">
						<div>钱包</div>
					</li>
					<li class="flex-1">
						<img src="./hongbao.png" height="35">
						<div>红包</div>
					</li>
					<li class="flex-1">
						<img src="./jinbi.png" height="35">
						<div>金币</div>
					</li>
				</ul>
				<div @click="toCollect()">
					<mt-cell title="我的收藏" style="margin-top:10px">
						<img slot="icon" src="./xin.png" width="24" height="24">
					</mt-cell>
				</div>
				<div @click="toGoldmall()">
					<mt-cell title="金币商城" style="margin-top:10px">
						<img slot="icon" src="./shop.png" width="24" height="24">
					</mt-cell>
				</div>
				<div @click="toService()">
					<mt-cell title="我的客服" style="margin-top:10px">
						<img slot="icon" src="./kefu.png" width="24" height="24">
					</mt-cell>
				</div>
				<div @click="toCooperation()">
					<mt-cell title="加盟合作">
						<img slot="icon" src="./jiameng.png" width="24" height="24">
					</mt-cell>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {mapState} from 'vuex'
export default {
	
	data () {
		return {

		}
	},
	computed:{
		...mapState({
	      stateuser:state=>state.login.loginstate,
	      statename:state=>state.login.username
	    })
	},
	methods:{
		toLogin(){
			this.$router.push({name:'loginpage'})
		},
		toOther(){
			this.$router.push({name:'otherpage'})
		},
		toCooperation(){
			this.$router.push({name:'cooperation'})
		},
		toService(){
			Toast({
			  message: '此功能暂未实现',
			  position: 'middle',
			  duration: 2000
			});
		},
		toGoldmall(){
			this.$router.push({name:'goldmall'})
		},
		toCollect(){
			console.log('111')
			Toast({
			  message: '此功能暂未实现',
			  position: 'middle',
			  duration: 2000
			});
		}
	},
	created(){
		console.log(this.stateuser)
	}
}
</script>
<style scoped="scoped" lang="scss">
.main-wrapper{
	height:80px;
	background: linear-gradient(left,#26a2ff,#3A5FCD);
	background: -webkit-gradient(linear, left top, right top, from(#26a2ff), to(#3A5FCD));
	background: -o-gradient(linear, left top, right top, from(#26a2ff), to(#3A5FCD));
	background: -moz-gradient(linear, left top, right top, from(#26a2ff), to(#3A5FCD));
	background: -ms-gradient(linear, left top, right top, from(#26a2ff), to(#3A5FCD));
	padding:20px;
	position: relative;
	.header-msg{
		height:80px;
		.headerimg{
			padding-right:10px;
			div{
				width:70px;
				height:70px;
				padding:5px;
				border-radius: 50%;
				background-color:rgba(255,255,255,0.3);
				overflow:hidden;
				text-align: center;
				img{
					width: 60px;
					height:60px;
				}
			}
		}
	}
	.mymenue{
		position:fixed;
		top: 160px;
		background-color:rgba(176,176,176,0.1);
		left:0;right: 0;bottom: 60px;
		ul{
			height: 80px;
			box-shadow: 0px -2px 2px rgba(176,176,176,0.5);
			border-bottom:1px solid rgba(176,176,176,0.2);
			background-color: #fff;
			li{
				padding: 10px;
				color: #555555;
				text-align:center;
				&:nth-child(2){
					border-right: 1px solid rgba(176,176,176,0.2);
					border-left: 1px solid rgba(176,176,176,0.2);
				};
			}
		}
	}
}
</style>
