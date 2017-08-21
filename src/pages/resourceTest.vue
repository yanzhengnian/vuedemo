<input type="button" value="按钮" @click="get"/>
<template>
	<input type="button" value="按钮" @click="get"/> 
</template>

<script>
export default {
  methods: {
		get() {
			let param = {
				a: 1,
				b: 3
			};

			this.$http.get('/api/get.php', param).then((res) => {
				alert(res.data);
			}, (err) => {
				alert(err.data);
			});
		}
  }
};
</script>

<style scoped> 
</style>
