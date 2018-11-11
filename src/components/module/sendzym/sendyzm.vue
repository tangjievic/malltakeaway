<template>
    <div class="yzm-wrapper">
    	<!-- <button @click="requestApi()">
    		<span v-if="sendshow">{{sendyzm}}</span>
    		<span v-else>已发送({{num}}s)</span>
    	</button> -->
    	<button @click="requestApi" v-if="sendshow"> 
    		{{sendyzm}}
    	</button>
    	<button v-else disabled="disabled">
    		已发送({{num}}s)
    	</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
	props:{
		yzmurl:{
			type:String,
			default(){
				return "1"
			}
		},
		params:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	data () {
		return {
			sendyzm:'发送验证码',
			sendshow:true,
			num:59,
		}
	},
	methods:{
		requestApi(){
			if(Number(this.yzmurl)===1){
				throw new Error('请传入验证码地址')
				return
			}
			this.sendshow = false;
			setInterval(()=>{
				this.num--
				if(this.num===0){
					this.num=59
					this.sendshow=true
				}
			},1000)
			axios({
				method: 'post',
				url: `${this.yzmurl}`,
				data:this.params
			}).then((res)=>{

			},(res)=>{
				throw new Error('网络错误')
			});
		}
	}
}
</script>
<style scoped="scoped" lang="scss">
.yzm-wrapper{
	button{
		border:1px solid #409eff;
		border-radius:5px;
		outline: 0;
		width:100px;
		height:35px;
		text-align: center;
		color: #409eff;
		background-color:#f0f9eb;
		&:active{
			background-color:#409eff;
			color: #fff;
		}
	}
}
</style>
