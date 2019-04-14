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
console.log('this.$store.state', store.state)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
