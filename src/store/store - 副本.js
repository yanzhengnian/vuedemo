import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		totalPrice: 0
	},
	getters: {
		getTotal(state) {
			console.log(state.totalPrice);
			return state.totalPrice;
		}
	},
	mutations: {
		increment(state, price) {
			state.totalPrice += price;
		},
		decrement(state, price) {
			state.totalPrice -= price;
		}
	},
	actions: {
		increment(context, price) {
			// actions中调用API
			// api(id, function(){

			// });
			context.commit('increment', price);
		},
		decrement(context, price) {
			context.commit('decrement', price);
		}
	}
});
