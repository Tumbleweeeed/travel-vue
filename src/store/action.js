export default {
	switchCity (ctx,res) {
		ctx.commit('sendCity',res)
	}
}