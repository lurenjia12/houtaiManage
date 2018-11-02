// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// Vue.use(VueRouter);
Vue.use(iView);

// // 路由配置
// let router = new VueRouter();
//
// router.map(Routers);
// router.start(App, '#app');


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
