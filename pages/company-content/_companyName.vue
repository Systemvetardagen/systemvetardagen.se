<template>
  <main class="wrapper" id="top">
    <section v-if="post">
      <article class="post" id="post">
        <!-- BANNER -->
        <div class="banner">
          <img v-if="banner.url" :src="banner.url" class="banner-img" />
          <img
            v-else
            src="@/assets/img/nod_gradient_colors.jpg"
            alt="No sponsor image"
            class="banner-img"
          />
          <div class="banner-shade">
            <input
              type="file"
              style="display: none"
              ref="bannerInput"
              accept="image/*"
              @change="onBannerPicked"
            />
            <label
              for="backgroundImageInput"
              class="upload-label"
              @click="onPickBanner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                id="upload"
              >
                <path
                  d="M15.213 6.639c-.276 0-.546.025-.809.068C13.748 4.562 11.716 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199 0 .256.02.508.057.756a3.567 3.567 0 0 0-.429-.027C1.619 8.928 0 10.51 0 12.463S1.619 16 3.617 16H8v-4H5.5L10 7l4.5 5H12v4h3.213C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.681-4.787-4.681z"
                ></path>
              </svg>
              <span>Upload</span>
            </label>
          </div>
          <!-- <div class="banner-overlay">
            <div class="logo">
              <img v-if="logo" :src="logo" alt="logo" class="logo-img" />
              <input
                type="file"
                style="display: none"
                ref="backgroundImageInput"
                accept="image/*"
                @change="onBackgroundImagePicked"
              />
              <label v-if="!logo"
                for="backgroundImageInput"
                class="upload-label"
                @click="onPickBackgroundImage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  id="upload"
                >
                  <path
                    d="M15.213 6.639c-.276 0-.546.025-.809.068C13.748 4.562 11.716 3 9.309 3c-2.939 0-5.32 2.328-5.32 5.199 0 .256.02.508.057.756a3.567 3.567 0 0 0-.429-.027C1.619 8.928 0 10.51 0 12.463S1.619 16 3.617 16H8v-4H5.5L10 7l4.5 5H12v4h3.213C17.856 16 20 13.904 20 11.32c0-2.586-2.144-4.681-4.787-4.681z"
                  ></path>
                </svg>
                <span>Upload</span>
              </label>
            </div>
          </div> -->
          <div class="banner-bar"></div>
        </div>
        <!-- END BANNER -->

        <!-- CCOMPANY INFO -->
        <div class="post-info">
          <h3 style="align-self: center">{{ $t("company-info") }}</h3>
          <div class="table">
            <p class="table-left required">
              {{ $t("established") }}
            </p>
            <input type="text" name="name" v-model="founded" required />
            <!-- <p v-if="post.founded" class="table-right">{{ post.founded }}</p> -->
            <p class="table-left required">{{ $t("slogan") }} - en</p>
            <input type="text" name="name" v-model="slogan.en" required />
            <p class="table-left required">{{ $t("slogan") }} - sv</p>
            <input type="text" name="name" v-model="slogan.sv" required />
            <p class="table-left required">
              {{ $t("employees-sv") }}
            </p>
            <input
              type="text"
              name="name"
              v-model="number_of_employees_in_Sweden"
              required
            />
            <p class="table-left required">
              {{ $t("employees-int") }}
            </p>
            <input
              type="text"
              name="name"
              v-model="number_of_employees_in_internationally"
              required
            />
          </div>
          <p style="font-weight: 600" class="table-left">
            {{ $t("bis-area") }} - en
          </p>
          <textarea
            type="text"
            name="name"
            v-model="area_of_business.en"
            required
          />
          <p style="font-weight: 600" class="table-left">
            {{ $t("bis-area") }} - sv
          </p>
          <textarea
            type="text"
            name="name"
            v-model="area_of_business.sv"
            required
          />
        </div>
        <!-- END COMPANY INFO -->

        <button type="submit" class="btn-form" @click="submit">
          {{ $t("submit") }}
        </button>

        <!-- ARTICLE MAIN CONTENT -->
        <div v-if="post.slogan && post.about_us" class="post-content">
          <h3>{{ post.slogan[locale] }}</h3>
          <p>{{ post.about_us[locale] }}</p>

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
          <div v-if="post.title" class="match-list">
            <h3>
              {{ post.title }}
              {{ $t("looking-for") }}
            </h3>
            <div class="match-items">
              <div class="match-list-items">
                <ul>
                  <p style="font-weight: 700">{{ $t("programs") }}</p>
                  <li
                    v-if="post.program"
                    v-for="program in post.program"
                    :key="program[locale]"
                  >
                    {{ program[locale] }}
                  </li>
                </ul>
                <ul>
                  <p style="font-weight: 700">{{ $t("positions") }}</p>
                  <li
                    v-if="post.positions"
                    v-for="position in post.positions"
                    :key="position[locale]"
                  >
                    {{ position[locale] }}
                  </li>
                </ul>
              </div>
              <div v-if="post.qualifications" class="match-qualifications">
                <p style="font-weight: 700">{{ $t("qualifications") }}</p>
                <p>{{ post.qualifications[locale] }}</p>
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
import {
  getDataFromDataBase,
  uploadDataToStorage,
  writeToDataBase,
} from "@/app/firebase.js";

