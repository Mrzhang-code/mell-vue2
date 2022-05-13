export default {
    addCount(state, payload) {
        payload.count += 1
        // console.log('payload.count+1');
    },

    addToCart(state, payload) {
        payload.count = 1;
        // console.log('payload.count=1')
        state.carList.push(payload)
    }
}