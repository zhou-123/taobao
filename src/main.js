import Vue from "vue";
import App from "./App.vue";
// 引入路由模块
import VueRouter from "vue-router";
// 引入index组件
import index from "./components/index.vue";
import goodsInfo from './components/xqy.vue';
// 导入ui框架
import ElementUI from "element-ui";
// 导入css
import "element-ui/lib/theme-chalk/index.css";
// 导入懒加载插件
import VueLazyload from "vue-lazyload";
// 引入css
import "./assets/statics/site/css/style.css";
// 引入模块 moment
import moment from "moment";
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 


Vue.use(iView);

// 导入 axios模块 目的是让所有组件都可以使用
import axios from "axios";
axios.defaults.baseURL = 'http://47.106.148.205:8899';
// 挂载到Vue的原型上->Vue实例化出来的对象 共用 vue-resource this.$http
Vue.prototype.axios = axios;


// 使用路由中间件
Vue.use(VueRouter);
// 使用ui中间件
Vue.use(ElementUI);
// 使用懒加载中间件
Vue.use(VueLazyload,{
  // 图片当做资源来引入
  loading:require('./assets/statics/img/loading2.gif')
});

// 注册路由规则
const router = new VueRouter({
  routes: [
    // 访问的是 / 打到(重定向)
    { path: "/", redirect: "/index" },
    // index 都显示 index这个组件
    {
      path: "/index",
      component: index
    },
    {
      path:"/goodsInfo/:id",
      component:goodsInfo
    }
  ]
});
// 注册全局过滤器
Vue.filter('cutTime',function(value){
  return moment(value).format("YYYY年MM月DD日");
});






Vue.config.productionTip = false;

new Vue({
  // 选择器
  el: "#app",
  // 挂载到vue
  router,
  // 渲染 App组件
  render: h => h(App)
});
