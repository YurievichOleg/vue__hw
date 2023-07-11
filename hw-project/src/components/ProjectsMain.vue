<template>
  <div>
    <div v-for="block in blockContain" :key="block.id">
      <img :src="block.img" alt="" />
      <div>
        <h3>{{ block.name }}</h3>
        <a href="#">Decor </a>
        /
        <a href="#">Artchitecture</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsMain",
  props: {
    blockContain: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
