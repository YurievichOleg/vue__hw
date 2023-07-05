<template>
    <div class="top center2">
        <h2 class="folow__header">Follow Our Projects</h2>
        <p class="folow__text">
            It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
        </p>
    </div>
</template>

<script>
export default {
    name: 'FolowText',

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

* {
    margin: 0;
    padding: 0;
}

.top {
    overflow: hidden;
}

.center {
    padding-left: calc(50% - 960px);
    padding-right: calc(50% - 960px);
}

.center2 {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}
    .folow__header{
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
        color: #292F36;
        justify-content: center;
        margin-bottom: 8px;
    }
    .folow__text{
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.01em;
        color: #4D5053;
        justify-content: center;
        padding-left: 232px;
        padding-right: 232px;
        margin-bottom: 92px;
    }
</style>