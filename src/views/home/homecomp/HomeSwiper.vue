<template>
    <div>
        <swiper>
            <swiper-item v-for="(item, i) in banner" :key="i">
                <a :href="item.link">
                    <img :src="item.image" @load="SwiperImgLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'


export default {
  components: { Swiper, SwiperItem },
  props: ['banner'],
  methods: {
      SwiperImgLoad() {
          this.$emit('SwiperImgLoad')
      }
  }
}
</script>

<style scoped>
</style>