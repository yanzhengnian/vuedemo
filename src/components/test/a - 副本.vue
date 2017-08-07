<template>
<div>
	{{ hello }}--- {{size}} --- {{str}}
	<button @click="emitMyEvent">emit</button>
	<button @click="getParam">getParam</button>
	<router-view></router-view>
</div>
</template>

<script type="text/javascript">
export default {
	props: {
		size: {
			type: Number
		},
		str: {
			type: Array
		}
	},
	data() {
		return {
			hello: 'i am component A'
		};
	},
	methods: {
		emitMyEvent() {
			// 触发父组件事件
			this.$emit('my-event', this.hello);
		},
		getParam() {
			console.log(this.$route.params);
		}
	}
};
</script>

<style>
	
</style>