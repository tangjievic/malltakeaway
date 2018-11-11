<template>
    <div class="star" :class="starType">
    	<span v-for="item in itemClasses" :class="item" class="star-item"></span>
    </div>
</template>

<script>
/*使用常量便于维护*/
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
export default {
	props:{
		size:{
			type:Number
		},
		score:{
			type:Number
		}
	},
	data () {
		return {

		}
	},
	computed:{
		starType(){
			return `star${this.size}`
		},
		itemClasses(){
			let result = [];
			let score = Math.floor(this.score*2)/2;//向下取0.5值
			let hasDecimal = (score%1 !==0);
			//console.log(hasDecimal)
			let integer = Math.floor(score);
			console.log(integer)
			for(let i=0;i<integer;i++){
				result.push(CLS_ON)
			}
			if(hasDecimal){
				result.push(CLS_HALF);
			}
			while(result.length<LENGTH){
				result.push(CLS_OFF);
			}
			return result;
		}
	},
	created(){
		console.log(this.itemClasses)
	}
}
</script>
<style scoped="scoped" lang="scss">
.star{
	font-size: 0;
	.star-item{
		display: inline-block;
		background-repeat: no-repeat;
	}
	&.star48{
		.star-item{
			width: 20px;height: 20px;
			margin-right: 22px;
			background-size: 20px 20px;
			&:last-child{margin-right:0}
			&.on{
				background-image: url("./star48_on@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star48_on@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star48_on@2x.png")
				}
			}
			&.half{
				background-image: url("star48_half@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star48_half@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star48_half@2x.png")
				}
			}
			&.off{
				background-image: url("star48_off@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star48_off@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star48_off@2x.png")
				}
			}
		}
	}
	&.star36{
		.star-item{
			width: 15px;height: 15px;
			margin-right: 16px;
			background-size: 15px 15px;
			&:last-child{margin-right:0}
			&.on{
				background-image: url("star36_on@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star36_on@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star36_on@2x.png")
				}
			}
			&.half{
				background-image: url("star36_half@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star36_half@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star36_half@2x.png")
				}
			}
			&.off{
				background-image: url("star36_off@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star36_off@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star36_off@2x.png")
				}
			}
		}
	}
	&.star24{
		.star-item{
			width: 10px;height: 10px;
			margin-right: 3px;
			background-size: 10px 10px;
			&:last-child{margin-right:0}
			&.on{
				background-image: url("star24_on@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star24_on@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star24_on@2x.png")
				}
			}
			&.half{
				background-image: url("star24_half@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star24_half@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star24_half@2x.png")
				}
			}
			&.off{
				background-image: url("star24_off@2x.png");
				@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
				    background-image: url("star24_off@3x.png")
				}
				@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
				    background-image: url("star24_off@2x.png")
				}
			}
		}
	}
}
</style>
