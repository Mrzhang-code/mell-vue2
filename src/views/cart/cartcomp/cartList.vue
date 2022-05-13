<template>
    <div>
        <cart-list-item v-for="item in cartList" :key="item.iid" :item="item"></cart-list-item>
    </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
    props:['cartList'],
    components: {
        CartListItem
    }
}
</script>

<style scoped>

</style>