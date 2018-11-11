/*
* @Author: 唐杰/tangjie
* @Date:   2018-11-08 10:16:10
* @Last Modified by:   唐杰/tangjie
* @Last Modified time: 2018-11-11 16:24:05
*/
import Vue from 'vue'
import { Toast } from 'mint-ui';
/*这个文件就是给vue的原型添加发公共方法，方便后续调用*/
/*图片处理*/
Vue.prototype.imgPaths=(value)=>{
	if(!value){
		return 'static/img/zwfp.png'
	}else{
		return value
	}
}
//返回上一级
Vue.prototype.goBack =function(){
	this.$router.go(-1)
}
//检查是否为空
Vue.prototype.isEmpty=function(value){
	if(value){
		return false
	}else{
		return true
	}
}
//手机号码格式
Vue.prototype.phoneFormat = function(value){
	let test = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/g
	if(!test.test(value)){
		Toast({
		  	message: '手机号格式不正确',
		  	position: 'middle',
		  	duration: 2000
		});
		return true
	}else{
		return false
	}
}