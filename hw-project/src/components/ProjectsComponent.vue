<template>
  <div>
    <ProjectsButtons :data="blockObjects" @dataForBlock="dataForBlock" />
    <ProjectsMain :blockContain="blokProjects" />
  </div>
</template>

<script>
// import Vue from "vue";
import ProjectsButtons from "./ProjectsButtons.vue";
import ProjectsMain from "./ProjectsMain.vue";
export default {
  name: "ProjectsComponent",
  components: {
    ProjectsButtons,
    ProjectsMain,
  },

  data() {
    return {
      blokProjects: [],
      blockObjects: {},
    };
  },

  created() {
    this.blockObjects = this.fetchData();
    this.blokProjects = this.blockObjects.bathroom;
  },

  methods: {
    fetchData() {
      return {
        bathroom: [
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
          },
          {
            name: "Minimal Bathroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
          },
        ],
        bedroom: [
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
          },
          {
            name: "Minimal Bedroom",
            img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
          },
        ],
        kitchen: [
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
          },
          {
            name: "Minimal Kitchen",
            img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
          },
        ],
        livingArea: [
          {
            name: "Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg1.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg2.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg3.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg4.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg5.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg6.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg7.svg"),
          },
          {
            name: "Minimal Living Area",
            img: require("@/assets/images/projectsComponentImg/pojectsImg8.svg"),
          },
        ],
      };
    },
    dataForBlock(data) {
      this.blokProjects = data;
      // Vue.set(this.blokProjects, data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
