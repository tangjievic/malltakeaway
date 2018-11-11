<template>
    <div class="header">
        <div class="content-wrapper">
        	<div class="avater" @click="toShouye()">
        		<img :src="seller.imgurl" height="64" width="64"> 
        	</div>
        	<div class="content">
        		<div class="title">
        			<span class="brand"></span>
        			<span class="name">{{seller.name}}</span>
        		</div>
        		<keep-alive>
	        		<div class="desrition">
	        			{{peisong.strategyName}}/极速送达
	        		</div>
	        	</keep-alive>
	        	<div class="support">
	        		<span class="icon"></span>
	        		<span class="text">在线支付，满50减10</span>
	        	</div>
        	</div>
        	<div class="support-count" @click="showDetail()">
        		<span class="count">165个</span>
        		<i class="iconfont icon-jiantouyou" style="font-size: 10px;margin-left:2px"></i>
        	</div>
        </div>
        <div class="bulletin-wrapper ellipsis" @click="showDetail()">
        	<span class="bulletin-title"></span>
        	<span class="bulletin-text" >{{seller.bulletin}}</span>
        	<i class="iconfont icon-jiantouyou" style="font-size: 10px;margin-left:2px"></i>
        </div>
        <!-- 背景层 -->
        <div class="background">
        	<img src="./headerbg.jpg" width="100%" height="100%">
        </div>
        <!-- 浮层 -->
        <transition name="fade">
	        <div class="detail" v-show="detailshow">
	        	<div class="detail-wrapper float-clear">
	        		<div class="detail-main">
	        			<h1 class="name">{{seller.name}}</h1>
	        			<div class="star-wrapper">
	        				<star :size="48" :score="3.6" style="display:inline-block"></star>
	        			</div>
	        			<div class="content">
	        				<div class="yhmsg">
	        					<h2>优惠信息</h2>
	        				</div>
	        				<ul class="youhui">
	        					<li>
	        						<span class="icon-1 icon"></span>
	        						<span>在线支付，满50元减10元</span>
	        					</li>
	        					<li>
	        						<span class="icon-2 icon"></span>
	        						<span>单人大优惠</span>
	        					</li>
	        					<li>
	        						<span class="icon-2 icon"></span>
	        						<span>特品红烧肉，8折尝鲜价</span>
	        					</li>
	        					<li>
	        						<span class="icon-3 icon"></span>
	        						<span>特惠饮品，全场3折</span>
	        					</li>
	        					<li>
	        						<span class="icon-3 icon"></span>
	        						<span>秘制常德牛肉粉，百吃不厌</span>
	        					</li>
	        				</ul>
	        				<div class="yhmsg" style="">
	        					<h2>商家公告</h2>
	        				</div>
	        				<div>
	        					<div style="text-align: justify;">
	        						<p>御阳国际餐饮服务有限公司是东方酒店旗下的一家餐饮外宴服务公司，于2009年引进台湾餐饮服务管理及外宴产品研发。并于2010年开始运营，多年来专业提供一站式外宴活动服务，专注于大，中，小型宴会：金盆大盆菜，中西式自助餐，烤全羊，烤鳄鱼和各类烧烤等外宴活动。现拥有五星级出品团队。服务范围：笼罩珠三角地区：深圳，广州，惠州，佛山，惠州，中山，河源等地，详情欢迎来电咨询。这里专业，这里优惠，这里生活服务齐全。</p>
									<p>公司的服务宗旨：以人为本，以客为尊，服务至上。</p>
								</div>
	        				</div>
	        			</div>
	        		</div>
	        	</div>
	        	<div class="detail-close" @click="close()">
	        		<i class="iconfont icon-close" style="vertical-align: middle;font-size:22px"></i>
	        	</div>
	        </div>
	    </transition>
    </div>
</template>

