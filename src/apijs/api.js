/*
* @Author: 唐杰/tangjie
* @Date:   2018-11-04 21:19:19
* @Last Modified by:   唐杰/tangjie
* @Last Modified time: 2018-11-10 22:59:14
*/
import axios from 'axios'
const SEVERURL = "http://open.wap.shop.mob.com";
const SEVERURLA = "http://apicloud.mob.com"
/*axios封装*/
let tj_get = (api,params,callback)=>{
	axios({
		method: 'get',
		url: `${SEVERURL}/${api}`,
		params:params
	}).then((res)=>{
		callback(res)
	});
}
let tj_post = (api,params,callback)=>{
	axios({
		method: 'post',
		url: `${SEVERURL}/${api}`,
		headers:{
			'Content-type':'application/json',
			'key':'2892255b74690'
		},
		data:params
	}).then((res)=>{
		callback(res)
	});
}
//产品详情列表
const goodsList = (params,callback)=>{
	let api = 'productMallShow/queryCommodityByCondition';
	tj_post(api,params,callback);
}
//配送策略
const peiSong = (params,callback)=>{
	let api = 'productMallShow/queryTransportStrategy'
	tj_post(api,params,callback);
}
//分类详情
const classify = (params,callback)=>{
	let api = 'productMallShow/queryLabels'
	tj_post(api,params,callback);
}
//获取商品详情
const getGoodDtail = (params,callback)=>{
	let api = 'productMallShow/queryProductDeatilById'
	tj_post(api,params,callback)
}
export{
	goodsList,
	peiSong,
	classify,
	getGoodDtail,
}