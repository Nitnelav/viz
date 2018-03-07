import Vue from 'vue'
import Router from 'vue-router'

import StartPage from '@/components/StartPage'
import NetworkViz from '@/components/NetworkViz'

Vue.use(Router)

export default new Router({
  mode: 'history', // 'history' mode produces clean, normal URLs
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage,
    },
    {
      path: '/network',
      name: 'NetworkViz',
      component: NetworkViz,
    },
  ]
})