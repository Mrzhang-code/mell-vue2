<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" class="tab-item" :class="{active: index === curremtIndex}" @click="tabActive(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array
        }
    },
    data() {
        return {
            curremtIndex: 0
        }
    },
    methods: {
        tabActive(index) {
            this.curremtIndex = index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.tab-item{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border: 3px soild red !important; 
}
</style>