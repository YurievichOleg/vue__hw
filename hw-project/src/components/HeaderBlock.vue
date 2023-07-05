<template>
    <div >
        <div class="top center">
            <header class="head center2">
        <div class="head__left-part">
            <div class="head__logo">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274" />
                 </svg>
            </div>
            <h3 class="head__title">Interno</h3>
        </div>
        <div class="head__right-part">
            <a href="#" class="head__right-part__text">Home</a>
            <a href="#" class="head__right-part__text">Project</a>
            <a href="#" class="head__right-part__text">Blog</a>
        </div>
    </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBlock',

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
.head {
    display: flex;
    gap: 780px;
    margin-top: 52px;
    margin-bottom: 56px;
}
.head__title {
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 125%;
        display: flex;
        align-items: center;
        color: #292F36;
    }
    .head__left-part {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .head__right-part {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 125%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #292F36;
        gap: 40px;
    }


</style>