export default {
  methods: {
    async submit(event) {
      event.preventDefault();

      let BannerUrl = await uploadDataToStorage(
        `${this.companyName}/${this.banner.name}`,
        this.banner.file
      );

      const data = {
        founded: this.founded,
        slogan: {
            en: this.slogan.en,
            sv: this.slogan.sv
        },
        number_of_employees_in_Sweden: this.number_of_employees_in_Sweden,
        number_of_employees_in_internationally: this.number_of_employees_in_internationally,
        area_of_business: {
            en: this.area_of_business.en,
            sv: this.area_of_business.sv
        },
        banner: {
            url: BannerUrl,
            name: this.banner.name
        }
      }

      writeToDataBase(`${this.companyName}`, data)
    },
    ImageLink(cmsImg) {
      const link = "/_nuxt/assets" + cmsImg;
      console.log(link);
      return link;
    },
    onPickBanner() {
      this.$refs.bannerInput.click();
    },
    async onBannerPicked(event) {
      const files = event.target.files;
      const name = files[0].name;
      let url = URL.createObjectURL(files[0]);
      this.banner.url = url;
      this.banner.name = name;
      this.banner.file = files[0];

      //   let downloadUrl = await uploadDataToStorage(
      //     `${this.companyName}/${name}`,
      //     files[0]
      //   );
      //   writeToDataBase(`${this.companyName}/backgroundImage`, {
      //     url: downloadUrl,
      //     name: name,
      //   });
    },
  },
  props: {
    // bannerLink: "@/assets" + this.post.banner
  },
  //Gets a specific entry from the cms in the specified folder based on the value of params.
  async asyncData({ $content, params, error, i18n }) {
    let companyName = params.companyName;
    let banner = {
      url: "",
      file: "",
    };
    let logo = {
      url: "",
      file: "",
    };
    let founded = "";
    let area_of_business = {
      sv: "",
      en: "",
    };
    let contact_persons = [];
    let number_of_employees_in_Sweden = "";
    let number_of_employees_in_internationally = "";
    let positions = [];
    let program = [];
    let slogan = {
      sv: "",
      en: "",
    };
    let title = "";
    let post;
    let locale = i18n.locale || "sv";
    try {
      post = await getDataFromDataBase(`companies/${params.companyName}`);
    } catch (e) {
        post = {}
      error({ message: "Entry not found" });
    }
    return {
      post,
      locale,
      banner,
      logo,
      founded,
      area_of_business,
      contact_persons,
      number_of_employees_in_Sweden,
      number_of_employees_in_internationally,
      positions,
      program,
      slogan,
      title,
      companyName,
    };
  },
  components: {
    Button,
  },
  computed: {
    showEnglishMessage() {
      // Checks if the current chosen language is swedish.
      return this.$i18n.locale === "sv";
    },
    markdownToHtml() {
      return marked.parse(this.post.extra_text);
    },
  },
};
</script>
<style scoped>
textarea {
  width: 100%;
}
input {
  width: 95%;
}
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-shade label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  fill: white;
  cursor: pointer;
  z-index: 100;
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
