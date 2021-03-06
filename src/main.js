import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入建好的router文件夹
import router from './router';

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// //使用
Vue.use(ElementUI);



//引入发送网络请求的axios
import axios from 'axios';
//把axios放在Vue的原型对象上面
Vue.prototype.$axios = axios;

import echarts from "echarts";
Vue.prototype.$echarts = echarts


router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if (isChunkLoadFailed) {
    window.location.reload();
    // router.replace(router.history.pending.fullPath);
  } else {
    window.console.log(error)
  }
});



new Vue({
  //把router注入到vue实例中
  router,

  render: h => h(App),
}).$mount('#app')