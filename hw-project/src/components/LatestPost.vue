<template>
    <div class="center2">
        <h2 class="head">Latest Post</h2>
        <div class="post">
            <img class="post__img" :src="post.img" :alt="post.imgDiscription">
            <div class="post__content">
                <h3 class="post__header">{{ post.postHeader }}</h3>
                <p class="post__main__text p__text">{{ post.postMain }}</p>
                <p class="post__second__text p__text">{{ post.postSecond }}</p>
                <div class="post__footer">
                    <p class="post__date">{{ post.postDate }}</p>
                    <a :href="post.postLink">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
<path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </a>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestPost',

    data() {
        return {
            post: {img:require('@/assets/images/contentBlog/latestPost.svg'), imgDiscription: 'latestPost', postHeader: 'Low Cost Latest Invented Interior Designing Ideas', postMain:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', postSecond:'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', postDate:'26 December,2022 ', postLink:'#'}
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
a:hover{
    transform: scale(1.1);
}
.center2 {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.head{
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
.post{
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 22px;
    gap: 65px;
    border: 1px solid #E7E7E7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
    margin-bottom: 156px;
}
.post__img{
    border-radius: 50px;
}
.post__content{
    display: flex;
    flex-direction: column;
}
.post__header{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
    width: 460px;
    text-align: start;
    margin-bottom: 20px;
}
.p__text{
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #4D5053;
    text-align: start;

}
.post__main__text {
    margin-bottom: 36px;
}
.post__second__text{
    margin-bottom: 48px;
}
.post__date{
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #4D5053;
    
}
.post__footer{
    display: flex;
    justify-content: space-between;
}
</style>