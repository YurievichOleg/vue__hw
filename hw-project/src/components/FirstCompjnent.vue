<template>
  <div>
    <BannerComponent />
    <FolowText />
    <ProjectFotos />
    <CounterComponent />
    <BlogComponent />
  </div>
</template>

<script>
import BannerComponent from "./BannerComponent.vue";
import FolowText from "./FolowText.vue";
import ProjectFotos from "./ProjectFotos";
import CounterComponent from "./CounterComponent";
import BlogComponent from "./BlogComponent.vue";
export default {
  name: "FirstCompjnent",
  components: {
    BannerComponent,
    FolowText,
    ProjectFotos,
    CounterComponent,
    BlogComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
