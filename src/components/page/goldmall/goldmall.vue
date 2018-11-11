<template>
    <div>
    	<mt-header title="金币商城">
		  	<div slot="left">
		    	<mt-button icon="back" @click="goBack()"></mt-button>
		  	</div>
		</mt-header>
		<div class="gold-wrapper">
			<h2>皮一下，喜欢的话欢迎打赏，推荐使用微信/支付宝支付</h2>
			<div>
				<img src="./p1.png">
				<div>微信支付</div>
			</div>
			<div>
				<img src="./p2.png">
				<div>支付宝支付</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	
	data () {
		return {

		}
	}
}
</script>
<style scoped="scoped" lang="scss">
.gold-wrapper{
	h2{
		color:#836FFF;
		padding: 10px;
	}
	div{
		text-align: center;
	}
}
</style>
