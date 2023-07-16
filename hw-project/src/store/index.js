import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projectDetailsImg: [],
        progectDetailsBanner: require("@/assets/images/projectDetails/Background.svg"),
        textContent: [],
    },
    mutations: {
        setImages(state, images) {
            state.projectDetailsImg = images;
        },
        setTextContent(state, textContent) {
            state.textContent = textContent;
        },
    },
    getters: {
        getProjectDetailsImg: (state) => state.projectDetailsImg,
        getProjectDetailsBanner: (state) => state.progectDetailsBanner,
        getProjectDetailsBannerTextContent: (state) => state.textContent,
    },
    actions: {
        projectDetailsImgData({ commit }) {
            setTimeout(() => {
                const imagesFor = [
                    require("@/assets/images/projectDetails/Photo1.svg"),
                    require("@/assets/images/projectDetails/Photo2.svg"),
                    require("@/assets/images/projectDetails/Photo3.svg"),
                ];

                commit("setImages", imagesFor);
            }, 1000);
        },
        projectDetailTextContent({ commit }) {
            setTimeout(() => {
                const textFromBack = [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ",
                    "In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.",
                ];
                commit("setTextContent", textFromBack);
            }, 1500);
        },
    },
});
