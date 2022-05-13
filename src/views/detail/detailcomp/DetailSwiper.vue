<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item, i) in swiperInfo" :key="i">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'

export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        swiperInfo: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 250px;
}
</style>