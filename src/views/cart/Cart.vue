<template>
    <div id="cart">
        <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
        <scroll class="sa">
            <cart-list :cart-list="cartList"/>
        </scroll>
        <cart-buttom-bar/>
    </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'

import NavBar from '@/components/common/navbar/NavBar.vue'

import cartList from './cartcomp/cartList.vue'
import CartButtomBar from './cartcomp/CartButtomBar.vue'

import { mapGetters } from 'vuex'


export default {
    components: {
        Scroll,
        NavBar,
        cartList,
        CartButtomBar
    },
    computed: {
        cartLength() {
            return this.$store.state.carList.length
        },
        cartList() {
            return this.$store.state.carList
        }
        // ...mapGetters([
        //     'cartLength',
        //     'cartList'
        // ])
    },
    methods: {
    }
}
</script>

<style scoped>
#cart{
    height: 100vh;
    position: relative;
}
.nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
.sa{
    position: absolute;
    top:44px;
    bottom: 93px;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>