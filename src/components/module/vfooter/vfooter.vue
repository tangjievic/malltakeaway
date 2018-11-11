<template>
    <div class="footer-wrap">
    	<ul class="flex-layout">
    		<li class="flex-1" :class="state==1?'actived':''" style="text-align: center;" @click="goPage('shouye',1)">
    			<i class="iconfont icon-home" style="font-size:28px"></i>
    			<div class="footer-m">首页</div>
    		</li>
    		<li class="flex-1" :class="state==2?'actived':''" style="text-align: center;" @click="goPage('htmlpage',2)">
    			<i class="iconfont icon-HTML-fill" style="font-size:28px"></i>
    			<div class="footer-m">HTML5</div>
    		</li>
    		<li class="flex-1" :class="state==3?'actived':''" style="text-align: center;" @click="goPage('orderpage',3)">
    			<i class="iconfont icon-file-add" style="font-size:28px"></i>
    			<div class="footer-m">订单</div>
    		</li>
    		<li class="flex-1" :class="state==4?'actived':''" style="text-align: center;" @click="goPage('mypage',4)">
    			<i class="iconfont icon-user" style="font-size:28px"></i>
    			<div class="footer-m">我的</div>
    		</li>
    	</ul>
    </div>
</template>

<script>
import {mapState, mapActions, mapMutations } from 'vuex'
export default {
    props:{
        state:{
            type:Number,
            default(){
                return 0
            }
        }
    },
	data () {
		return {

		}
	},
    methods:{
        ...mapActions({
            changeShouye:'changeShouye'
        }),
        goPage(value,s){
            this.$router.push({name:value})
            //console.log(s)
            this.changeShouye(s)
        }
    },
}
</script>
<style scoped="scoped" lang="scss">
.footer-wrap{
	position:fixed;
	left: 0;right: 0;height:50px;
	z-index: 999;
	bottom: 0;
	padding:5px;
	background:#fff;
	box-shadow: 0 0 10px #555555;
	.footer-m{
		font-size: 12px;
	}
    .flex-layout{
        .actived{
            color:#26a2ff;
        }
    }
}
</style>
