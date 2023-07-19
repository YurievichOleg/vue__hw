<template>
  <div>
    <BlogBanner />
    <LatestPost />
    <NewsComponent />
  </div>
</template>

<script>
import BlogBanner from "./BlogBanner.vue";
import LatestPost from "./LatestPost.vue";
import NewsComponent from "./NewsComponent.vue";
export default {
  name: "BlogPage",
  components: {
    BlogBanner,
    LatestPost,
    NewsComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
