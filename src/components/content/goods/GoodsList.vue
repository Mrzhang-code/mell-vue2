<template>
    <div class="goods">
        <goods-item v-for="(item,i) in goods.list" :key="i" :item="item" class="item"></goods-item>
    </div>
</template>

<script>
import GoodsItem from "@/components/content/goods/GoodsItem.vue"

export default {
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        GoodsItem
    }
}
</script>

<style scoped>
.goods{
    margin-bottom: 49px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.item{
    width: 48%;
}
</style>