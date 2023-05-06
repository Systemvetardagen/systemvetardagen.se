<template>
  <main class="wrapper" id="top">
    <section v-if="post">
      <article class="post" id="post">
        <!-- BANNER -->
        <div class="banner">
          <nuxt-img
            v-if="post.banner"
            :src="this.post.banner"
            class="banner-img"
          />
          <img
            v-else
            src="@/assets/img/nod_gradient_colors.jpg"
            alt="No sponsor image"
            class="banner-img"
          />
          <div class="banner-shade"></div>
          <div class="banner-overlay">
            <div v-if="post.logo" class="logo">
              <nuxt-img :src="this.post.logo" alt="logo" class="logo-img" />
            </div>

            <h1 v-if="!post.logo" class="post-title">{{ post.title }}</h1>
            <!-- <p class="post-location">{{ $t("location") }}: TBA</p>
            <p v-if="post.banner" class="post-tag">// Sponsor</p>
            <p v-else class="post-tag">//</p> -->
          </div>
          <div class="banner-bar"></div>
        </div>
        <!-- END BANNER -->

        <!-- CCOMPANY INFO -->
        <div class="post-info">
          <h3 style="align-self: center">{{ $t("company-info") }}</h3>
          <div class="table">
            <p v-if="post.founded" class="table-left">
              {{ $t("established") }}
            </p>
            <p v-if="post.founded" class="table-right">{{ post.founded }}</p>
            <p v-if="post.slogan" class="table-left">{{ $t("slogan") }}</p>
            <p v-if="post.slogan" class="table-right">{{ post.slogan }}</p>
            <p v-if="post.number_of_employees_in_Sweden" class="table-left">
              {{ $t("employees-sv") }}
            </p>
            <p v-if="post.number_of_employees_in_Sweden" class="table-right">
              {{ post.number_of_employees_in_Sweden }}
            </p>
            <p
              v-if="post.number_of_employees_in_internationally"
              class="table-left"
            >
              {{ $t("employees-int") }}
            </p>
            <p
              v-if="post.number_of_employees_in_internationally"
              class="table-right"
            >
              {{ post.number_of_employees_in_internationally }}
            </p>
          </div>
          <p v-if="post.area_of_business" style="font-weight: 600">
            {{ $t("bis-area") }}
          </p>
          <p v-if="post.area_of_business">{{ post.area_of_business }}</p>
        </div>
        <!-- END COMPANY INFO -->

        <!-- ARTICLE MAIN CONTENT -->
        <div class="post-content">
          <h3>{{ post.slogan }}</h3>
          <p>{{ post.about_us }}</p>

          <!-- YOUTUBE VIDEO -->
          <div v-if="post.youtube_video" class="video">
            <iframe
              class="yt-video"
              :src="this.post.youtube_video"
              frameborder="0"
              allowfullscreen
            >
            </iframe>
          </div>
          <!-- END YOUTUBE VIDEO -->
          <div
            v-if="post.extra_text"
            v-html="markdownToHtml"
            class="extra-text"
          ></div>
          <!-- SPONSOR IMAGES // GALLERY -->
          <div v-if="post.sponsor_images" class="gallery">
            <div class="column">
              <div v-if="post.sponsor_images[0]" class="gallery-item">
                <nuxt-img
                  :src="this.post.sponsor_images[0]"
                  alt="gallery image 1"
                  class="gallery-img"
                />
              </div>
            </div>
            <div class="column">
              <div v-if="post.sponsor_images[1]" class="gallery-item">
                <nuxt-img
                  :src="this.post.sponsor_images[1]"
                  alt="gallery image 2"
                  class="gallery-img"
                />
              </div>
              <div v-if="post.sponsor_images[2]" class="gallery-item">
                <nuxt-img
                  :src="this.post.sponsor_images[2]"
                  alt="gallery image 3"
                  class="gallery-img"
                />
              </div>
            </div>
          </div>
          <!-- END SPONSOR IMAGES // GALLERY -->

          <!-- MATCH LIST -->
          <div class="match-list">
            <h3>
              {{ post.title }}
              {{ $t("looking-for") }}
            </h3>
            <div class="match-items">
              <div class="match-list-items">
                <ul>
                  <p style="font-weight: 700">{{ $t("programs") }}</p>
                  <li v-for="program in post.program" :key="program.id">
                    {{ program }}
                  </li>
                </ul>
                <ul>
                  <p style="font-weight: 700">{{ $t("positions") }}</p>
                  <li v-for="position in post.positions" :key="position.id">
                    {{ position }}
                  </li>
                </ul>
              </div>
              <div v-if="post.qualifications" class="match-qualifications">
                <p style="font-weight: 700">{{ $t("qualifications") }}</p>
                <p>{{ post.qualifications }}</p>
              </div>
            </div>
            <a
              v-if="post.link_to_positions"
              :href="post.link_to_positions"
              class="link"
              >{{ $t("company-learn-more") }} {{ post.title }} ></a
            >
          </div>
          <!-- END MATCH LIST -->
        </div>
        <!-- END MAIN CONTENT -->

        <!-- COMPANY CONTACT -->
        <div v-if="post.contact_persons" class="post-contact">
          <h3>{{ $t("company-contact") }}</h3>

          <div
            v-for="contact in this.post.contact_persons"
            class="company-contact"
            :key="contact.id"
          >
            <p v-if="contact.name">
              <b>{{ contact.name }}</b>
            </p>
            <a
              v-if="contact.email"
              class="email link"
              :href="'mailto:' + contact.email"
              >{{ contact.email }}
            </a>
            <p v-if="contact.email">{{ contact.phone_number }}</p>
          </div>
        </div>
        <!-- END COMPANY CONTACT -->

        <!-- MAP -->
        <!--         <div class="map-section">
          <h3 v-if="showEnglishMessage">Visit {{ post.title }} at:</h3>
          <h3 v-else>Visit {{ post.title }} at:</h3>
          <p>Location</p>
          <div class="map"><p>Map</p></div>
        </div> -->
        <!-- END MAP -->

        <!-- BOTTOM BUTTONS -->
        <div class="bottom-buttons">
          <Button
            :link="localePath('/companies/')"
            borderCol="--crl-black"
            bColor="transparent"
            tColor="--crl-black"
            class="bb"
            >{{ $t("go-back") }}</Button
          >

          <Button
            link="#top"
            borderCol="--crl-black"
            bColor="transparent"
            tColor="--crl-black"
            class="bb"
            >{{ $t("go-top") }}
          </Button>
        </div>
        <!-- END BOTTOM BUTTONS -->
      </article>
    </section>
  </main>
