import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '上海'
	},
	actions: {
		switchCity (ctx,res) {
			ctx.commit('sendCity',res)
		}
	},
	mutations: {
		sendCity (state,res) {
			state.city = res
		}
	}
})
