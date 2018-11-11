<template>
    <div>
    	<header>
    		<div class="input-box">
    			<div class="input-wrapper">
    				<i class="iconfont icon-search"></i><input type="" placeholder="选择美食，全场惊喜">
    			</div>
    		</div>
    	</header>
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
header{
	position: relative;
	height:120px;
	background-image: url('./hg2.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.input-box{
	position: absolute;
	bottom: 10px;left:0;right:0;
	padding: 0 15px;
	.input-wrapper{
		margin:0 auto;
		height:30px;
		border-radius:30px;
		background: #fff;
		padding:0 15px;
		input{
			width:80%;height: 30px;
			border: 0;
			outline: 0;
			text-align: center;
		}
	}
}
</style>