</template>

<script>
import Button from "@/components/Button.vue";
import marked from "marked";

export default {
  methods: {
    ImageLink(cmsImg) {
      const link = "/_nuxt/assets" + cmsImg;
      console.log(link);
      return link;
    },
  },
  props: {
    // bannerLink: "@/assets" + this.post.banner
  },
  //Gets a specific entry from the cms in the specified folder based on the value of params.
  async asyncData({ $content, params, error, i18n }) {
    let post;
    try {
      post = await $content(
        "companies",
        params.companies + "." + i18n.locale // Specifies that the fetch function should see difference between the same cms entry in different languages 
      ).fetch();
    } catch (e) {
      error({ message: "Entry not found" });
    }
    return { post };
  },
  components: {
    Button,
  },
  computed: {
    showEnglishMessage() { // Checks if the current chosen language is swedish.
      return this.$i18n.locale === "sv";
    },
    markdownToHtml() {
      return marked.parse(this.post.extra_text);
    },
  },
};
</script> 
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* BANNER */
.banner {
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  max-height: 18rem;
}
.banner-shade {
  background: RGB(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem 0.5rem 0rem 0rem;
}
.banner-overlay {
  position: absolute;
  bottom: 0;
  color: var(--clr-white);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.banner-overlay > h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
}
.banner-overlay > p {
  font-size: clamp(0.5rem, 2vw, 1rem);
}
.banner-img {
  width: 100%;

  border-radius: 0.5rem 0.5rem 0rem 0rem;
  object-fit: cover;
}
.banner-bar {
  position: absolute;
  bottom: calc(clamp(2px, 1vw, 10px) * -1);
  left: 0;
  width: 100%;
  height: clamp(2px, 1vw, 10px);
  background: linear-gradient(
    90deg,
    var(--clr-blue-600),
    var(--clr-pink-600),
    var(--clr-yellow-600)
  );
  border-radius: 0 0 1rem 1rem;
}
.logo {
  display: flex;
  width: clamp(12rem, 20vw, 16rem);
  height: 80%;
  padding: 2rem;
  margin: 2rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.email {
  font-family: work-sans;
}

.post-location {
  padding-bottom: clamp(0.2rem, 1vw, 0.5rem);
  border-bottom: solid 2px var(--clr-white);
}
.post-title {
  padding-bottom: clamp(0.1rem, 2.5vw, 3rem);
}
.post-tag {
  align-self: flex-end;
  padding-top: clamp(0.2rem, 1vw, 0.5rem);
  color: white;
}

/* COMPANY INFO */
.post-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 1.5rem;
  background: var(--clr-blue-100);
  color: var(--clr-blue-900);
  margin-top: 2rem;
  max-width: 60ch;
  align-self: center;
}

/* Table */
.table {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}
.table-left {
  font-weight: 600;
}
.table-right {
  padding-bottom: 0.3rem;
}

/* MAIN COMPANY CONTENT */
.post-content {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  max-width: 60ch;
}
.post-content > p {
  padding-bottom: 2rem;
}

.extra-text {
  margin-top: 4rem;
}

/* YouTube Video */
.video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  align-self: center;
}
.yt-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* SPONSOR IMAGES // GALLERY */
img {
  width: 100%;
  height: auto;
}
.gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 4rem 0;
}
.gallery .column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.gallery-img {
  border-radius: 10px;
}
.image-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
}

/* MATCH LIST */
.match-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
}

.match-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 2px var(--clr-grey-300) solid;
  border-bottom: 2px var(--clr-grey-300) solid;
}

.match-list-items {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  width: clamp(30ch, 80vw, 60ch);
}

.match-list > ul > li {
  font-weight: 10px;
}

/* COMPANY CONTACT */
.post-contact {
  width: clamp(30ch, 80vw, 60ch);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.company-contact {
  padding-bottom: 1rem;
}

.link {
  margin-top: 2rem;
  color: var(--clr-blue-600);
}

/* MAP */
.map-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
}
.map {
  background: var(--clr-yellow-200);
  width: clamp(30ch, 80vw, 60ch);
  height: 10rem;
}

/* BUTTOM BUTTONS */
.bottom-buttons {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
}
.bb {
  margin-bottom: 2rem;
}

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  .gallery {
    flex-direction: row;
  }
  .match-list-items {
    flex-direction: row;
  }

  .post-info {
    padding: 3rem 5rem;
    border-radius: 1rem;
  }
  .table {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5rem;
    padding: 2rem 0;
  }
  .table-left {
    font-weight: 600;
  }
  .table-right {
    text-align: right;
  }
  .bottom-buttons {
    flex-direction: row;
  }
  .bb {
    margin-right: 3rem;
  }
}
</style>

