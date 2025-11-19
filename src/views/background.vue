<script setup>
    const backgroundImg = [
        '/background/1.jpg',
        '/background/2.jpg',
        '/background/3.jpg',
        '/background/4.jpg',
        '/background/5.jpg'
    ]

    const changeImg = (item) => {
        document.body.style.backgroundImage = `url(${item})`

    }
</script>
<template>
    <div class="flex justify-between bg-white p-20 flex-wrap">
        <div class="img" v-for="(item, index) in backgroundImg" 
        :key="index">
            <img ref="myButton" @click="changeImg(item)" :src="`${item}`" alt="">
        </div>
    </div>
    
</template>

<style scoped>
.img{
display: flex;
    width: 150px;
    height: 130px;
    margin: 15px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px;
    background: #dfdfdf;
}
::v-deep body {
  background: red !important;
}
</style>