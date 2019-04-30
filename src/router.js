import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/loginRegister/Login.vue'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/loginRegister/Register.vue'),
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        title: '关于'
      }
    }
  ]
})
