<template>
    <div class="warpper" ref="scroll">
        <div class="concent">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return{
            scroll: null
        }
    },
    mounted() {
        setTimeout(() => {
            // 1.创建better-scroll对象
            this.scroll = new BScroll(this.$refs.scroll,{
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        // 2.监听滚动位置
        this.scroll.on('scroll', position => {
            // console.log(probeType)
            this.$emit('onscroll', position)
        })
        // 3.上拉加载更多
         this.scroll.on('pullingUp', () => {
             this.$emit('pullingUp')
         })
        },1000)
        
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
            // console.log('----')
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>
</style>