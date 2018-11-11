<template>
    <div ref="srollp" @mousewheel="scrollbuttom()" @scroll="scrollbuttom()" class="shouye-wrapper">
    	<div class="header-wrapper">
    		<v-header></v-header>
    	</div>
    	<div class="slider-wrapper">
    		<div class="slider-box">
    			<mt-swipe :auto="4000" style="width:100%;height:100%">
				  <mt-swipe-item style="border-radius:10px">
				  	<div class="slider-item"><img src="./ad1.png"></div>
				  </mt-swipe-item>
				  <mt-swipe-item style="border-radius:10px">
				  	<div class="slider-item"><img src="./hg1.png"></div>
				  </mt-swipe-item>
				  <mt-swipe-item style="border-radius:10px">
				  	<div class="slider-item"><img src="./a4.png"></div>
				  </mt-swipe-item>
				</mt-swipe>
    		</div>
    		<div class="ad-box">
    		</div>
    	</div>
    	<div class="header-menue" @click="toGoodlist()">
    		<ul class="flex-layout">
    			<li class="flex-1">
    				<img src="./m1.png">
    				<div>美食</div>
    			</li>
    			<li class="flex-1">
    				<img src="./m2.png">
    				<div>超市便利</div>
    			</li>
    			<li class="flex-1">
    				<img src="./m3.png">
    				<div>水果</div>
    			</li>
    			<li class="flex-1">
    				<img src="./m4.png">
    				<div>大牌惠吃</div>
    			</li>
    			<li class="flex-1">
    				<img src="./m5.png">
    				<div>地方美食</div>
    			</li>
    		</ul>
    	</div>
    	<div class="yh-wrapper" @click="toGoodlist()">
    		<div class="yh-title">找优惠</div>
    		<div class="yh-box flex-layout">
				<div class="yh-left">
					<div class="left-m">
						<img v-for="lst in zhaopaia.commodityList" :src="imgPaths(lst.imgUrl.src)">
					</div>
					<div class="left-m-b">
						<mt-badge size="normal" type="error">限量抢购</mt-badge>
					</div>
					<div class="left-m-c">
						<div>早餐9.9起</div>
						<div>12人正在抢</div>
					</div>
				</div>
				<div class="yh-right">
					<div class="r-t">
						<div>
							<img v-for="lst in zhaopaib.commodityList" :src="imgPaths(lst.imgUrl.src)">
						</div>
						<div class="badge">
							<mt-badge size="normal" type="error">优惠日历</mt-badge>
						</div>
					</div>
					<div class="r-b">
						<div class="r-b-l">
							<div>
								<img v-for="lst in zhaopaic.commodityList" :src="imgPaths(lst.imgUrl.src)">
							</div>
							<div class="badge">
								<mt-badge size="normal" type="error">省心套餐</mt-badge>
							</div>
						</div>
						<div class="r-b-r">
							<div>
								<img v-for="lst in zhaopaid.commodityList" :src="imgPaths(lst.imgUrl.src)">
							</div>
							<div class="badge">
								<mt-badge size="normal" type="error">心享食堂</mt-badge>
							</div>
						</div>
					</div>
				</div>
    		</div>
    	</div>
    	<div class="allgoods">
    		<div class="allgoods-title">
    			<h2>所有美食</h2>
    		</div>
    		<div>
    			<ul class="goods-wrapper">
    				<li class="goods-items flex-layout" v-for="(list,index) in goods" @click="toGoodsDetail(list.productId)">
    					<div class="items-img flex-2">
    						<img :src="imgPaths(list.commodityList[0].imgUrl.src)" style="width:70px;height:70px;border-radius:5px">
    					</div>
    					<div class="item-msg flex-8">
    						<div>
    							<h2 class="name">{{list.productName}}</h2>
    						</div>
    						<div style="padding:5px 0">
    							<span>月售:{{list.productSales}}</span>
    						</div>
    						<div>
    							<span>价格：
		    						<span style="color:#FF4040;">
		    							<span style="color:#FF4040;font-size:10px">￥</span>
		    							{{Number(list.commodityList[0].currentCost)/100}}
		    						</span>
		    					</span>
    						</div>
    					</div>
    				</li>
    				<li class="loading">
    					<span v-show="more">下拉加载更多...</span>
    					<span v-show="!more">没有更多数据了...</span>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<div class="separator"></div>
    </div>
</template>

