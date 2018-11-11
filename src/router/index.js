import Vue from 'vue'
import Router from 'vue-router'

import mainPage from '@/components/page/mainPage.vue'//主要路由页面
    import shouYe from '@/components/page/shouye/shouye'//首页
    import htmlPage from '@/components/page/htmlpage/htmlPage'//html5模块
    import orderPage from '@/components/page/orderpage/orderpage'//订单
    import myPage from '@/components/page/mypage/mypage'//订单

import loginPage from '@/components/page/loginpage/loginpage'//登陆
import registerPage from '@/components/page/registerpage/registerpage'//注册
import otherPage from '@/components/page/otherpage/otherpage'//其他页面
import goldMalle from '@/components/page/goldmall/goldmall'//金币商城
import cooperation from '@/components/page/cooperation/cooperation'//加盟合作
import goodsdetail from '@/components/page/goodsdetail/goodsdetail'//商品详情

import HomePage from '@/components/page/homepage/HomePage' //主页
	import Comment from '@/components/page/homepage/comment/Comment'//评论
	import Good from '@/components/page/homepage/good/Good'//商品
	import Merchant from '@/components/page/homepage/merchant/merchant'//商家

Vue.use(Router)
export default new Router({
  routes: [
    {
        path:'/mainpage',
        name:'mainpage',
        component:mainPage,
        children:[
            {
                path:'shouye',
                name:'shouye',
                component:shouYe
            },
            {
                path:'htmlpage',
                name:'htmlpage',
                component:htmlPage
            },
            {
                path:'orderpage',
                name:'orderpage',
                component:orderPage
            },
            {
                path:'mypage',
                name:'mypage',
                component:myPage
            }
        ]
    },
    {
    	path:'/homepage',
    	name:'homepage',
    	component:HomePage,
    	children:[
    		{
				path: 'comment',
				name: 'comment',
				component:Comment
    		},
    		{
    			path: 'good',
    			name: 'good',
    			component:Good
    		},
    		{
    			path: 'merchant',
    			name: 'merchant',
    			component:Merchant
    		},
    		{
    			path: '/homepage',
    			redirect: { name: 'good' }
    		}
    	]
    },
    {
        path:'/loginpage',
        name:'loginpage',
        component:loginPage
    },
    {
        path:'/registerpage',
        name:'registerpage',
        component:registerPage
    },
    {
        path:'/otherpage',
        name:'otherpage',
        component:otherPage
    },
    {
        path:'/goldmall',
        name:'goldmall',
        component:goldMalle
    },
    {
        path:'/cooperation',
        name:'cooperation',
        component:cooperation
    },
    {
        path:'/goodsdetail',
        name:'goodsdetail',
        component:goodsdetail
    },
    {
    	path:'/',
    	redirect:{ name: 'shouye'}
    }
  ]
})
