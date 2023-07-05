<template>
    <div>
        <div class="banner center" :style="{ backgroundImage: 'url(' + blogBanerImg[0].img + ')',}">
            <div class="banner__content" >
                <h2 class="banner__header">{{ bannerHeaderText }}</h2>
                <div class="banner__links">
                    
                    <a v-for="bannerLink in bannerLinks" :key="bannerLink.id" :href="bannerLink.link">
                        {{ bannerLink.text }}
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogBanner',

    data() {
        return {
            blogBanerImg: [{img: require('@/assets/images/contentBlog/contentBlog.svg')}],
            bannerHeaderText: 'Articles & News',
            bannerLinks: [{link:'#', text: 'Home / '}, {link:'#', text: 'Blog'}]
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
.center {
    padding-left: calc(50% - 960px);
    padding-right: calc(50% - 960px);
}
.banner{
    padding-top: 176px;
    background-repeat: no-repeat;
    background-position: center center;
    /* height: 356px; */
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
}
.banner__content{
    padding-left: calc(50% - 256px);
    padding-right: calc(50% - 256px);
    /* width: 400px; */
    background: #FFFFFF;
    border-radius: 36px 36px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 80px;
    gap: 10px;
}
.banner__header{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    display: flex;
    align-items: center;
    color: #292F36;
}
.banner__links{
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