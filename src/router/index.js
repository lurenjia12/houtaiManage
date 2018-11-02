import Vue from 'vue'
import Router from 'vue-router'
import orderManage from '@/pages/orderManage'
import quickmark from '@/pages/quickMark'

Vue.use(Router)

export default new Router({
   routes: [
    {
      path: '/om',
      name: 'orderManage',
      component: orderManage
    },
    {
      path: '/qm',
      name: 'quickmark',
      component: quickmark
    }
  ]
})
