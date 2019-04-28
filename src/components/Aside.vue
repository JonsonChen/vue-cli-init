<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-menu default-active="1" router class="el-menu-vertical-demo">
      <el-menu-item index="1" :route="{path: '/'}">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航</span>
        </template>
        <el-menu-item index="2-1" :route="{path: '/about'}">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
