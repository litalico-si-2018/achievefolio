import Vue from 'vue'
import Router from 'vue-router'
import Mypage from '@/pages/Mypage'
import Users from '@/pages/Users'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Mypage
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User
    }
  ]
})
