<template>
  <main>
    <section v-if="post">
      <article class="post">
        <div v-if="post.banner" class="banner">
          <!-- <img src="@/assets/img/uploads/capgemini_banner.png" alt="company banner" class="banner-img"> -->
          <img :src=ImageLink(this.post.banner) class="banner-img">
        </div>
        <div class="logo">
          <img :src=ImageLink(this.post.logo) alt="logo" class="logo-img">
        </div>
        <div>
          <h1 class="">{{ post.title }}</h1>
          <h3>{{ post.slogan }}</h3>
          <p>Grundades: {{ post.founded }}</p>
          <p>{{ post.area_of_business }}</p>
        </div>
        <p>{{ post.about_us }}</p>
        <div v-if="post.youtube_video" class="video">
          <iframe 
            class="yt-video" 
            :src=this.post.youtube_video 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
        
        <div v-if="post.sponsor_images" class="gallery">
          <div v-for="pic in this.post.sponsor_images" :key="pic.id" class="gallery-img">
            <img :src=ImageLink(pic) alt="sponsor image">
          </div>
        </div>

        <ul>
          <h3>Anställer studenter från:</h3>
          <li v-for="program in post.program" :key="program.id">
            {{ program }}
          </li>
        </ul>
        <p>Typer av anställningar: {{ post.positions }}</p>
        <p>{{ post.qualifications }}</p>


        <div>
          <h3>Kontaktperson</h3>
         
            <div v-for="contact in this.post.contact_persons" class="company-contact" :key="contact.id">
              <p>{{ contact.name }}</p>
              <a href="">{{ contact.email }}</a>
              <p>{{ contact.phone_number }}</p>
            </div>
          <!-- <p>Monia Letmark</p>
          <a href="linkto:monia.letmark@avanade.com"
            >monia.letmark@avanade.com</a
          > -->
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    ImageLink(cmsImg) {
      const link = "/_nuxt/assets" + cmsImg
      console.log(link)
      return link

    }
  },
  props: {
    // bannerLink: "@/assets" + this.post.banner
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("company", params.company).fetch();
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
  display: flex;
  justify-content: center;
}
.banner-img {
  width: 100%;
  height: auto;
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
</style>

