<template>
    <div>
        <div class="info-desc" v-if="detailInfo.desc">
            <div class="left"></div>
            <p>{{detailInfo.desc}}</p>
            <div class="right"></div>
        </div>
        <div v-for="(item, i) in detailInfo.detailImage" :key="i" class="info-img">
            <p>{{item.key}}</p>
            <img :src="img" alt="" v-for="(img,i1) in item.list" :key="i1">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        detailInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.info-desc{
    font-size: 13px;
    padding: 10px;
}
.info-desc .left, .info-desc .right{
    width: 120px;
    height: 1px;
    /* border-bottom: 1px solid #a3a3a5; */
    position: relative;
    background-color: #a3a3a5;
    /* padding: 10px 0; */
}
.info-desc .left{
    float: left;
    /* margin-left: 10px; */
}
.info-desc .right{
    float: right;
    /* margin-right: 10px; */
}
.info-desc .left::before, .info-desc .right::after{
    content: '';
    position: absolute;
    height: 5px;
    width: 5px;
    background-color: #a3a3a5;
    bottom: 0;
}
.info-desc .right::after{
    right: 0;
}

.info-desc p{
    padding: 15px 0;
}


.info-img p{
    font-size: 13px;
    margin: 10px 10px;
}
.info-img img{
    width: 100%;  
}
</style>