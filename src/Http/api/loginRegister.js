import apiGather from './apiGather'
import { get, post } from '../http'
export default {
  login (params) {
    return get(apiGather.login, params)
  },
  register (data) {
    return post(apiGather.register, data)
  }
}
