<template>
    <div class="center2">
        <h2 class="blog__header">Articles & News</h2>
        <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        <div class="blog__boxes">
            <div class="blog__box" v-for="box in boxes" :key="box.id">
                <div class="blog__box__img" :style="{ backgroundImage: 'url(' + box.img + ')'}" >
                    <button class="blog__box__button">{{ box.buttonText }}</button>
                </div>
                <h3 class="blog__box__header">{{ box.headerText }}</h3>
                <div class="blog__box__footer">
                    <p class="blog__box__date">{{ box.date }}</p>
                    <a class="project__img__link" :href="box.link">
                        <svg class="project__img__link__svg" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'BlogComponent',

    data() {
        return {
            boxes:[
                {img:require('@/assets/images/contentBlog/ImageBlog1.svg'), buttonText: 'Kitchan Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog2.svg'), buttonText: 'Living Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog3.svg'), buttonText: 'Interior Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
            ]
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
.center2 {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}
a:hover{
    transform: scale(1.1);
}
.blog__header{
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
    margin-bottom: 12px;
    justify-content: center;
    }

.blog__text{
    padding-left: calc(50% - 408px);
    padding-right: calc(50% - 408px);
    margin-bottom: 52px;
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
}
.blog__boxes{
    display: flex;
    gap: 28px;
}
.blog__box{
    border: 1px solid #E7E7E7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
    padding: 20px;
    margin-bottom: 96px;
}
.blog__box__img{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: inherit;
    width: 340px;
    height: 290px;
    text-align: initial;
}
.blog__box__button{
    background: #FFFFFF;
    border-radius: 8px 8px 8px 0px;
    margin-top: 228px;
    width: 124px;
    height: 41px;
    margin-left: 40px;
}
.blog__box__header{
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: start;
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
    max-width: 300px;

}
.blog__box__footer{
    display: flex;
    margin-bottom: 28px;
    align-items: center;
    justify-content: space-between;
}
</style>