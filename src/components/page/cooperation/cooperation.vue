<template>
    <div>
    	<mt-header title="合作加盟">
		  	<div slot="left">
		    	<mt-button icon="back" @click="goBack()"></mt-button>
		  	</div>
		</mt-header>
		<div class="gold-wrapper">
			<h2>喜欢我的欢迎加微信，或qq</h2>
			<div>
				<img src="./qq.jpg">
				<div>扫一扫加qq</div>
			</div>
			<div>
				<img src="./weixn.png">
				<div>扫一扫加微信</div>
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
		text-align: center;
	}
	div{
		text-align: center;
		padding: 10px;
	}
}
</style>
