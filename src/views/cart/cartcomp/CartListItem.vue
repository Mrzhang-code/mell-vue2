<template>
    <div class="cart-item">
        <div class="item-check">
            <Check @checkClick="checkClick" :ischeck="item.check"></Check>
        </div>
        <div class="item-img">
            <img :src="item.imgURL" alt="商品图片">
        </div>
        <div class="item-info">
            <div class="item-title">{{item.title}}</div>
            <div class="item-desc">{{item.desc}}</div>
            <div class="info-bottom">
                <div class="item-price left">¥{{item.price}}</div>
                <div class="item-count right">x{{item.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Check from './Check.vue'

export default {
    props: ['item'],
    components: {
        Check
    },
    methods: {
        checkClick() {
            // console.log(this.item)
            this.item.check = !this.item.check
        }
    }
}
</script>

<style scoped>
.cart-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-check {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .item-price {
    color: orangered;
  }
</style>