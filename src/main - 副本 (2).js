// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// 全局注册组件
// Vue.component('my-header', {
// 	template: '<p>this is my my-heade</p>',
// 	data: {
// 		id: null
// 	}
// });

// 局部的组件
var myHeaderChild = {
	template: '<p>this is my my-header-child</p>'
};

var myHeader = {
	template: `<p v-on:keydown.enter="">this is my my-header2-{{d}}<br>
	<my-header-child></my-header-child></p>
	
	`,
	components: {
		'my-header-child': myHeaderChild
	},
	data: function () {
		return {
			f: 1,
			d: 3
		};
	}
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    word: 'hello world2'
  },
  components: {
  'my-header': myHeader
  }
});
