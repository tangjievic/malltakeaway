<template>
	<div>
	    <div class="goods flex-layout">
	    	<div class="menu-wrapper">
	    		<ul>
	    			<li v-for="(list,index) in goodslist" class="menu-item" 
	    			:class="goodlistindex==index?'actived':''" @click="scrollTo(index)">
	    				<span class="text border-1" style="text-align: center;">
		    				<span v-if="list.labelId=='222764301601751040'" class="icon-1"></span>
		    				<span v-if="list.labelId=='222764435064356864'" class="icon-2"></span>
		    				<span>{{list.labelName}}</span>
		    			</span>
	    				<!-- <span class="text border-1">{{list.labelName}}</span> -->
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="foods-wrapper flex-1" ref="scoll_parent" @mousewheel="scrollWheel()" @scroll="scrollWheel()">
	    		<ul v-for="(list,index) in goods" class="foodlist">
	    			<li class="title">{{goodslist[index].labelName}}</li>
	    			<li v-for="(lst,index) in list" class="food-item border-1px">
	    				<div class="flex-layout" style="align-items: center;position: relative;">
		    				<div class="icon flex-2">
		    					<img :src="imgPath(lst.commodityList[0].imgUrl.src)" style="width:57px;height: 57px;vertical-align:middle;">
		    				</div>
		    				<div class="flex-8" @click="toGoodsDetail(lst.productId)">
			    				<div>
			    					<h2 class="name">{{lst.productName}}</h2>
			    				</div>
			    				<div class="extra">
			    					<span>月售:{{lst.productSales}}</span>
			    				</div>
			    				<div class="price">
			    					<span>价格：
			    						<span style="color:#FF4040;">
			    							<span style="color:#FF4040;font-size:10px">￥</span>
			    							{{Number(lst.commodityList[0].currentCost)/100}}
			    						</span>
			    					</span>
			    				</div>
			    			</div>
			    			<div class="addcart">
		    					<add-control :food="lst"></add-control>
		    				</div>
			    		</div>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
	    <div class="shopcarts">
	    	<shop-cart :fee="selectFoods"></shop-cart>
	    </div>
	</div>
</template>

