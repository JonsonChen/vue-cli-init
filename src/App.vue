<template>
  <div id="app" class="tc">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/style/reset";
</style>
