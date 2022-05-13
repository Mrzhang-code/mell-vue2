<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
            <tab-control
            :titles="['流行','新款','精选']"
            @tabClick="tabClick"
            ref="tabcontrol1"
            class="tab-control"
            v-show="isShowTabControl"
            ></tab-control>

        <scroll class="aaa"
        ref="wrapper"
        :probe-type="3"
        @onscroll="onscroll"
        :pull-up-load="true"
        @pullingUp="pullingUp"
        >
            <div>
            <home-swiper :banner="banner" class="home-swiper" @SwiperImgLoad="SwiperImgLoad"></home-swiper>
            <home-recommend :recommend="recommend"></home-recommend>
            <a href="https://cat.mogujie.com/zzlx67">
                <img src="~@/assets/img/home/recommend_bg.jpg" class="recommend_bg">
            </a>
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"  ref="tabcontrol2"></tab-control>
            <goods-list :goods="goods[currentType]"></goods-list>
            </div>    
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabcontrol/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backtop/BackTop.vue'
// import Scroll from 'better-scroll'

import { getMultiData, getHomeData } from '@/network/home'
import { debounce } from '@/common/utils'

import HomeSwiper from '@/views/home/homecomp/HomeSwiper.vue'
import HomeRecommend from '@/views/home/homecomp/HomeRecommend.vue'



export default {
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommend,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
        data() {
        return{
            banner: [],//轮播图
            recommend: [],
            goods: {
                'pop': { page: 0, list: [] },
                'new': { page: 0, list: [] },
                'sell': { page: 0, list: [] },
            },
            currentType: 'pop',
            isShowBackTop: false,
            // isshow: false,
            tabControlOffsetTop: 0,
            isShowTabControl: false
        }
    },
    created() {
        // 请求多个数据
        this._getMultiData(),
        // 请求商品数据
        this.getHomeData('pop'),
        this.getHomeData('new'),
        this.getHomeData('sell')
    },
    mounted() {
        // 监听item中的图片加载完成
        //加()表示调用refresh函数,不加()表示refresh函数
        const refresh = debounce(this.$refs.wrapper.refresh, 50)
        this.$bus.$on('imgload', () => {
            refresh()
        }) 
    },
    methods: {
        // 监听轮播图图片加载
        SwiperImgLoad() {
                this.tabControlOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
                console.log(this.tabControlOffsetTop)            
        },
        // 请求轮播图等数据
        _getMultiData() {
            getMultiData().then(res => {
                this.banner = res.data.banner.list
                this.recommend = res.data.recommend.list
            })
        },
        fata() {
            console.log(this.recommend)
        },
        //请求商品列表
        getHomeData(type) {
            const page = this.goods[type].page + 1
            getHomeData(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                //要用拓展运算符来一个一个的把数组加进去，不用的话，会把整个数组当一个元素加进去，长度为1
                this.goods[type].page += 1
                console.log(this.goods)

                this.$refs.wrapper.finishPullUp()
            })
        },
        // _getHomeData(type) {
        //     getHomeData(type).then(res => {
        //         console.log(res)
        //     })
        // }
        // 切换导航组件
        tabClick(index) {
            switch(index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
            }
            
            this.$refs.tabcontrol1.curremtIndex = index;
            this.$refs.tabcontrol2.curremtIndex = index;
        },
        // 回到顶部按钮
        backClick() {
            // console.log('aaa')
            this.$refs.wrapper.scrollTo(0,0)
        },
        // 是否显示backtop按钮
        onscroll(position) {
            // console.log(position)
            this.isShowBackTop = position.y < -1000
            this.isShowTabControl = (-position.y) > this.tabControlOffsetTop
        },
        // 上拉加载更多
        pullingUp() {
            // console.log('加载更多')
            this.getHomeData(this.currentType)
        }

    }
}
</script>

<style scoped>
#home{
    height: 100vh;
    position: relative;
}

.home-nav{
    background-color: var(--color-tint);
    color: #fff;
}

.recommend_bg{
    width: 100%;
}
.tab-control {
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.nav-bar{
    /* position: fixed;
    left: 0;
    top: 0;
    right: 0; */
    position: relative;
    z-index: 9;
}
.aaa{
    position: absolute;
    top:43px;
    bottom: 49px;
    left: 0;
    right: 0;
}

</style>