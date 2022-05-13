<template>
    <div class="navbar">
        <nav-bar>
            <div slot="left" class="dnavbar-left" @click="backClicl">
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="dnavbar-right">
                <div v-for="(item, index) in titles"
                :key="index"
                class="dnavbaritem"
                :class="{active: currentIndex == index}"
                @click="detailnavbar(index)"
                >{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
    components: {
        NavBar
    },
    data() {
        return {
            currentIndex: 0,
            titles: ['商品', '参数', '评论', '推荐']
        }
    },
    methods: {
        detailnavbar(index) {
            this.currentIndex = index
        },
        backClicl() {
            this.$router.go(-1)
        }
    }
    
}
</script>

<style scoped>
.navbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.dnavbar{
    background-color: #fff;
}
.dnavbar-right{
    display: flex;
    font-size: 12px;
}
.dnavbaritem{
    flex: 1;
}
.dnavbar-left{
    text-align: center;
    margin-top: 6px;
}
.active{
    color: var(--color-high-text);
}
</style>