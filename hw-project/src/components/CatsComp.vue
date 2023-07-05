<template>
    <div class="cats">
        <!-- <img :src="mainCat" alt="photo"> -->
        <img v-for="cat in cats" :key="cat.id" :src="cat" alt="catPhoto">
        <img class="cat__img" :src="cats[1]" :alt="mainCat.src">
        <!-- <img class="cat__img" src="@/assets/cat1.svg" :alt="mainCat.src"> -->

            
        
    </div>
</template>

<script>
// import cat1 from "../assets"
export default {
    name: 'CatsComp',
    // props:{
        
    // },

    data() {
        return {
            cats: [require('@/assets/cat1.svg'), require('@/assets/cat2.svg'),require('@/assets/cat3.svg')],
            mainCat: require('@/assets/cat1.svg'),
        };
    },

    
    // methods: {
    //     cat1(){
    //         this.mainCat = this.cats[0];
    //     },

    //     cat2(){
    //         this.mainCat = this.cats[1];
    //     },

    //     cat3(){
    //         this.mainCat = this.cats[2];
    //     }
    // },
};
</script>

<style lang="css" scoped>
    .cats{
        width: 300px;
        height: 500px;
    }
    .cat__img{
        width: 300px;
        height: 500px;
    }
</style>