<script>
import {goodsList} from '@/apijs/api.js'
import vHeader from '@/components/page/shouye/header/header'
import { Swipe, SwipeItem ,Toast } from 'mint-ui';
import Vue from 'vue'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
	components:{
		vHeader,
	},
	data () {
		return {
			yhui:{},
			zhaopaia:{},
			zhaopaib:{},
			zhaopaic:{},
			zhaopaid:{},
			goods:[],
			page:1,//当前请求页码
			scrolltype:true,//防止多次下拉请求
			more:true,//是否加载更多			
		}
	},
	methods:{
		scrollbuttom(){
			let srollparent = this.$refs.srollp;
			let screenheight = screen.height;
			let a = srollparent.scrollTop;
			if((a+screenheight)>=srollparent.scrollHeight){
				if(this.scrolltype){
					this.page ++;
					goodsList({pageSize:5,pageIndex:this.page},(r)=>{
						let temp = []
						if(r.data.status==200){
							let temp = r.data.res.list
							if(temp.length==0){
								Toast({
								  message: '没有更多美食了',
								  position: 'middle',
								  duration: 2000
								});
								this.more = false;
							}else{
								this.goods=this.goods.concat(temp)
							}
						}else{
							Toast({
							  message: '数据请求失败',
							  position: 'middle',
							  duration: 2000
							});
						}
						this.scrolltype = true;
					})
				}
			}
		},
		toGoodlist(){
			this.$router.push({name:'good'})
		},
		//进入商品详情
		toGoodsDetail(value){
			console.log(value)
			this.$router.push({name:'goodsdetail',query:{id:value}})
		}
	},
	mounted(){
		/*获取常德米粉标签*/
		goodsList({lableList:[222765534997258240]},(r)=>{
			console.log(r.data)
			if(r.data.status==200){
				this.yhui = r.data.res
				this.zhaopaia = r.data.res.list[0]
				this.zhaopaib = r.data.res.list[1]
				this.zhaopaic = r.data.res.list[2]
				this.zhaopaid = r.data.res.list[3]
			}
		})
		goodsList({pageSize:5,pageIndex:this.page},(r)=>{
			if(r.data.status==200){
				this.goods = r.data.res.list
			}
		})
	}
}
</script>
<style scoped="scoped" lang="scss">
.separator{
	margin-bottom:80px;
}
.shouye-wrapper{
	position:absolute;
	top:0;left:0;right:0;
	bottom:0;overflow:auto;
}
.header-wrapper{
	position: fixed;
	z-index: 999;
	top:0;left:0;right:0;
}
.slider-wrapper{
	margin-top:120px;
	height:220px;
	.slider-box{
		height: 80px;
		background:#fff;
		padding:10px 20px;
		border-radius:10px;
		.slider-item{
			height:80px;
			border-radius:10px;
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.ad-box{
		height:110px;
		&:after{
			content:'';
			display:block;
			background-image: url('./hgx.png');
			background-repeat: no-repeat;
			background-size:cover;
			background-position: center;
			width: 100%;
			height: 100%;
		}
	}
}
.header-menue{
	padding:0 10px;
	.flex-layout{
		.flex-1{
			text-align: center;
			img{
				width:50px;
			}
			&>div{
				font-size:12px;
				color: #555555;
			}
		}
	}
}
.yh-wrapper{
	padding: 20px;
	.yh-title{
		padding-bottom:10px;
		font-size: 16px;
		font-weight: 600;
	}
	.yh-box{
		width: 100%;
		.yh-left{
			flex:0 0 auto;
			width: 50%;
			height:200px;
			padding: 0 2px 0 0;
			position: relative;
			.left-m{
				width:100%;
				height:100%;
				overflow: hidden;
				position: relative;
				img{
					height:100%;
				}
			}
			.left-m-b{
				position: absolute;
				top: 0;left:0;
			}
			.left-m-c{
				position: absolute;
				bottom: 0;left:0;
				div{
					color:#fff;
					padding-left:5px;
					&:first-child{
						font-size: 20px;
						font-weight: 600;
						letter-spacing: 3px;
					}
					&:last-child{
						font-size: 12px;
						padding:5px;
					}
				}
			}
		}
		.yh-right{
			flex:0 0 auto;
			width: 50%;
			padding: 0 0 0 2px;
			.badge{
				position:absolute;
				top: 0;
				left:0;
			}
			.r-t{
				height:98px;
				margin-bottom:4px;
				position: relative;
				div{
					height: 100%;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
			}
			.r-b{
				height: 98px;
				display: flex;
				.r-b-l{
					flex:0 0 auto;
					width: 50%;
					position: relative;
					div{
						overflow: hidden;
						height: 100%;
						img{
							height: 100%
						}
					}
				}
				.r-b-r{
					flex:0 0 auto;
					width: 50%;
					position: relative;
					div{
						overflow: hidden;
						height: 100%;
						padding-left:4px;
						img{
							height: 100%
						}
					}
				}
				
			}
		}
	}
}
.allgoods{
	.allgoods-title{
		padding: 0 20px;
	}
	.goods-wrapper{
		padding:10px 20px 20px 20px;
		.goods-items{
			padding:10px 0;
			border-bottom:1px solid rgba(176,176,176,0.3);
			&:last-child{
				border-bottom:0;
			}
			.items-img{

			}
			.item-msg{
				font-size:16px;
				color: #555555;
				padding-left: 10px
			}
		}
		.loading{
			text-align: center;
			padding-top:10px;
			color:#555557;
		}
	}
}
</style>
