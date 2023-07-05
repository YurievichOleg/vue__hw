<template>
    <div class="projects center2 ">
        <div class="project" v-for="proj in projects" :key="proj.id" >
            <div :style="{ backgroundImage: 'url(' + proj.img + ')' , backgroundRepeat: 'no-repeat',backgroundPosition: 'center center', width:'548px', height:'525px'}">
            </div>
                <div class="project__content">
                    <div>
                        <h5 class="project__header">{{ proj.projectName }}</h5>
                        <div class="project__links">
                            <a class="project__link" :href="proj.projectLink1">{{ proj.projectLinkText1 + '/ '}}</a>
                            
                            <a class="project__link" :href="proj.projectLink2">{{"  " + proj.projectLinkText2 }}</a>
                        </div>
                    </div>
                    <a class="project__img__link" href="#">
                        <svg class="project__img__link__svg" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
<path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </a>
                </div>
            
        </div>
    </div>
    <!-- <div :style="{ backgroundImage: 'url(' + projects[0].img + ')' , width: '200px', height:'200px'}"></div> -->
        <!-- <div :style="projects[0].img"></div> -->
        <!-- <img :src="projects[1].img" alt=""> -->
    <!-- </div> -->
</template>

<script>
export default {
    name: 'ProjectFotos',

    data() {
        return {
            projects:[
                {img:require('@/assets/images/Image4.svg'), projectName:'Modern Kitchan', projectLinkText1:'Decor ',projectLinkText2:' '+'Architecture', projectLink1:'#', projectLink2:'#'},
                {img:require('@/assets/images/Image1.svg'), projectName:'Modern Kitchan', projectLinkText1:'Decor ',projectLinkText2:' '+'Architecture', projectLink1:'#', projectLink2:'#'},
                {img:require('@/assets/images/Image3.svg'), projectName:'Modern Kitchan', projectLinkText1:'Decor ',projectLinkText2:' '+'Architecture', projectLink1:'#', projectLink2:'#'},
                {img:require('@/assets/images/Image2.svg'), projectName:'Modern Kitchan', projectLinkText1:'Decor ', projectLinkText2:' '+'Architecture',projectLink1:'#', projectLink2:'#'},    
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
a {
    text-decoration: none;
    color: #292F36;
}
a:hover {
    color: #CDA274;
}
.projects{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 75px;
    margin-bottom: 100px;
}
.project__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.project__img__link:hover .project__img__link__svg{
    
        color: red;
        transform: scale(1.1);
    
    
}
.project__header{
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #292F36;
    margin-top: 28px;
    margin-bottom: 8px;
}
.project__links{
    display: flex;
}
.project__link{
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