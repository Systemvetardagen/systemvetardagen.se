<template>
  <main class="wrapper">
    <section v-if="posts">
      <h1 class="title">{{ $t("companies") }}</h1>
      <div class="company-cards">
        <div v-for="post of filterdPosts" :key="post.slug">
          <!---<div v-if="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.sv'">-->
              <NuxtLink :to="post.slug">
                <company-card class="company-card" :company="post" />
              </NuxtLink>
            </div>
          </div>

          <!--<div v-else="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.en'">
              <NuxtLink :to="post.title.toLowerCase() + '.en'">
                <company-card class="company-card" :company="post" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>-->
    </section>
  </main>
</template>

<script>
import CompanyCard from "@/components/CompanyCard.vue";

export default {
  components: {
    CompanyCard,
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("companies").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
    filterdPosts(){
      if(this.showEnglishMessage){
        return this.posts.filter(e => e.slug.includes("." + this.$i18n.locale))
      }
    }
  },
  methods: {

  }
};
</script> 
<style scoped>
.company-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 64rem;
}
.company-card {
  margin: 1rem;
}
</style>