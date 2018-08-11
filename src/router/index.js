import Vue from 'vue'
import Router from 'vue-router'
import Mypage from '@/pages/Mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Mypage
    }
  ]
})
