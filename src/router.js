import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/loginRegister/Login.vue'
import Register from './views/loginRegister/Register.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于'
      }
    }
  ]
})
