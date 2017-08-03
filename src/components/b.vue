<template>
<div>
	{{ hello }} --- {{ numberToDo }}
	<button @click="emitMyEvent">emit</button>
	<!-- 插槽 子组件向父组件传值 -->
	<slot name="header">no header</slot>
	<p>8888888</p>
	<slot name="footer">no footer</slot>
</div>
</template>

<script type="text/javascript">
export default {
	// props: ['number-to-do'],
	props: {
		'number-to-do': [Number, String],
		'my-value': String
	},
	data() {
		return {
			hello: 'i am component B'
		};
	},
	methods: {
		emitMyEvent() {
			// 触发父组件事件
			this.$emit('my-event', this.hello);
		}
	}
};
</script>

<style>
	
</style>