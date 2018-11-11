<template>
    <div>
    	<mt-header fixed title="HTML5发现" style="background-color: #fff;color:#555555"></mt-header>
    	<div class="htmlbg">
    		<div class="bg-wrapper">
    			<img src="./bg1.png">
    		</div>
    		<div class="bg-content">
    			<div>代码敲累了,来小吃一会!</div>
    			<div>豪大大餐厅，程序员的专属餐厅</div>
    		</div>
    		<div style="text-align: center;margin-top:20px">
    			<mt-button size="small" type="primary" plain @click="toGoodlist()">点击查看详情</mt-button>
    		</div>
    	</div>
    </div>
</template>

<script>
export default {
	
	data () {
		return {

		}
	},
	methods:{
		toGoodlist(){
			this.$router.push({name:'good'})
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
.htmlbg{
	position: absolute;
	z-index: -1;
	top:40px;left:0;right: 0;bottom:60px;
	background-image: url(./ht.jpg);
	background-size:100% 100%;
	background-repeat: no-repeat;
	overflow:auto;
}
.bg-wrapper{
	text-align: center;
	padding-top: 20px;
	img{
		max-width: 312px;
	}
}
.bg-content{
	div{
		color:#ffffff;
		&:first-child{
			margin-top:50px;
			margin-left:20px;
			font-size: 18px;
			font-weight: 600;
			transform: rotate(20deg);
			text-decoration: underline;
		}
		&:last-child{
			margin-top:30px;
			text-align: right;
			margin-right: 20px;
			transform: rotate(-20deg);
			font-size: 24px;
			font-weight:600;
			text-decoration: underline;
		}
	}
}
</style>
