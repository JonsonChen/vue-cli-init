import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'
import EnvConfig from './Http/env_config'
import Http from './Http/index'
import Util from './util'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$config = EnvConfig
Vue.prototype.$http = Http
Vue.prototype.$util = Util
console.log('$config', EnvConfig)
console.log('$util', Util)
console.log('$store.state', store.state)

router.beforeEach((to, from, next) => {
  console.log('router', to, from)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
