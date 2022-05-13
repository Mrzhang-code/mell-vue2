<template>
    <div class="recommend">
        <div v-for="(item, i) in recommend" :key="i" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
            </a>
            <p>{{item.title}}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: ['recommend']
}
</script>

<style scoped>
.recommend {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommend img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>