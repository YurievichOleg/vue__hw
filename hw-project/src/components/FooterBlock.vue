<template>
  <div>
    <div class="top center">
      <footer class="footer center2">
        <div class="footer__logo">
          <div class="footer__left-part">
            <div class="footer__logo">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                  fill="#CDA274"
                />
              </svg>
            </div>
            <h3 class="footer__title">Interno</h3>
          </div>
          <p class="footer__text">
            It is a long established fact that a reader will be distracted lookings.
          </p>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
              fill="#292F36"
            />
          </svg>
        </div>
        <div class="footer__pages">
          <h4 class="footer__pages__head">Pages</h4>
          <div class="footer__links">
            <!-- <a href="#" class="head__right-part__text">Home</a>
            <a href="#" class="head__right-part__text">Project</a>
            <a href="#" class="head__right-part__text">Blog</a> -->
            <router-link to="/FirstCompjnent">Home</router-link>
            <router-link to="/BlogPage">Project</router-link>
            <router-link to="/BlogDetails">Blog</router-link>
          </div>
        </div>
        <div class="footer__contacts">
          <h3 class="footer__contacts__head">Contact</h3>
          <p class="footer__contacts__address">
            55 East Birchwood Ave.<br />
            Brooklyn, New York 11201
          </p>
          <p class="footer__contacts__mail">contact@interno.com</p>
          <p class="footer__contacts__phone">(123) 456 - 7890</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
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
  color: #292f36;
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

.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 120px;
  gap: 160px;
  justify-items: center;
}
.footer__contacts__head {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #292f36;
  margin-bottom: 24px;
}
.footer__contacts__address {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #4d5053;
}
.footer__contacts__mail {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #4d5053;
}
.footer__contacts__phone {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #4d5053;
}

.footer__text {
  margin-bottom: 32px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #4d5053;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: start;
}
.footer__pages {
  margin-left: 96px;
}
.footer__pages__head {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #292f36;
  margin-bottom: 8px;
}
.footer__pages__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer__links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.footer__left-part {
  display: flex;
  gap: 10px;
  align-items: center;
}

.footer__title {
  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #292f36;
}
</style>
