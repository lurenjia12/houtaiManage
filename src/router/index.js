import Vue from 'vue'
import Router from 'vue-router'
import orderManage from '@/pages/orderManage'
// import shiyan from '@/pages/shiyan'

Vue.use(Router)

export default new Router({
   routes: [
    {
      path: '/',
      name: 'orderManage',
      component: orderManage
    },
  //   {
  //     path: '/ss',
  //     name: 'shiyan',
  //     component: shiyan
  //   }
  ]
})
