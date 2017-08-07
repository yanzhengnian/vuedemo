<template>
	<div>
		{{ msg }}
		<button @click="addOne">addOne</button>
		<button @click="minusOne">minusOne</button>
	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			msg: 'i am Apple',
			price: 5
		};
	},
	methods: {
		addOne() {
			this.$store.dispatch('increment', this.price);
		},
		minusOne() {
			this.$store.dispatch('decrement', this.price);
		}
	}
};
</script>

<style>
	
</style>