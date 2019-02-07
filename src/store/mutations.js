export default {
	sendCity (state,res){
		state.city = res
		try{
			localStorage.city = res
		} catch(e){}
	}
}