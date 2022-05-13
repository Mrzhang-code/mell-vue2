import Vue from "vue";
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
// import mutations from './mutations';
// import actions from './actions';

// 1.安装插件、
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
    state: {
        carList: []
    },
    getters: {
        cartLength(state) {
            return state.cartList.length
        }
    },
    mutations: {
        addCart(state,payload) {
            // 判断是否存在商品
            const oldPayload = state.carList.find(item => item.iid === payload.iid)
    
            if(oldPayload) {
                oldPayload.count += 1
            }else{
                payload.check = true
                payload.count = 1
                state.carList.push(payload)
            }
    
        }
    },
    // actions,
    // mutations,

})

// 3.挂载到vue实例上
export default store