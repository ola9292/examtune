import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing'
import Account from './views/Account'
import Signup from './views/Signup'
import Test from './views/Test'
import Post from './views/Post'
import Testinfo from './views/Testinfo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
     component: Pricing
    },
    {
      path: '/account',
      name: 'account',
     component: Account
    },
    {
      path: '/signup',
      name: 'signup',
     component: Signup
    },
    {
      path: '/test',
      name: 'test',
     component: Test
    },
    {
      path: '/post',
      name: 'post',
     component: Post
    },
    {
      path: '/testinfo',
      name: 'testinfo',
     component: Testinfo
    }
  ]
})
