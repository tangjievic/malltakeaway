<template>
    <div class="shopcart">
    	<div class="content flex-layout">
    		<div class="content-left flex-layout flex-7">
    			<div class="logo-wrapper flex-3">
    				<div class="logo">
    					<div :class="goodsnum>0?'actived':''">
    						<i class="iconfont icon-gouwuchefill" style="font-size:32px;"></i>
    						<span class="num">{{goodsnum}}</span>
    					</div>
    				</div>
    			</div>
    			<div class="price flex-2">
    				<span>￥{{allTotel}}</span>
    			</div>
    			<div class="desc flex-5">
    				<span>另需配送费￥0元</span>
    			</div>
    		</div>
    		<div class="content-right flex-3" v-if="goodsnum==0">
    			<span>还差0元起送</span>
    		</div>
    		<div class="content-right add flex-3" v-else @click="buy()">
    			<span>立即购买</span>
    		</div>
    	</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { Toast } from 'mint-ui';
export default {
	props:{
		fee:{
			type:Array,
			default(){
				return[]
			}
		}
	},
	computed:{
		...mapState({
	      loginstate:state=>state.login.loginstate,
	    }),
		allTotel(){
			let fee =0;
			this.fee.forEach((item,index)=>{
				fee = fee+Number(item.count*(item.commodityList[0].currentCost))/100
			})
			return fee;
		},
		goodsnum(){
			let num = 0;
			this.fee.forEach((item,index)=>{
				num = num+Number(item.count)
			})
			return num
		}
	},
	data () {
		return {

		}
	},
	methods:{
		buy(){
			if(this.loginstate){
				Toast({
				  	message: '你就当你买了',
				  	position: 'middle',
				  	duration: 3000
				});
			}else{
				Toast({
				  	message: '未登录,请登录后购买',
				  	position: 'middle',
				  	duration: 3000
				});
			}
		}
	},
	updated(){
		console.log(this.fee)
	}
}
</script>
<style scoped="scoped" lang="scss">
.shopcart{
	height:47px;
	line-height: 47px;
	background-color:#141d27;
	.content{
		height:100%;
		.content-left{
			.logo-wrapper{
				.logo{
					text-align: center;
					width: 44px;
					height:44px;
					line-height: 44px;
					margin:0 auto;
					border-radius: 50%;
					background-color:#141d27;
					position: relative;
					bottom: 15px;
					padding:8px;
					.actived{
						background-color:#00BFFF;
						.iconfont.icon-gouwuchefill{
							color:#ffffff;
						}
					}
					&>div{
						width: 44px;
						height: 44px;
						line-height: 44px;
						background: rgba(0,0,0,0.2);
						border-radius: 50%;
						.iconfont.icon-gouwuchefill{
							color: rgba(255,255,255,0.4);
						}
						.num{
							position: absolute;
							top:0px;right:0px;
							display:inline-block;
							height: 15px;
							line-height:15px;
							border-radius: 15px;
							padding: 0 6px;
							font-size: 10px;
							background-color:#FF4040;
							color:#ffffff;
							box-shadow: 0 1px 3px black;
						}
					}
				}
			}
			.price{
				font-size: 16px;
				color:rgba(255,255,255,0.4);
				font-weight:700;
				text-align: center;
				span{
					display: inline-block;
					height:30px;
					line-height: 30px;
					width: 100%;
					border-right: 1px solid rgba(255,255,255, 0.1)
				}
			}
			.desc{
				font-size: 14px;
				color: rgba(255,255,255,0.4);
				text-align: center;
			}
		}
	}
	.content-right{
		background-color: rgba(255,255,255,0.3);
		text-align: center;
		color: rgba(255,255,255,0.6);
		font-size:14px;
		&.add{
			background-color:#00EE76;
			color: #ffffff;
		}
	}
}
</style>
