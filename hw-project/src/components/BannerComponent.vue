<template>
    <div class="center">
        <div class="banner center2">
            <div class="banner__content">
                <h3 class="banner__header">Let Your Home<br> Be Unique</h3>
                <p class="banner__text">There are many variations of the passages of<br>lorem Ipsum fromavailable, majority.</p>
                <!-- <button class="banner__button">
                    Get Started
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button> -->
                <button class="banner__button" type="button">
                    Get Started
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',

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

<style scoped>

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: sans-serif;
    
}




a {
    text-decoration: none;
    color: #292F36;
}

ul {
    list-style-type: none;
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

.banner{
    background-image: url('../assets/images/Images1_1.svg');
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 208px;
    padding-bottom: 208px;
    background-size: inherit;
    margin: 0px 360px 96px 360px;
    border-radius: 70px;
    padding-left: 52px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.banner__content{
    /* background-image: url('../assets/images/Images1_1.svg'); */
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.banner__header{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 65px;
    line-height: 125%;
    display: flex;
    align-items: center;
    color: #292F36;
    text-align: start;
}
.banner__text{
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #4D5053;
    text-align: start;
}
.banner__button{
    display: flex;
    
    justify-content: center;
    align-items: center;
    padding: 26px 49px 26px 48px;
    gap: 10px;
    width: 220.14px;
    height: 75px;

    background: #292F36;
    box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
    border-radius: 18px;
    color: #FFFFFF;
}

</style>