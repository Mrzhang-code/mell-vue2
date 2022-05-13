const getters = {
	cartLength(state) {
        console.log('--',state.cartList)
		return state.cartList.length
	},
	cartList(state) {
		return state.cartList
	}
}

export default getters