<template>
    <div class="center2">
        <div class="news">
            <h2 class="news__head">Articles & News</h2>
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
            <div class="pagination">
                <a href="#" v-for="num in numbers" :key="num.id" class="pagination__count">{{ num }}</a>
               <a href="#">
                    <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
               </a>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsComponent',

    data() {
        return {
            boxes:[
                {img:require('@/assets/images/contentBlog/ImageBlog1.svg'), buttonText: 'Kitchan Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog2.svg'), buttonText: 'Living Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog3.svg'), buttonText: 'Interior Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog4.svg'), buttonText: 'Interior Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog5.svg'), buttonText: 'Interior Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
                {img:require('@/assets/images/contentBlog/ImageBlog6.svg'), buttonText: 'Interior Design', headerText:'Let’s Get Solution For Building Construction Work', date:'22 December,2022 ',link:'#'},
            ],
            numbers:[1,2,3,4]
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
a {
    text-decoration: none;
    color: #292F36;
}
a:hover{
    color: #CDA274;
    transform: scale(1.1);
}
.blog__box:hover{
    border: 1px solid #CDA274;
    transition: transform 0.5s;
    transform: scale(1.05);
    border-radius: 52px 52px 52px 52px;
    /* background-color: grey; */
    background: #F4F0EC;
    z-index: 1;
    
}
.blog__box:hover .project__img__link__svg{
    
    fill: #FFFFFF;
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    
}

.center2 {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}
.news__head{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: #292F36;
    text-align: start;
    margin-bottom: 32px;
}

.blog__boxes{
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:16px;
    margin-bottom: 52px;
}
.blog__box{
    border: 1px solid #E7E7E7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
    padding: 20px;
    margin-bottom: 10px;
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
.pagination{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    margin-bottom: 200px;
}
.pagination__count{
    box-sizing: border-box;
    border: 1px solid #CDA274;border-radius: 50%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #292F36;
}
</style>