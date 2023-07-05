<template>
  <div id="app">
  <HeaderBlock/>
  <BannerComponent/>
  <FolowText/>
  <ProjectFotos/>
  <CounterComponent/>
  <BlogComponent/>
  <BlogBanner/>
  <LatestPost/>
  <NewsComponent/>
  <BlogDetails/>
  <FoooterBlock/>
  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome brother father and sons and daugther and anybody or any" />
    <HelloWorld msg="AAAAAAAAAAAAAAAAAAAAAA" />
    <NewComp msg="I'm Mr Bombastic tell me fantastic" />
    <HelloWorld msg="AAAAAAAAAAAAAAAAAAAAAA" /> -->
    <!-- <CatsComp/> -->
    <!-- <NewComp msg=" Start " />
    <NewComp msg=" Start1 " />
    <NewComp msg=" Start 2" /> -->
  





  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue';
import FoooterBlock from './components/FooterBlock.vue';
import BannerComponent from './components/BannerComponent.vue';
import FolowText from './components/FolowText.vue';
import ProjectFotos from './components/ProjectFotos';
import CounterComponent from './components/CounterComponent';
import BlogComponent from './components/BlogComponent.vue';
import BlogBanner from './components/BlogBanner.vue';
import LatestPost from './components/LatestPost.vue';
import NewsComponent from './components/NewsComponent.vue';
import BlogDetails from './components/BlogDetails.vue';



// import CatsComp from './components/CatsComp.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import NewComp from './components/NewComp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // NewComp,
    // CatsComp,
    HeaderBlock,
    FoooterBlock,
    BannerComponent,
    FolowText,
    ProjectFotos,
    CounterComponent,
    BlogComponent,
    BlogBanner,
    LatestPost,
    NewsComponent,
    BlogDetails

  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
}
a:hover {
    color: #CDA274;
}

button:hover {
    color: #CDA274;
    transform: scale(1.1);
}
</style>
