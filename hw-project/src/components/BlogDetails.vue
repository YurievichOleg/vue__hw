<template>
  <div>
    <div
      class="dateils__banner"
      :style="{ backgroundImage: 'url(' + detailsBanner[0].img + ')' }"
    ></div>
    <div class="details center2">
      <div class="own__details">
        <div class="articles__details">
          <h2 class="head__details__first">
            Let’s Get Solution for Building <br />Construction Work
          </h2>
          <div class="main__articles__details">
            <img
              :src="mainArticleContent.content.image"
              alt=""
              class="main__article__img"
            />
            <div class="main__date__links">
              <p class="main__date">26 December,2022</p>
              <dir class="main__links">
                <!-- <a
                  v-for="link in mainLink"
                  :key="link.id"
                  :href="link.link"
                  class="main__link"
                  >{{ link.name }} /
                </a> -->
                <router-link v-for="link in mainLink" :key="link.id" :to="link.address"
                  >{{ link.name }} /</router-link
                >
              </dir>
            </div>
            <article class="main__article__first">
              {{ mainArticleContent.content.firstText }}
            </article>
            <article class="main__article__second">
              {{ mainArticleContent.content.secondText }}
            </article>
          </div>
          <div class="quotes">
            <p class="quotes__first">“</p>
            <p class="quotes__second">
              The details are not the details. <br />
              They make the design.
            </p>
          </div>
          <h2 class="head__details__second">Design sprints are great</h2>
          <p class="intermediate__text"></p>
          <ol class="intermediate__articles__lists">
            <li v-for="art in otherArticles" :key="art.id">
              <p class="article__list">{{ art }}</p>
            </li>
          </ol>
          <div class="minor__article__details">
            <img
              :src="minorArticleContent.content.image"
              alt=""
              class="minor__article__img"
            />

            <article class="minor__article">
              {{ minorArticleContent.content.firstText }}
            </article>
          </div>
        </div>
        <div class="buttons__details">
          <h3 class="buttons__head">Tags</h3>
          <div class="buttons__buttons">
            <ButtonDetails
              :text="buttons[0].name"
              :name="'button__details'"
              :met="kitchen"
            />
            <ButtonDetails
              :text="buttons[1].name"
              :name="'button__details'"
              :met="bedroom"
            />
            <ButtonDetails
              :text="buttons[2].name"
              :name="'button__details'"
              :met="kitchen"
            />
            <ButtonDetails
              :text="buttons[3].name"
              :name="'button__details'"
              :met="kitchen"
            />
            <ButtonDetails
              :text="buttons[4].name"
              :name="'button__details'"
              :met="kitchen"
            />
            <ButtonDetails
              :text="buttons[5].name"
              :name="'button__details'"
              :met="bedroom"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDetails from "./ButtonDetails.vue";
export default {
  name: "BlogDetails",
  components: {
    ButtonDetails,
    // router,
  },

  data() {
    return {
      detailsBanner: [
        { img: require("@/assets/images/blogDetails/blogDetailsBanner.svg") },
      ],
      mainArticleContent: {
        content: {
          image: require("@/assets/images/blogDetails/blogDetails1.svg"),
          firstText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
          secondText: `Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        },
      },
      minorArticleContent: {
        content: {
          image: require("@/assets/images/blogDetails/blogDetails2.svg"),
          firstText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
          secondText: `Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        },
      },
      kitchenArticleContent: {
        content: {
          image: require("@/assets/images/blogDetails/blogDetails1.svg"),
          firstText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
          secondText: `Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        },
      },
      bedroomArticleContent: {
        content: {
          image: require("@/assets/images/blogDetails/blogDetails2.svg"),
          firstText: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
          secondText: `Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
        },
      },

      buttons: [
        { name: "Kitchen" },
        { name: "Bedroom" },
        { name: "Building" },
        { name: "Architecture" },
        { name: "Kitchen Planning" },
        { name: "Bedroom" },
      ],

      otherArticles: [
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      ],

      mainLink: [
        { name: "Interior ", link: "#", address: "/ProjectsComponent" },
        { name: "Home", link: "#", address: "/FirstCompjnent" },
        { name: " Decore  ", link: "#", address: "/ProjectDetails" },
      ],
    };
  },

  mounted() {},

  methods: {
    kitchen() {
      this.mainArticleContent = this.kitchenArticleContent;
      this.minorArticleContent = this.bedroomArticleContent;
    },
    bedroom() {
      this.mainArticleContent = this.bedroomArticleContent;
      this.minorArticleContent = this.kitchenArticleContent;
    },
    mettt() {
      return "kitchen";
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #292f36;
}
/* a:hover{
    transform: scale(1.1);
} */
.center2 {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.dateils__banner {
  background-repeat: no-repeat;
  background-position: center center;
  height: 352px;
  background-size: contain;
  margin-bottom: 200px;
}
.own__details {
  display: flex;
  gap: 56px;
  justify-content: space-between;
}
.articles__details {
  max-width: 800px;
}

.head__details__first {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 0.02em;

  color: #292f36;
  text-align: start;
  margin-bottom: 12px;
}
.main__articles__details {
  display: flex;
  flex-direction: column;
}

.main__article__img {
  background: #c4c4c4;
  border-radius: 50px;
  margin-bottom: 48px;
}
.main__date__links {
  display: flex;
  justify-content: space-between;
}
.main__date {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  text-transform: capitalize;

  color: #4d5053;
  margin-bottom: 48px;
}
.main__links {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  text-transform: capitalize;

  color: #4d5053;
}
.main__article__first {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;

  letter-spacing: 0.01em;

  color: #4d5053;
  text-align: start;
  margin-bottom: 40px;
}
.main__article__second {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;

  letter-spacing: 0.01em;
  text-align: start;
  color: #4d5053;
  margin-bottom: 36px;
}
.quotes {
  background: #f4f0ec;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 28px;
}
.quotes__first {
  font-family: "DM Serif Display";
  font-style: italic;
  font-weight: 400;
  font-size: 200px;
  line-height: 125%;
  text-align: center;
  letter-spacing: 0.02em;

  color: #cda274;
}
.quotes__first:hover {
  transform: rotate(-180deg);
}
.quotes__second {
  font-family: "DM Serif Display";
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;

  text-align: center;
  letter-spacing: 0.02em;

  color: #cda274;
  position: absolute;
  left: 227px;
  top: 144px;
}

.head__details__second {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 0.02em;
  text-align: start;
  color: #292f36;
  margin-bottom: 20px;
}

.intermediate__articles__lists {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
}
li::marker {
  color: #cda274;
}

.article__list {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  text-align: start;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  color: #4d5053;
}
.minor__article {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  margin-top: 36px;
  letter-spacing: 0.01em;
  margin-bottom: 96px;
  color: #4d5053;
  text-align: start;
}

.buttons__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 50px;
}
.buttons__buttons {
  display: flex;
  max-width: 344px;
  flex-wrap: wrap;
  gap: 10px;
}
.buttons__head {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #292f36;
}
</style>
