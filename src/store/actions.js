export default {
    addCart(context,payload) {
        // 判断是否存在商品
        const oldPayload = context.state.carList.find(item => item.iid === payload.iid)
        if(oldPayload) {    
            // oldPayload.count += 1
            // console.log('addCount');
            context.commit('addCount', oldPayload)
        }else{
            // console.log('addToCart');
            // payload.count = 1
            // context.state.carList.push(payload)
            context.commit('addToCart', payload)
        }

        // context 上下文，里面有state和commit两个属性：{state，commit}
    }
}