<template>
    <div id="goodsInfo" v-if="Object.keys(goods).length !== 0">
        <div class="top">
            <span class="top-title">{{goods.desc}}</span>
            <div class="price">
                <span class="n-top">{{goods.price}}</span>
                <span class="o-top">{{goods.oldPrice}}</span>
                <span class="d-top" v-if="goods.discount" :style="{backgroundColor: goods.discountBgColor}">{{goods.discount}}</span>
            </div>
        </div>
        <div class="center">
            <!-- <div v-for="(item, i) in goods.columns" :key="i">
                {{item}}
            </div> -->
            <!-- 因为最后一项是其他属性里的属性，所以采用这个方法 -->
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.service[goods.service.length-1].name}}</span>
        </div>
        <div class="bottom">
            <!-- in 后面可以是对象，数组，还可以是数字，当后面是数字的时候，是从1开始的，所以需要用到索引index时要减去1 -->
            <div v-for="index in goods.service.length-1" :key="index">
                <img :src="goods.service[index-1].icon" alt="">
                <span>{{goods.service[index-1].name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    
}
</script>

<style scoped>
#goodsInfo{
    color: #999;
    padding: 0 8px;
    margin-top: 12px;
    border-bottom: 5px solid #f2f5f8;
}

.top-title{
    color: #222;
}
.n-top{
    font-size: 24px;
    color: var(--color-high-text);
    line-height: 40px;
}
.o-top{
    font-size: 13px;
    margin: 0 5px;
    text-decoration: line-through;
}
.d-top{
    font-size: 12px;
    color: #fff;
    /* background-color: var(--color-high-text); */
    border-radius: 8px;
    padding: 2px 5px;

    position: relative;
    top:-8px
}

.center{
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
    line-height: 30px;
    text-align: center;
}
.bottom{
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    text-align: center;
    line-height: 60px;
    color: #333;
}
.bottom img{
    height: 13px;
    width: 13px;
    position: relative;
    top: 2px;
}

</style>