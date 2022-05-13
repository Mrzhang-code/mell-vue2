<template>
    <div class="menu">
        <check class="check" @checkClick="checkClick" :ischeck="ischeck"></check>
        <span>全选</span>
        <span class="total">合计:{{total}}</span>
        <span class="buy">去计算({{buy}})</span>
    </div>
</template>

<script>
import Check from './Check.vue'
export default {
    components: { Check },
    computed: {
        buy() {
            return this.$store.state.carList.length
        },
        total() {
            const carList = this.$store.state.carList
            return '￥' + carList.filter(item => item.check).reduce((preValue, item) => {
                return item.price * item.count + preValue
            },0)
        },
        ischeck() {
            if(this.$store.state.carList.length === 0) return false
            return !this.$store.state.carList.find(item => !item.check)
        }
    },
    methods: {
        checkClick() {
            const isSelect = this.$store.state.carList.find(item => !item.check)

            if(isSelect) {
                this.$store.state.carList.forEach(item => item.check = true)
            }else{
                this.$store.state.carList.forEach(item => item.check = false)
            }
        }
    }
}
</script>

<style scoped>
.menu{
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    
}
.check{
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 12px;
}
.total{
    margin-left: 20px;
    font-size: 16px;
    color: #666;
}
.buy{
    width: 100px;
    height: 44px;
    line-height: 44px;
    background-color: orangered;
    color: #fff;
    text-align: center;
    float: right;
}
</style>