import axios from 'axios'
// import config from './env_config'
import { Message } from 'element-ui'
import Util from '../util'

axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.timeout = 30 * 1000
// 请求拦截器
axios.interceptors.request.use(
  req => {
    const token = Util.getToken()
    req.data = JSON.stringify(req.data)
    if (token) {
      req.headers.Token = token
    }
    console.log(`token: ${token}`)
    return req
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error || error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          this.$router.replace({
            path: '/login',
            query: {}
          })
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Message.error({
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true
          })
          // 清除token
          localStorage.removeItem('token')
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            this.$router.replace({
              path: '/login',
              query: {}
            })
          }, 1000)
          break
        // 404请求不存在
        case 404:
          Message.error('网络请求不存在')
          break
        // 其他错误，直接抛出错误提示
        default:
          Message.error(error.response.data.message)
      }
      return Promise.reject(error.response)
    }
  }
)
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
