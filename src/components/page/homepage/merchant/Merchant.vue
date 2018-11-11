<template>
    <div class="seller">
    	<div class="seller-content">
    		<div class="overview">
    			<h1 class="title">豪大大餐厅</h1>
    			<div class="desc border-1">
    				<v-start :size="36" score="3.8"></v-start>
    				<span class="text">(0)</span>
    				<span class="text">月售0单</span>
    			</div>
    			<ul class="remark">
    				<li class="bolck">
    					<h2>起送价</h2>
    					<div class="content">
    						20<span class="stress">￥</span>
    					</div>
    				</li>
    				<li class="bolck">
    					<h2>商家配送</h2>
    					<div class="content">
    						4<span class="stress">￥</span>
    					</div>
    				</li>
    				<li class="bolck">
    					<h2>平均配送时间</h2>
    					<div class="content">
    						15<span class="stress">分钟</span>
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<div class="tip-wrapper">
    		<h2>公告与活动</h2>
    		<p>
    			豪大大餐厅疯狂星期四”活动分别于2018年8月23日及8月30日开始，每次活动期间5:45-9:14在豪大大餐厅APP宅急送点餐，可以9.9元优惠价购买2个肉酥油条饭团；每次活动期间9:15-22:44，武汉市、广东省和福建省仅限10:15-22:44在豪大大餐厅APP宅急送点餐，可以9.9元优惠价购买9块黄金鸡块，或以19.9元优惠价购买20块黄金鸡块。每次活动期间，参加活动的肉酥油条饭团全国售卖数量为5,795个，黄金鸡块（9块装）全国售卖数量为32,000份，黄金鸡块（20块装）全国售卖数量为32,000份，售完即止。
豪大大餐厅不设最低起送金额，每单酌收9元外送费。为了保证食物品质，豪大大餐厅有送餐范围和服务时间限制。早餐、夜宵仅限部分豪大大餐厅送餐区域供应。豪大大餐厅实施专属菜单及价格，不同城市的送餐菜单和价格有所不同；不同城市、不同时段产品品项及价格有所不同，详情以输入送餐地址后显示的实际供应的菜单为准。西藏自治区的豪大大餐厅送餐区域与全国其他送餐区域的送餐菜单及价格有所不同，详情以输入送餐地址后显示的实际供应的菜单为准。被比较价格是指套餐内的产品在豪大大餐厅官网上同款产品的单品价（其中有会员价的产品按会员价计算）的总和，所称优惠或折扣金额均以此为计算依据。
    		</p>
    	</div>
    </div>
</template>
<script>
import vStart from '@/components/module/start/start'
export default {
	components:{
		vStart,
	},
	data () {
		return {

		}
	},
	created(){

	}
}
</script>
<style scoped="scoped" lang="scss">
.seller{
	position: absolute;
	top:174px;bottom:0;left: 0;
	width: 100%;overflow: hidden;
	background-color: rgba(7,17,27,0.1);
	overflow:auto;
	.seller-content{
		box-shadow: 0 1px 1px rgba(7,17,27,0.2);
		background-color:#ffffff;
		.overview{
			padding: 18px;
			.title{
				margin-bottom: 8px;
				line-height: 28px;
				color: rgba(7,17,27,1);
				font-size: 14px;
			}
			.desc{
				padding-bottom: 18px;
				line-height: 18px;
				font-size: 0;
				.star{
					display:inline-block;
					margin-right: 8px;
					vertical-align: top;
				}
				.text{
					margin-right: 12px;
					display: inline-block;
					vertical-align: top;
					font-size: 10px;
				}
			}
			.remark{
				display: flex;
				padding-top: 18px;
				.bolck{
					flex:1;
					text-align: center;
					border-right: 1px solid rgba(7,17,27,0.2);
					&:last-child{
						border-right:0;
					};
					h2{
						margin-bottom: 4px;
						line-height: 10px;
						font-size: 10px;
						color: rgb(147,153,159);
					}
					.content{
						line-height: 24px;
						font-size: 16px;
						color: rgb(7,17,27);
						.stress{
							font-size: 10px
						}
					}
				}
			}
		}
	}
	.tip-wrapper{
		background-color:#ffffff;
		box-shadow: 0 -1px 1px rgba(7,17,27,0.2);
		margin-top:20px;
		padding: 18px;
		overflow:auto;
		h2{
			font-size: 14px;
		}
		p{
			text-align: justify;
			font-size: 12px;
			color: 	#4169E1;
		}
	}
}
</style>
