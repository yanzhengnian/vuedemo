<template>
  <div id="app">
    <img src="./assets/logo.png">
    测试Store: {{ totalPrice }}
    <!-- 访问过的页面缓存 -->
    <Apple></Apple>
    <Banana></Banana>
  </div>
</template>

<script>
import Apple from './components/apple';
import Banana from './components/banana';
export default {
  name: 'app',
  components: {
    Apple,
    Banana
  },
  computed: {
    totalPrice() {
      console.log('99', this.$store.getters);
      return this.$store.getters.getTotal;
    }
  }
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
