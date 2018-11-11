/*
* @Author: 唐杰/tangjie
* @Date:   2018-11-11 13:04:49
* @Last Modified by:   唐杰/tangjie
* @Last Modified time: 2018-11-11 16:39:24
*/
/*登陆注册状态管理,模拟登陆*/ 
const state ={
	phone:'',
	username:'',
	password:'',
	loginstate:false,
}

const mutations = {
	setUser(state,data){
		state.phone = data.phone
		state.username = data.username
		state.password = data.password
	},
	setLogin(state,data){
		state.loginstate = data
	}
}
export default {
	namespaced:true,
	state,
	mutations,
}