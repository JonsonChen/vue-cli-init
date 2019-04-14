<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="loginDatas border torem">loginDatas: {{userInfo}}</h1>
    <el-button @click="loginAction">loginAction</el-button>
    <el-button @click="logOutAction">logOutAction</el-button>
    <HelloWorld msg="We AppWe AppWe AppWe AppWe AppWe App"/>
    <div v-html="testHtml"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
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
    console.log(this.userInfo)
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
    }
  }
}
</script>
<style lang="scss" scoped>
.loginDatas {
  color: $defaultColor;
}
.border {
  @include border(2px)
}
.torem {
  font-size: px2rem(100)
}
</style>
