<template>
  <div>
    <div v-if="isFullView">
      <router-view></router-view>
    </div>
    <div v-else>
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
  </div>
</template>
<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
export default {
  components: {
    Aside, Header
  },
  computed: {
    isFullView () {
      if (this.$route.name === 'login' || this.$route.name === 'register') {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    console.log('this.$route', this.$route)
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/reset";
</style>
