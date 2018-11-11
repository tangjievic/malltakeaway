<template>
    <div>
        <!-- 这部分其实就是父子传参 -->
        <headerbox :seller="seller"></headerbox>
        <div class="tab flex-layout">
        	<div class="tab-item flex-1 txt-c border-1" data-type="good" 
            @click="tabChange($event)" :class="tabstate=='good'?'actived':''">
                商品
            </div>
        	<div class="tab-item flex-1 txt-c border-1" data-type="comment" 
            @click="tabChange($event)" :class="tabstate=='comment'?'actived':''">
                评论
            </div>
        	<div class="tab-item flex-1 txt-c border-1" data-type="merchant" 
            @click="tabChange($event)" :class="tabstate=='merchant'?'actived':''">
                商家
            </div>
        </div>
        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import headerbox from'@/components/module/header/header'
export default {
	components:{
		headerbox
	},
	data () {
		return {
            tabstate:'good',
            seller:{
                imgurl:'static/img/head.jpg',
                name:'豪大大餐厅',
                bulletin:'红烧肉是一道著名的大众菜肴，属于热菜。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，做法多达二三十种',
                score:3.6,
            },
		}
	},
    methods:{
        tabChange(e){
            this.tabstate = e.target.dataset.type
            this.$router.push({
                name:e.target.dataset.type
            })
        }
    }
}
</script>
<style scoped="scoped" lang="scss">
    .tab{
    	width:100%;
    	height: 40px;
    	line-height: 40px;
    	.tab-item{
            font-size: 14px;
            color:rgb(77, 85, 93)
    	}
        .actived{
            color:#FF6A6A;
        }
    }
</style>