<script>
import {goodsList,classify,peiSong} from '@/apijs/api.js'
import shopCart from '@/components/module/shopcart/shopCart'
import addControl from '@/components/module/addcontrol/addcontrol'
export default {
	components:{
		shopCart,
		addControl,
	},
	data () {
		return {
			goodslist:[],
			goods:[],//商品
			scrollchild:[],
			goodlistindex:0,//左侧菜单索引，序号初始化
			splitarr:[],//菜单引索数组
			youfei:{},//配送策略
		}
	},
	computed:{
		selectFoods(){
			let goods = [];
			this.goods.forEach((item,index)=>{
				item.forEach((i,j)=>{
					if(i.count){
						goods.push(i)
					}
				})
			})
			return goods
		}
	},
	methods:{
		//图片处理函数,有时候获取数据并没有图片，就要做如下处理，有图片值返回图片值，没图片就返回一个默认值
		imgPath(value){
			if(!value){
				return 'static/img/zwfp.png'
			}else{
				return value
			}
		},
		//获取父级滚动
		scrollWheel(){
			let s = this.$refs.scoll_parent.scrollTop;
			//console.log(s)
			this.splitarr.forEach((item,index)=>{
				if(item[0]<=s&&item[1]>s){
					this.goodlistindex = index
				}
			})
			//console.log(this.goodlistindex)
		},
		//分割数组
		quxian(arr){
			let arrchild =[],length=0;
			for(let i = 0;i<=arr.length;i++){
				if(i==arr.length){
					arrchild.push([length,length+10])
				}else{
					arrchild.push([length,length+arr[i]])
					length = length+arr[i]
				}
			}
			return arrchild
		},
		//获取子级ul的高度，推送到数组存储
		scrollChild(){
			let arr = [];
			let p = this.$refs.scoll_parent;
			let c = p.querySelectorAll('.foodlist');
			//console.log(c)
			c.forEach((item,index)=>{
				arr.push(item.scrollHeight)
			})
			return arr
		},
		//点击菜单滚动
		scrollTo(indexs){
			//console.log(indexs)
			//console.log(this.splitarr)
			let p = this.$refs.scoll_parent
			this.goodlistindex = indexs
			p.scrollTop = this.splitarr[indexs][0]
		},
		//加入购物车
		addShopcart(value){//value是购物车id
			console.log(this.goods)
			//其实实际项目中这里是要调用添加购物接口的，但是因为我没接口，所以就模拟一下咯
		},
		//进入商品详情
		toGoodsDetail(value){
			console.log(value)
			this.$router.push({name:'goodsdetail',query:{id:value}})
		}
	},
	created(){
		//初始化数据，获取分类详情
		classify({size:20},(r)=>{
			let arr = [],temp = [];
			if(r.data.status===200){
				this.goodslist = r.data.res.labelList
				this.goodslist.forEach((item,index)=>{//依照分类进行商品查询
					goodsList({
						lableList:[item.labelId]
					},(res)=>{
						temp.push(res.data.res.list)
						arr[index] = res.data.res.list
						//console.log(index)//异步index不是按顺序的
						//console.log(temp.length)
						if(temp.length===this.goodslist.length){
							this.goods = arr
							this.$nextTick(()=>{
								this.scrollchild = this.scrollChild()
								this.splitarr = this.quxian(this.scrollchild)
							})
							console.log(this.goods)
						}
					})
				})
			}
		})
	},
	mounted(){
		peiSong({version:1},(res)=>{
			/*本来这个接口应该获取到配送策略，然后获取到配送价格，传给上面的*/
			if(res.data.status ==200){
				this.youfei = res.data.res.transportStrategyList[0]
				this.youfei.fee =0
			}
		})
	}
}
</script>
<style scoped="scoped" lang="scss">
.goods{
	position:absolute;
	top:181px;
	bottom:46px;
	width:100%;
	overflow:hidden;
	.menu-wrapper{
		overflow:auto;
		flex:0 0 80px;
		background-color:rgba(176,176,176,0.3);
		.menu-item{
			display: table;
			height: 54px;
			width: 100%;
			line-height:20px;
			.icon-1{
				display: inline-block;
				width: 12px;
				height: 12px;
				background-size: 12px;
				background-repeat: no-repeat;
				background-image: url('decrease_3@3x.png');
			}
			.icon-2{
				display: inline-block;
				width: 12px;
				height: 12px;
				background-size: 12px;
				background-repeat: no-repeat;
				background-image: url('discount_3@3x.png');
			}
			.text{
				display: table-cell;
				vertical-align: middle;
				font-size:14px;
			}
		}
		.actived{
			background:#f8fcfb;
		}
	}
	.foods-wrapper{
		overflow: auto;
		.title{
			padding-left:14px;
			height: 26px;
			line-height: 26px;
			border-left: 2px solid #d9dde1;
			font-size:12px;
			color: rgb(147,153,159);
			background: #f3f5f7;
		}
		.foodlist{
			&:last-child{min-height: 100%;}
			.food-item{
				padding:15px;
				&>div{
					position: relative;
					&:after{
						position: absolute;
						content:'';
						display: block;
						bottom:-15px;
						border-top:1px solid rgba(7,17,27,0.1);
						width:100%;
					}
				}
				.icon{
					margin-right:5px;
					text-align:center;
				}
				.name{
					margin: 2px 0 8px 0;
					height: 14px;line-height: 14px;
					font-size:14px;
					color: rgb(7,17,27)
				}
				.extra{
					margin-bottom: 8px;
					line-height: 10px;
					font-size: 10px;
					color:rgb(147,153,159);
				}
				.price{
					font-size: 14px;
				}
				.addcart{
					position: absolute;
					right: 0;
					bottom: 12px;
				}
			}
		}
	}
}
.border-1{
	position: relative;
}
.border-1::after{
	display: block;
	content: "";
	position:absolute;
	left:0;
	bottom:0;
	width:100%;
	border-top:1px solid rgba(7,17,27,0.1);
}
.shopcarts{
	position: fixed;
	z-index: 20;
	bottom: 0;left: 0;right: 0;
}
</style>
