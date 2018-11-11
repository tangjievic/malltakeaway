<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
 
<script>
import { Toast } from 'mint-ui';
import { mapState } from 'vuex'
export default {
  name: 'App',
  data(){
    return{ 

    }
  },
  computed:{
    ...mapState({
      shouyestatues:state=>state.shouyestatues,
    })
  },
  methods:{
    /*实际项目中这里是要拿到存储在本地的token信息，用此token向用户接口发送请求，以免用户重复输入密码登陆。*/
    getToken(){
      /*代码区域，因为没有接口，就不写了，原理说一下，当信息获取不到，说明token过期，返回登陆页面*/
      let t=localStorage.getItem("token");
      if(t){
         /*请求接口*/
      }else{
        // Toast({
        //   message: '登陆信息已过期',
        //   position: 'middle',
        //   duration: 2000
        // });
        /*如果项目要求，这个拦截器就是必要的啦*/
        // setTimeout(()=>{
        //   this.$router.push({name:'loginpage'})
        // },2000)
      }
    },
  },
  created(){
    this.getToken()
    console.log(this.shouyestatues)
  }
}
</script>
<style>
/*css的rest样式*/
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }body, button, input, select, textarea { font:12px/1.5tahoma, arial, /5b8b/4f53; }h1, h2, h3, h4, h5, h6{ font-size:100%; }address, cite, dfn, em, var { font-style:normal; }code, kbd, pre, samp { font-family:couriernew, courier, monospace; }small{ font-size:12px; }ul, ol { list-style:none; }a { text-decoration:none; }a:hover { text-decoration:underline; }sup { vertical-align:text-top; }sub{ vertical-align:text-bottom; }legend { color:#000; }fieldset, img { border:0; }button, input, select, textarea { font-size:100%; }table { border-collapse:collapse; border-spacing:0; }

/*工具布局样式*/
  /*flex布局*/
  .flex-layout{
    display: flex;
  }
  .flex-c{
    align-items: center;
  }
  .flex-w{
    flex-wrap: wrap;
  }
  .flex-1{flex:1}
  .flex-2{flex:2}
  .flex-3{flex:3}
  .flex-4{flex:4}
  .flex-5{flex:5}
  .flex-6{flex:6}
  .flex-7{flex:7}
  .flex-8{flex:8}
  .flex-9{flex:9}
  .flex-10{flex:10}
  /*浮动布局*/
  .float-clear::after{
    content: '';
    display:block;
    clear: both;
  }
  /*文本处理*/
  .txt-c{
    text-align: center;
  }
  .ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /*border-1px*/
  .border-1{
    position: relative;
  }
  .border-1::after{
    display: block;
    content: "";
    position:relative;
    left:0;
    bottom:0;
    width:100%;
    border-top:1px solid #e5e6e8;
  }
  @media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
    .border-1::after{
      -webkit-transform:scaleY(0.7);
      transform:scaleY(0.7);
    }
  }
  @media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
    .border-1::after{
      -webkit-transform:scaleY(0.5);
      transform:scaleY(0.5);
    }
  }
  /*box-show*/
  .boxshadow: {
    box-shadow: 0 1px 1px rgba(176,176,176,0.5)
  }
</style>
