<template>
    <div>
    	<mt-header title="商品详情">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
    	<div class="detail-img">
    		<img :src="goodsmsg.src">
    	</div>
    	<div class="goodtitle">
    		<div class="title">
    			<span>{{goodsdetail.productName}}</span>
    		</div>
    		<div class="yueshou">
    			<span>月售：{{goodsdetail.productSales}}</span>
    		</div>
    		<div class="price">
    			<span>￥{{goodsdetail.maxPrice/100}}</span>
    			<button>加入购物车</button>
    		</div>
    	</div>
    	<div class="goodsdesc">
    		<h2>商品介绍</h2>
    		<p>{{goodsdetail.productName}}</p>
    	</div>
    </div>
</template>

<script>
import {getGoodDtail} from '@/apijs/api.js'
export default {
	
	data () {
		return {
			goodsdetail:{},
			goodsmsg:{},
		}
	},
	methods:{

	},
	created(){

	},
	mounted(){
		getGoodDtail({productId:this.$route.query.id},(r)=>{
			console.log(r.data)
			if(r.data.status==200){
				this.goodsdetail = r.data.res
				this.goodsmsg = r.data.res.productImgUrls[0]
			}
		})
	}
}
</script>
<style scoped="scoped" lang="scss">
.detail-img{
	height:240px;
	overflow: hidden;
	img{width:100%;}
}
.goodtitle{
	padding: 10px;
	box-shadow: 0 1px 1px rgba(176,176,176,0.5);
	.title{
		font-size: 18px;
		font-weight: 700;
	}
	.yueshou{
		font-size: 14px;
		color: rgba(176,176,176,0.8);
	}
	.price{
		padding: 20px 0;
		font-size: 16px;
		color: red;
		position: relative;
		height: 30px;
		line-height: 30px;
		button{
			position: absolute;
			right: 10px;
			width: 120px;
			border: 0;
			outline: none;
			height: 30px;
			line-height: 30px;
			border-radius:30px;
			background-color:#26a2ff;
			color: #fff;
		}
	}
}
.goodsdesc{
	padding:10px;
	p{
		color: #555555
	}
}
</style>
