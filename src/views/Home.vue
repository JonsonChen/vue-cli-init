<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="loginDatas border torem">loginDatas: {{userInfo}}</h1>
    <el-button @click="loginAction">loginAction</el-button>
    <el-button @click="logOutAction">logOutAction</el-button>
    <!-- <div v-html="testHtml"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      testHtml: null
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.login.loginDatas
    }
  },
  created () {
    this.$http.loginRegister.login({ type: 'yuantong', postid: '222222' }).then(res => {
      this.testHtml = res
    })
  },
  methods: {
    loginAction () {
      this.$store.dispatch('login/loginAction', true)
    },
    logOutAction () {
      this.$store.dispatch('login/logOutAction', false)
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>
<style lang="scss" scoped>
.loginDatas {
  color: $defaultColor;
}
.border {
  @include border(1px, solid, #e7e7e7);
  @include marginPair(10px, 2px)
}
.torem {
  font-size: px2rem(24)
}
</style>
