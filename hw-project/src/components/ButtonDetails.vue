<template>
    <div>
        <button :class="name" class="button__that" @click="met">{{text}}</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonDetails',
    props: ['text', 'name', 'met'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.button__that{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 30px;
    gap: 10px;

    /* width: 132px;
    height: 41px; */

    background: #F4F0EC;
    border-radius: 10px;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 125%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;

    color: #292F36;

}


</style>