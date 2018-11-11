<template>
    <div>
    	<keep-alive>
    		<router-view></router-view>
    	</keep-alive>
    	<v-footer :state="shouyestatues"></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/module/vfooter/vfooter'
import { mapState } from 'vuex'
export default {
	components:{
		vFooter,
	},
	data () {
		return {

		}
	},
	computed:{
	    ...mapState({
	      shouyestatues:state=>state.shouyestatues,
	    })
	},
}
</script>
<style scoped="scoped" lang="scss">
</style>
