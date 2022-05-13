<template>
    <div class="detail">
        <detail-navbar/>
        
        <scroll
            class="content"
            :probe-type="3"
        >
            <detail-swiper :swiper-info="swiperInfo"></detail-swiper>
            <goods-info :goods="goodsInfo"></goods-info>
            <shop-info :shop="shopInfo"/>
            <detail-info :detail-info="detailInfo"/>
            <detail-params-info :params-info="paramsInfo"/>
            <detail-commends-info :comment-info="commentInfo"/>
            <!-- <goods-list :goods="recommend"/> -->
            <goods-list :goods="recommend"></goods-list>
        </scroll>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    </div>
</template>

<script>
import { getGoodsDetail,Goods,getRecommend } from '@/network/detail'

import Scroll from '@/components/common/scroll/Scroll.vue'

import detailNavbar from '@/views/detail/detailcomp/datailNavbar.vue'
import DetailSwiper from "@/views/detail/detailcomp/DetailSwiper.vue"
import GoodsInfo from "@/views/detail/detailcomp/GoodsInfo.vue"
import ShopInfo from "@/views/detail/detailcomp/ShopInfo.vue"
import DetailInfo from './detailcomp/DetailInfo.vue'
import DetailParamsInfo from './detailcomp/DetailParamsInfo.vue'
import DetailCommendsInfo from './detailcomp/DetailCommendsInfo.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import DetailBottomBar from './detailcomp/DetailBottomBar.vue'

export default {
    name: "Detail",
    components: {
        detailNavbar,
        DetailSwiper,
        GoodsInfo,
        ShopInfo,
        Scroll,
        DetailInfo,
        DetailParamsInfo,
        DetailCommendsInfo,
        GoodsList,
        DetailBottomBar
    },
    data() {
        return {
            iid: null,
            swiperInfo: [],
            goodsInfo: {},
            shopInfo: {},
            detailInfo: {},
            paramsInfo: {},
            commentInfo: {},
            recommend: {}
        }
    },
    created() {
        // 1.保存传递过来的id
        this.iid = this.$route.params.iid
        // 2.根据id请求商品详情数据
        getGoodsDetail(this.iid).then(res => {
            const data = res.result
            this.swiperInfo = data.itemInfo.topImages
            // console.log(this.swiperInfo)
            // 3.创建商品信息的对象
            this.goodsInfo = new Goods(data.itemInfo, data.columns,data.shopInfo.services)
            // console.log(this.goodsInfo)
            // 4.取出商家信息
            this.shopInfo = data.shopInfo
            // 5.取出商品信息
            this.detailInfo = data.detailInfo
            // 6.取出参数信息
            this.paramsInfo = data.itemParams
            // 7.取出评论信息
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]  
            }
        })
        // 3.请求推荐数据
        getRecommend().then(res => {
            console.log(res)
            this.recommend = res.data
            // console.log('----',this.recommend)
        })
    },
    methods: {
        // 上拉加载更多
        onpullingUp() {
            // console.log('加载更多')
            this.getHomeData(this.currentType)
        },
        addToCart() {
            // 获取购物车要的数据
            const obj = {}
            obj.iid = this.iid
            obj.imgURL = this.swiperInfo[0]
            obj.title = this.goodsInfo.title
            obj.desc = this.goodsInfo.desc
            obj.price = this.goodsInfo.realPrice
            // 将数据添加到Store中
            // this.$store.carList.push(obj)
            this.$store.commit('addCart', obj)
            // console.log(obj)
            // this.$store.dispatch('addCart', obj)
            console.log('----')
        }
    }   
}
</script>

<style scoped>
.detail{
    height: 100vh;
    position: relative;
    z-index: 7;
    background-color: #fff;
}
.content {
    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }
</style>