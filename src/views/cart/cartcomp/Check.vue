<template>
    <div>
      <div class="icon" :class="{'active': ischeck}" @click="selectItem">
        <img src="@/assets/img/cart/tick.svg">
      </div>
    </div>
</template>

<script>
export default {
    props: {
        ischeck: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selectItem() {
            this.$emit('checkClick')
        }
    }
}
</script>

<style scoped>
.icon {
    width: 20px;
    height: 20px;
    position: relative;
    margin: 0;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
.active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>