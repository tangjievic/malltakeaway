<template>
    <div class="ratings">
    	 <div class="ratings-content">
    	 	<div class="overview flex-layout">
    	 		<div class="overview-left">
    	 			<h1 class="score">4.6</h1>
    	 			<div class="title">综合评分</div>
    	 			<div class="rank">高于周边商家</div>
    	 		</div>
    	 		<div class="overview-right">
    	 			<div class="score-wrapper">
    	 				<span class="title">服务态度</span>
    	 				<v-start :size="36" :score="4.6"></v-start>
    	 			</div>
    	 			<div class="score-wrapper">
    	 				<span class="title">商品评分</span>
    	 				<v-start :size="36" :score="4.2"></v-start>
    	 			</div>
    	 		</div>
    	 	</div>
    	 </div>
    	 <div class="comment-wrapper">
    	 	<mt-button type="primary" size="small">全部0</mt-button>
    	 	<mt-button type="primary" size="small" style="background-color:rgba(38, 162, 255,0.5)">满意0</mt-button>
    	 	<mt-button type="default" size="small">不满意0</mt-button>
    	 </div>
    	 <div class="comment-content">
    	 	暂无数据
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
	}
}
</script>
<style scoped="scoped" lang="scss">
.ratings{
	position:absolute;
	top: 174px;
	bottom: 0;left: 0;width: 100%;
	.overview{
		padding: 18px 0; 
		border-bottom: 1px solid rgba(176,176,176,0.5);
		.overview-left{
			flex: 0 0 137px;
			width: 137px;
			border-right: 1px solid rgba(7,17,27, 0.2);
			text-align: center;
			.score{
				line-height: 28px;
				font-size: 24px;
				color: rgb(255,153,0);
				margin-bottom: 6px;
			}
			.title{
				margin-bottom:8px;
				line-height: 12px;
				font-size: 16px;
				font-weight: 600;
				color: rgb(7,17,27);
			}
			.rank{
				line-height: 10px;
				font-size:10px;
				color: #555555;
				padding-bottom: 6px;
			}
		}	
		.overview-right{
			flex:1;
			padding-left:24px;
			.score-wrapper{
				margin-top: 8px;
				line-height: 18px;
				font-size: 0;
				.title{
					font-size: 12px;
					color: rgb(7,17,27);
					vertical-align: top;
				}
				.star{
					display: inline-block;
					margin: 0 12px;
					vertical-align: top;
				}
				.score{
					display: inline-block;
					vertical-align: top;
					font-size: 12px;
				}
			}
		}
	}
	.comment-wrapper{
		margin-top:20px;
		box-shadow: 0px 1px 1px rgba(176,176,176, 0.5);
		padding:10px;
	}
	.comment-content{
		padding: 10px;
		color: rgba(176,176,176,1);
	}
}
</style>
