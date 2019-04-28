const state = {
  loginDatas: true
}
const getters = {
  isLogin (state) {
    return state.loginDatas
  }
}
const mutations = {
  login (state, datas) {
    state.loginDatas = datas
  },
  logOut (state, datas) {
    state.loginDatas = datas
  }
}
const actions = {
  loginAction (context, datas) {
    context.commit('login', datas)
  },
  logOutAction (context, datas) {
    context.commit('logOut', datas)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
