<template>
  <div id="app">
    <HeaderBlock />
    <!-- <router-link to="/FirstCompjnent">FFFFF</router-link> -->
    <router-view />
    <!-- <FirstCompjnent /> -->
    <!-- <BlogPage />
    <BlogDetails />
    <ProjectsComponent />
    <ProjectDetails /> -->
    <FoooterBlock />

    <div v-for="product in products" :key="product.id">
      <ProductDetails
        :name="product.name"
        :price="product.price"
        :available="product.available"
      />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "./components/HeaderBlock.vue";
import FoooterBlock from "./components/FooterBlock.vue";
// import FirstCompjnent from "./components/FirstCompjnent.vue";
// import BlogPage from "./components/BlogPage.vue";
// import BlogDetails from "./components/BlogDetails.vue";
// import ProductDetails from "./components/ProductDetails.vue";
// import ProjectsComponent from "./components/ProjectsComponent.vue";
// import ProjectDetails from "./components/ProjectDetails.vue";
// import router from "./router";
export default {
  name: "App",
  components: {
    HeaderBlock,
    FoooterBlock,
    // FirstCompjnent,
    // BlogPage,
    // BlogDetails,
    // ProductDetails,
    // ProjectsComponent,
    // ProjectDetails,
    // router,
  },
  data() {
    return {
      products: [
        { name: "something1", price: 0.99, available: true },
        { name: "something2", price: 1.99, available: false },
      ],
    };
  },
  created() {
    this.$router.push({ name: "FirstCompjnent" });
  },
};
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
  color: #cda274;
}

button:hover {
  color: #cda274;
  transform: scale(1.1);
}
</style>
