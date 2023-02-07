<template>
  <main class="wrapper">
    <section v-if="post">
      <article class="post">
        <div v-if="post.banner" class="banner">
          <!-- <img src="@/assets/img/uploads/capgemini_banner.png" alt="company banner" class="banner-img"> -->
          <img :src="ImageLink(this.post.banner)" class="banner-img" />
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
            <p class="post-location">Location: TBA</p>
            <p v-if="post.banner" class="post-tag">// Sponsor</p>
            <p v-else class="post-tag">//</p>
          </div>
          <div class="banner-bar"></div>
        </div>


        <div class="post-info">
          <h3 style="align-self: center;">Company Info</h3>
          <div class="table">
            <p class="table-left">Established</p><p class="table-right">{{ post.founded }}</p>
            <p class="table-left">Slogan</p><p class="table-right">{{ post.slogan }}</p>
            <p class="table-left">Employees in Sweden</p><p class="table-right">{{ post.number_of_employees_in_sweden }}</p>
            <p class="table-left">Employees internationally</p><p class="table-right">{{ post.number_of_employees_in_internationally }}</p>
          </div>
          <p style="font-weight: 600;">Area of Business</p>
          <p>{{ post.area_of_business }}</p>
        </div>
        <div class="post-content">
          <h3>{{ post.slogan }}</h3>
          <p>{{ post.about_us }}</p>
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
              <p style="font-weight:900;">Programs:</p>
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
  align-items: center;
}
.banner {
  
  display: flex;
  justify-content: flex-start;
  position: relative;

}
.banner-shade {
  background: RGB(0,0,0,0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
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
      font-size: clamp(0.5rem, 5vw , 3rem)
}
.banner-overlay > p {
    font-size: clamp(0.5rem, 2vw, 1rem)
}
.banner-img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
}
.banner-bar {
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: clamp(2px, 1vw, 10px);
  background: linear-gradient(90deg, var(--clr-blue-600), var(--clr-pink-600), var(--clr-yellow-600));
  border-radius: 0 0 1rem 1rem;
}
.post-location {
  padding-bottom: clamp(0.2rem, 1vw, 0.5rem);
  border-bottom: solid 2px var(--clr-white);
}
.post-title {
  padding-bottom: clamp(0.1rem, 2.5vw, 3rem)
}
.post-tag {
  align-self: flex-end;
  padding-top: clamp(0.2rem, 1vw, 0.5rem);
  color: white;
}
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
  align-self: center
}

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


.post-content {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  max-width: 60ch;

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
  border-radius: 10px;
}
img {
  width: 100%;
  height: auto;
}
.logo {
  width: clamp(5rem, 20vw, 12rem);
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
}
</style>

