<template>
  <div class="logo-area">
    <div v-if="post.logo" class="logo">
      <img :src="this.post.logo" alt="logo" class="logo-img" />
    </div>

    <h1 v-if="!post.logo" class="post-title">{{ post.title }}</h1>

    <div class="area-of-business">
      <p v-if="post.area_of_business">{{ post.area_of_business[locale] }}</p>
      <div class="content-container">
        <div class="socials-container">
          <!-- Instagram -->
          <a v-if="post.instagram" v-bind:href="post.instagram">
            <InstagramLogo />
          </a>
          <!-- Facebook -->
          <a v-if="post.facebook" v-bind:href="post.facebook">
            <FacebookLogo />
          </a>
          <!-- LinkedIN -->
          <a v-if="post.linkedin" v-bind:href="post.linkedin">
            <LinkedInLogo />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstagramLogo from "@/components/icons/InstagramLogo.vue";
import FacebookLogo from "@/components/icons/FacebookLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";

export default {
  components: {
    InstagramLogo,
    FacebookLogo,
    LinkedInLogo,
  },
  props: {
    post: Object,
    locale: Object,
  },
};
</script>

<style scoped>
.logo-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
  width: 100%;
}

.area-of-business {
  text-align: center;
  margin: 1rem;
  font-size: 18px;
  font-weight: 400;
  flex: 1;
}

.area-of-business p{
font-family: "IBMPlexMono" !important;
line-height: 33px;
}
.logo {
  display: flex;
  aspect-ratio: 4 / 3;
  max-width: 300px;
  height: 80%;
  padding: 2rem;
  margin: 1rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  border: 2px solid #989898;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.post-title {
  padding-bottom: clamp(0.1rem, 2.5vw, 3rem);
}

.content-container {
  padding: 1.2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1.4rem;
  column-gap: 4rem;
  height: 100%;
  align-items: center;
}

.socials-container {
  display: flex;
  gap: 1.6rem;
  height: 100%;
}

.socials-container a {
  line-height: 0;
}

.socials-container svg {
  height: fit-content;
  width: 1.8rem;
  fill: #666666;
}

.socials-container svg:hover {
  fill: black;
}
@media only screen and (max-width: 850px) {

  .area-of-business {
    min-width: 400px;
  }
  .logo-area {
    flex-wrap: wrap;
    justify-content: center;
  }
  .logo {
    max-width: 200px;
  }
}
</style>
