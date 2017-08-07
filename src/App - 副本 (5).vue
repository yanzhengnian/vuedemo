<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 访问过的页面缓存 -->
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <router-link to="apple">to apple</router-link>
    <router-link :to="{name:'applePage'}">to apple name</router-link>
    <router-link :to="{path:'/apple'}">to apple</router-link>
    <router-link :to="{path:'/banana'}">to banana</router-link>
    <router-link :to="{path:'/apple/red'}">to apple red</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
