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
			msg: 'i am Banana',
			price: 10
		};
	},
	methods: {
		addOne() {
			// this.$store.commit('increment', this.price);
			this.$store.dispatch('increment', this.price);
		},
		minusOne() {
			// this.$store.commit('decrement', this.price);
			this.$store.dispatch('decrement', this.price);
		}
	}
};
</script>

<style>
	
</style>