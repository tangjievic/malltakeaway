// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './globaljs/global.js'//扩展全局vue原型方法或属性
/*引入阿里云图标*/
import './common/iconfont/iconfont.css'
/*引入mint*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/*引入vuex*/
import store from './vuex/store.js'
Vue.use(MintUI)

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
