<template>
  <div id="app">
    <div v-if="this.$store.state.login.loginDatas">
      <el-container>
        <el-header><Header/></el-header>
        <el-container style="display: flex;">
          <el-aside width="200px"><Aside msg="We AppWe AppWe AppWe AppWe AppWe App"/></el-aside>
          <el-container>
            <el-main><router-view></router-view></el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
export default {
  components: {
    Aside, Header
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/reset";
</style>
