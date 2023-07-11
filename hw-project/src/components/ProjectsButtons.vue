<template>
  <div>
    <!-- <button @click="aaaa">Bathroom</button> -->
    <button
      v-for="button in buttons"
      :key="button.id"
      :id="button.id"
      @click="buttonClick(button.name)"
    >
      {{ button.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ProjectsButtons",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      dataProjects: {},
      dataProject: [],
      buttons: [
        { name: "Bathroom", id: "b1" },
        { name: "Bedroom", id: "b2" },
        { name: "Kitchen", id: "b3" },
        { name: "Living Area", id: "b4" },
      ],
    };
  },

  mounted() {
    this.dataProjects = this.data;
  },
  created() {
    // this.dataProjects = this.fetchData();
    // this.dataProjects = this.data;
  },

  methods: {
    // fetchData() {
    //   return {
    //     bathroom: [
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
    //       },
    //       {
    //         name: "Minimal Bathroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
    //       },
    //     ],
    //     bedroom: [
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
    //       },
    //       {
    //         name: "Minimal Bedroom",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
    //       },
    //     ],
    //     kitchen: [
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
    //       },
    //       {
    //         name: "Minimal Kitchen",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
    //       },
    //     ],
    //     livingArea: [
    //       {
    //         name: "Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
    //       },
    //       {
    //         name: "Minimal Living Area",
    //         img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
    //       },
    //     ],
    //   };
    // },
    bathroomClick() {
      this.dataProject = this.dataProjects.bathroom;
      // this.$emit("dataForBlock", this.dataProject);
    },
    bedroomClick() {
      this.dataProject = this.dataProjects.bedroom;
      // this.$emit("dataForBlock", this.dataProject);
    },
    kitchenClick() {
      this.dataProject = this.dataProjects.kitchen;
      // this.$emit("dataForBlock", this.dataProject);
    },
    livingAreaClick() {
      this.dataProject = this.dataProjects.livingArea;
      // this.$emit("dataForBlock", this.dataProject);
    },
    buttonClick(name = "Bathroom") {
      switch (name) {
        case "Bathroom":
          this.bathroomClick();
          break;
        case "Bedroom":
          this.bedroomClick();
          break;
        case "Kitchen":
          this.kitchenClick();
          break;
        case "Living Area":
          this.livingAreaClick();
          break;
      }
      this.$emit("dataForBlock", this.dataProject);
    },
  },
};
</script>

<style lang="scss" scoped></style>
