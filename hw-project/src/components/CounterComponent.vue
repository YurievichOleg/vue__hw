<template>
    <div class="counter center">
        <div class="counter__block center">
            <div v-for="counter in counters" :key="counter.id" class="counters" >
                <h1 class="counters__num">{{ counter.num }}</h1>
                <p class="counters__text">{{ counter.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CounterComponent',

    data() {
        return {
            counters:[{num: 12, text: 'Years Of Experiance'}, {num: 85, text: 'Success Project'}, {num: 15, text: 'Active Project'}, {num: 95, text: 'Happy CUstomers'}]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
setTimeout(console.log(document.querySelector('.counter__block')), 5000);

</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
}
.center {
    padding-left: calc(50% - 960px);
    padding-right: calc(50% - 960px);
}
.counter{
    padding-top: 150px;
    padding-bottom: 150px;
    background: #F4F0EC;
    margin-bottom: 96px;
}
    .counter__block{
        padding-left: calc(50% - 530px);
        padding-right: calc(50% - 530px) ;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .counters{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:16px;
        border-right: 1px solid #CDA274;
    }
    .counters__num{
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 85px;
        line-height: 125%;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #CDA274;
    }
    .counters__text{
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        color: #4D5053;
    }
</style>