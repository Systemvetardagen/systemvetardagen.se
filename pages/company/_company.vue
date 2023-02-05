<template>
  <main>
    <section v-if="post">
      <article>
        <div v-if="post.banner" class="banner">
          <!-- <img src="@/assets/img/uploads/capgemini_banner.png" alt="company banner" class="banner-img"> -->
          <img :src=ImageLink(this.post.banner) class="banner-img">
        </div>
        <div>
          <h1 class="">{{ post.title }}</h1>
          <h3>{{ post.slogan }}</h3>
          <p>Grundades: {{ post.founded }}</p>
          <p>{{ post.area_of_business }}</p>
        </div>
        <p>{{ post.about_us }}</p>
        <iframe :src=this.post.youtube_video frameborder="0"></iframe>
        <ul>
          <h3>Anställer studenter från:</h3>
          <li v-for="program in post.Program" :key="program.id">
            {{ program }}
          </li>
        </ul>
        <p>Typer av anställningar: {{ post.positions }}</p>
        <p>{{ post.qualifications }}</p>
        <div>
          <h3>Kontaktperson</h3>
          <p>Monia Letmark</p>
          <a href="linkto:monia.letmark@avanade.com"
            >monia.letmark@avanade.com</a
          >
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
.banner {
  display: flex;
  justify-content: center;
}
.banner-img {
  width: 100%;
  height: auto;
}
</style>

