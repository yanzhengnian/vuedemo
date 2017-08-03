// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter();

// import router from './router'

/* eslint no-unused-vars: */
// var jquery = require('jquery');
// 插件注入jquery
// require('bootstrap');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // vue2.0需要render渲染
  render: h => h(App)
});
