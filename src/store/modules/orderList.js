import Vue from 'vue';
const state = {
	orderList: [],
	params: {}
};

const getters = {
	getOrderList: state => state.orderList
};

const actions = {
	fetchOrderList({commit, state}) {
		// , state.params
		Vue.http.get('/api/getOrderList')
		.then((res) => {
			commit('updateOrderList', res.data.data.list);
			// state.orderList = res.data.data.list;
			// state.total = res.data.total;
		});
	}
};

const mutations = {
	updateOrderList(state, payload) {
		state.orderList = payload;
	},
	updateParams(state, {key, val}) {
		state.params[key] = val;
    console.log(state.params);
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
