/*
* @Author: 唐杰/tangjie
* @Date:   2018-11-08 13:06:17
* @Last Modified by:   唐杰/tangjie
* @Last Modified time: 2018-11-11 15:48:22
*/
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
Vue.use(Vuex)
const state = {
	shouyestatues:1,
}
const mutations = {
	changeShouye(state,payload){
		state.shouyestatues = payload;
		console.log(state,payload)
	}
}
const actions = {
	changeShouye({commit},value){
		commit('changeShouye',value)
	}
}
export default new Vuex.Store({
	modules:{
		login
	},
	state,
	mutations,
	actions
})