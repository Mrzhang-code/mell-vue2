<template>
    <div class="shopInfo">
        <div class="info-top">
            <img :src="shop.shopLogo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="info-center">
            <div class="info-left">
                <div>
                    <P>{{shop.cSells | shopSell}}</P>
                    <span>总销量</span>
                </div>
                <div>
                    <P>{{shop.cGoods}}</P>
                    <span>全部宝贝</span>
                </div>
            </div>
            <div class="info-right">
                <table>
                    <tr v-for="(item,i) in shop.score" :key="i">
                        <td>{{item.name}}</td>
                        <td  class="right-color" :class="{'iscolor': item.isBetter}">{{item.score}}</td>
                        <td class="right-bgc" :class="{'isbgc': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="info-bottom">
            <button class="shop-btn">进店逛逛</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        shopSell(value) {
            let result = value
            if(result > 10000) {
                result = (result/10000).toFixed(1) + '万'
            }
            return result
        }
    }
}
</script>

<style scoped>
.shopInfo{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;

}

.info-top{
    line-height: 45px;
    display: flex;
    align-items: center;
}
.info-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
}
.info-top span{
    margin-left: 10px;
}

.info-center{
    display: flex;
}
.info-left{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
}
.info-left span{
    font-size: 13px;
}

.info-right{
   font-size: 13px;
    color: #333;
}
.info-right table{
   margin-left: 40px;
}
.info-right table td{
       padding: 5px 3px 5px 0;

}
.info-right .right-color{
    color: green;
}
.info-right .right-bgc span{
    color: #fff;
    background-color: green;
}

.info-right .iscolor{
    color: red;
}
 .info-right .isbgc span{
    background-color: red;
}

.info-bottom{
    text-align: center;
    margin-top: 10px;
}
.shop-btn{
   font-size: 13px;
   width: 120px;
   height: 28px;
   border: none;
   border-radius: 10px;
   background-color: #f2f5f8;

   
}
</style>