<script>
import {peiSong,noTice} from '@/apijs/api.js'
import star from '@/components/module/start/start.vue'
export default {
	props:{
		seller:{
			type:Object,
		}
	},
	components:{
		star,
	},
  	data () {
    	return {
    		peisong:{},
    		detailshow:false,
    	}
  	},
  	methods:{
  		showDetail(){
  			this.detailshow = true;
  		},
  		close(){
  			this.detailshow = false;
  		},
  		toShouye(){
  			this.$router.push({name:'shouye'})
  		}
  	},
  	mounted(){
  		//配送信息
  		peiSong({version:1},(r)=>{
  			if(r.data.status===200){
  				this.peisong = r.data.res.transportStrategyList[0]
  			}
  		})
  	},
}
</script>
<!-- 组件设计原则，组件的图片都要在组件下的文件这样便于维护 -->
<style scoped="scoped" lang="scss">
.header{
	color: #fff;
	position: relative;
	background-color: rgba(7,17,27,0.3);
	.content-wrapper{
		padding: 24px 12px 18px 24px;
		position: relative;
		font-size: 0;
		.avater{
			display: inline-block;
			img{
				border-radius:2px;
				position:relative;
				top:2px;
			}
		}
		.content{
			display: inline-block;
			font-size: 14px;
			margin-left: 16px;
			.title{
				margin: 2px 0 8px 0;
				.brand{
					display: inline-block;
					vertical-align: bottom;/*只对行内元素有效*/
					width: 30px;height:18px;
					background-image:url("./brand@2x.png");
					@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
					    background-image:url("./brand@3x.png")
					}
					@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
					    background-image:url("./brand@2x.png")
					}
					background-size: 30px 18px;
					background-repeat:no-repeat;
				}
				.name{
					margin-left:6px;
					font-size: 16px;
					line-height: 18px;
					font-weight: 600;
				}

			}
			.desrition{
				margin-bottom: 10px;
				line-height: 12px;
				font-size: 12px;
			}
			.support{
				.icon{
					vertical-align:middle;
					display: inline-block;
					width: 12px;height:12px;
					margin-right:10px;
					background-image:url("./decrease@2x.png");
					@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
					    background-image:url("./decrease@3x.png")
					}
					@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
					    background-image:url("./decrease@2x.png")
					}
					background-size: 12px 12px;
					background-repeat:no-repeat;
				}
				.text{
					font-size: 12px;
					line-height: 12px;
				}
			}
		}
		.support-count{
			position: absolute;
			right: 12px;
			bottom: 18px;
			padding: 0 8px;
			height: 24px;line-height: 24px;
			border-radius:14px;
			background-color: rgba(0,0,0,0.2);
			text-align: center;
			.count{
				font-size: 10px;
			}
		}
	}
	.bulletin-wrapper{
		height: 28px;line-height: 28px;
		padding: 0 22px 0 12px;
		position: relative;
		background-color: rgba(7,17,27,0.2);
		.bulletin-title{
			display:inline-block;
			width: 22px;
			height: 12px;
			background-image: url('./bulletin@2x.png');
			@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
					    background-image: url("./bulletin@3x.png")
			}
			@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
			    background-image: url("./bulletin@2x.png")
			}
			background-size:22px 12px;
			background-repeat:no-repeat;
		}
		.bulletin-text{
			font-size: 10px;
			margin:0 4px;
			vertical-align: bottom;
		}
		.icon-jiantouyou{
			position: absolute;
			right:12px;
		}
	}
	.background{
		position: absolute;
		top:0;left:0;width:100%;height: 100%;
		z-index: -1;/*这就是做背景的方式*/
		filter: blur(3px);/*制作模糊效果*/
	}
	.detail{
		position: fixed;
		z-index: 100;
		top:0;left:0;right:0;bottom: 0;
		overflow: auto;
		background-color: rgba(7,17,27,0.8);
		.detail-wrapper{
			min-height: 100%;
			.detail-main{
				padding-top:64px;
				padding-bottom: 64px;
				.name{
					line-height: 16px;
					text-align: center;
					font-size: 16px;
					font-weight: 700;
				}
				.star-wrapper{
					text-align:center;
					padding: 2px 0;
					margin-top: 18px;
				}
				.content{
					padding:18px 36px;
					.yhmsg{
						display: flex;
						align-items: center;
						&:after{
							content:'';
							display:block;
							border-bottom: 1px solid rgba(255,255,255,0.2);
							flex:1
						}
						&:before{
							content:'';
							display:block;
							border-bottom: 1px solid rgba(255,255,255,0.2);
							flex:1
						}
						h2{
							flex: 1;
							text-align:center;
						}
					}
					.youhui{
						margin:24px 0;
						li{
							margin-top: 6px;
							.icon{
								display:inline-block;
								width:18px;height: 18px;
								vertical-align: bottom;
								background-size:18px 18px;
								background-repeat: no-repeat;
							}
							.icon-1{
								background-image: url('decrease@2x.png');
							}
							.icon-2{
								background-image: url('discount_1@2x.png');
							}
							.icon-3{
								background-image: url('special_1@2x.png');
							}
						}
					}
				}
			}
		}
		.detail-close{
			position:relative;
			width: 32px;
			height: 32px;
			margin:-64px auto 0 auto;
			text-align: center;
			font-size: 32px;
			clear: both;
		}
	}
}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to,.fade-leave{
//   opacity: 0;
// }
.fade-enter{
	opacity:0;
}
.fade-enter-active {
	transition: opacity .5s;
}
.fade-enter-to{
	opacity:1;
}
.fade-leave-to{
	opacity:0;
}
.fade-leave-active{
	transition: opacity 0.5s;
}
.fade-leave{
	opacity:0;
}
</style>
