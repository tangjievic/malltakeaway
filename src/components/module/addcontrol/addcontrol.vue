<template>
    <div class="cartcontrol flex-layout">
    	<transition name="move">
	    	<div class="cart-decrease flex-1" v-show="food.count>0" @click="decrease()">
	    		<transition  name="roll">
	    		<i class="iconfont icon-minus" style="font-size:18px;padding:2px;border:1px solid #00BFFF;border-radius: 50%;color: #00BFFF"></i>
	    		</transition>
	    	</div>
	    </transition>
    	<div class="cart-count flex-1" v-show="food.count>0">
    		{{food.count}}
    	</div>
    	<div class="cart-add flex-1" @click="add()">
    		<i class="iconfont icon-plus" 
    		style="font-size:18px;background:#00BFFF;border-radius: 50%;color: #ffffff;padding:3px;
    		"></i>
    	</div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
	props:{
		food:{
			type:Object,
		}
	},
	data () {
		return {

		}
	},
	methods:{
		add(){
			if(!this.food.count){
				/*第一次用这个属性值，哈哈哈，用处就是当这个对象没有这个属性，自己添加一个属性，用普通方式添加的属性是不会被vue监听到的，因此要使用Vue.set()这个API接口,而且这个东西还会同步到父组件上*/
				Vue.set(this.food,'count',1)
			}else{
				this.food.count++
			}
			console.log(this.food.count)
		},
		decrease(){
			if(this.food.count>0){
				this.food.count--
			}else{
				this.food.count =0;
			}
		}
	},
	created(){
		//console.log(this.food)
	}
}
</script>
<style scoped="scoped" lang="scss">
.cartcontrol{
	font-size: 0;
	align-items: center;
	.cart-decrease{
		margin-right:5px;
	}
	.cart-count{
		font-size: 16px;
		padding:0 5px;
	}
	.cart-add {
		margin-left:5px;
	}
}
.move-enter-active, .move-leave-active{
	transition:all 1s;
}
.move-enter{
	opacity:0;
	transform: translate3d(24px,0,0);
}
.move-enter-to{
	opacity:1;
	transform:rotate(180deg)
}
.move-leave-to{
	opacity:0;
	transform: translate3d(24px,0,0) rotate(180deg);
}
</style>
