<template>
    <div>
    	<mt-header title="其他页面">
		  	<div slot="left">
		    	<mt-button icon="back" @click="goBack()"></mt-button>
		  	</div>
		</mt-header>
		<div class="other-wrapper">
			<img src="./other.jpg">
		</div>
		<div class="other-msg">
			这部分因为没有mock数据api，我也只能写样式，但这部分样式不难，我就不写了
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
.other-wrapper{
	text-align: center;
	img{
		width:80%;
		margin-top:20px;
	}
}
.other-msg{
	padding:10px;
	color: #A9A9A9;
}
</style>
