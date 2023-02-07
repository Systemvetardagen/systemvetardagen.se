<template>
  <main class="wrapper">
    <section v-if="post">
      <article class="post">
        <div v-if="post.banner" class="banner">
          <!-- <img src="@/assets/img/uploads/capgemini_banner.png" alt="company banner" class="banner-img"> -->
          <img :src="ImageLink(this.post.banner)" class="banner-img" />

          <div class="banner-overlay">
            <div class="logo">
              <img
                :src="ImageLink(this.post.logo)"
                alt="logo"
                class="logo-img"
              />
            </div>

            <h1 class="post-title">{{ post.title }}</h1>
            <p class="post-location">Location: ??</p>
            <p v-if="post.banner" class="post-tag">// Sponsor</p>
            <p v-else class="post-tag">//</p>
          </div>
        </div>
        <div class="post-info">
          <p>Grundades: {{ post.founded }}</p>
          <p>{{ post.area_of_business }}</p>
        </div>
        <div class="post-content">
          <h3>{{ post.slogan }}</h3>
          <p align="justify">{{ post.about_us }}</p>
          <div v-if="post.youtube_video" class="video">
            <iframe
              class="yt-video"
              :src="this.post.youtube_video"
              frameborder="0"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>

        <div v-if="post.sponsor_images" class="gallery">
          <div class="column">
            <div class="gallery-item">
              <img
                :src="ImageLink(this.post.sponsor_images[0])"
                alt="galery image 1"
                class="gallery-img"
              />
            </div>
          </div>
          <div class="column">
            <div class="gallery-item">
              <img
                :src="ImageLink(this.post.sponsor_images[1])"
                alt="galery image 2"
                class="gallery-img"
              />
            </div>
            <div class="gallery-item">
              <img
                :src="ImageLink(this.post.sponsor_images[2])"
                alt="galery image 3"
                class="gallery-img"
              />
            </div>
          </div>
        </div>

        <div class="match-list">
          <h3>{{ post.title }} is looking for:</h3>
          <div class="match-list-items">
            <ul>
              <p>Programs:</p>
              <li v-for="program in post.program" :key="program.id">
                {{ program }}
              </li>
            </ul>
            <ul>
              <p>Positions:</p>
              <li v-for="position in post.positions" :key="position.id">
                {{ position }}
              </li>
            </ul>
          </div>
        </div>

        <p>{{ post.qualifications }}</p>

        <div style="padding: 3rem 5%">
          <h3>Kontaktperson(er)</h3>

          <div
            v-for="contact in this.post.contact_persons"
            class="company-contact"
            :key="contact.id"
          >
            <p>{{ contact.name }}</p>
            <a href="">{{ contact.email }}</a>
            <p>{{ contact.phone_number }}</p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
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
};
</script> 
<style>
.post {
  display: flex;
  flex-direction: column;
}
.banner {
  background: linear-gradient(black, black, 0.1);
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.banner-overlay {
  position: absolute;
  bottom: 5%;
  padding: 1rem 5%;
  color: var(--clr-blue-900);
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 30;
}
.banner-img {
  width: 100%;
  height: auto;
}
.post-location {
  padding-bottom: 0.5rem;
  border-bottom: solid 2px var(--clr-white);
}
.post-title {
  padding-bottom: 2rem;
}
.post-tag {
  align-self: flex-end;
  padding-top: 0.5rem;
  color: white;
}
.post-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.post-content {
  padding: 5rem 5%;
  display: flex;
  flex-direction: column;
}
.post-content > p {
  padding-bottom: 2rem;
}
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
}
img {
  width: 100%;
  height: auto;
}
.logo {
  width: 10rem;
}

.gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10rem 0;
}

.gallery .column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
}

.match-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5%;
}
.match-list-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-top: 2px var(--clr-black) solid;
  border-bottom: 2px var(--clr-black) solid;
}

.match-list-items > ul {
  padding: 1rem 2rem;
}

.match-list > ul > li {
  font-weight: 10px;
}

.company-contact {
  padding-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
  .gallery {
    flex-direction: row;
  }
  .match-list-items {
    flex-direction: row;
  }
}
</style>

