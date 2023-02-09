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
            <div class="logo">
              <img
                :src="ImageLink(this.post.logo)"
                alt="logo"
                class="logo-img"
              />
            </div>

            <h1 class="post-title">{{ post.title }}</h1>
            <p class="post-location">{{ $t("location") }}: TBA</p>
            <p v-if="post.banner" class="post-tag">// Sponsor</p>
            <p v-else class="post-tag">//</p>
          </div>
          <div class="banner-bar"></div>
        </div>
        <!-- END BANNER -->

        <!-- CCOMPANY INFO -->
        <div class="post-info">
          <h3 style="align-self: center">{{ $t("company-info") }}</h3>
          <div class="table">
            <p class="table-left">{{ $t("established") }}</p>
            <p class="table-right">{{ post.founded }}</p>
            <p class="table-left">{{ $t("slogan") }}</p>
            <p class="table-right">{{ post.slogan }}</p>
            <p class="table-left">{{ $t("employees-sv") }}</p>
            <p class="table-right">{{ post.number_of_employees_in_Sweden }}</p>
            <p class="table-left">{{ $t("employees-int") }}</p>
            <p class="table-right">
              {{ post.number_of_employees_in_internationally }}
            </p>
          </div>
          <p style="font-weight: 600">{{ $t("bis-area") }}</p>
          <p>{{ post.area_of_business }}</p>
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
        </div>
        <!-- END MAIN CONTENT -->

        <!-- SPONSOR IMAGES // GALLERY -->
        <div v-if="post.sponsor_images" class="gallery">
          <div class="column">
            <div class="gallery-item">
              <nuxt-img
                :src="this.post.sponsor_images[0]"
                alt="gallery image 1"
                class="gallery-img"
              />
            </div>
          </div>
          <div class="column">
            <div class="gallery-item">
              <nuxt-img
                :src="this.post.sponsor_images[1]"
                alt="gallery image 2"
                class="gallery-img"
              />
            </div>
            <div class="gallery-item">
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
          <div class="match-list-items">
            <ul>
              <p style="font-weight: 700">{{ $t("programs") }}:</p>
              <li v-for="program in post.program" :key="program.id">
                {{ program }}
              </li>
            </ul>
            <ul>
              <p style="font-weight: 700">{{ $t("positions") }}:</p>
              <li v-for="position in post.positions" :key="position.id">
                {{ position }}
              </li>
            </ul>
          </div>
        </div>
        <!-- END MATCH LIST -->

        <!-- COMPANY CONTACT -->
        <div class="post-contact">
          <h3>{{ $t("company-contact") }}</h3>

          <div
            v-for="contact in this.post.contact_persons"
            class="company-contact"
            :key="contact.id"
          >
            <p>{{ contact.name }}</p>
            <a :href="'mailto:' + contact.email">{{ contact.email }} </a>
            <p>{{ contact.phone_number }}</p>
          </div>
        </div>
        <!-- END COMPANY CONTACT -->

        <!-- MAP -->
        <div class="map-section">
          <h3 v-if="showEnglishMessage">Visit {{ post.title }} at:</h3>
          <h3 v-else>Visit {{ post.title }} at:</h3>
          <p>Location</p>
          <div class="map"><p>Map</p></div>
        </div>
        <!-- END MAP -->

        <!-- BOTTOM BUTTONS -->
        <div class="bottom-buttons">
          <Button
            v-if="showEnglishMessage"
            link="/companies/"
            borderCol="--crl-black"
            bColor="transparent"
            tColor="--crl-black"
            class="bb"
            >Gå tillbaka</Button
          >
          <Button
            v-else
            link="/en/companies/"
            borderCol="--crl-black"
            bColor="transparent"
            tColor="--crl-black"
            class="bb"
            >Go Back
          </Button>

          <Button
            link="#top"
            borderCol="--crl-black"
            bColor="transparent"
            tColor="--crl-black"
            class="bb"
            >Go Up
          </Button>
        </div>
        <!-- END BOTTOM BUTTONS -->
      </article>
    </section>
  </main>
</template>

<script>
import Button from "@/components/Button.vue";
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
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("companies", params.companies).fetch();
    } catch (e) {
      error({ message: "Entry not found" });
    }
    return { post };
  },
  components: {
    Button,
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
  },
};
</script> 
<style>
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
  padding: clamp(0.1rem, 2vw, 1.5rem) calc(clamp(-5%, -10vw, -18%) * -1);
  color: var(--clr-white);
  width: 100%;
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
  max-height: 32rem;
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
  width: clamp(5rem, 20vw, 12rem);
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
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  max-width: 60ch;
}
.post-content > p {
  padding-bottom: 2rem;
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
  padding: 10rem 0;
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
.match-list-items {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  border-top: 2px var(--clr-black) solid;
  border-bottom: 2px var(--clr-black) solid;
  width: clamp(30ch, 80vw, 60ch);
}
.match-list-items > ul {
  padding: 1rem 2rem;
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

