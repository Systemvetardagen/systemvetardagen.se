<template>
  <main class="wrapper">
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div class="company-cards">
        <div v-for="post of posts" :key="post.slug">
          <div v-if="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.sv'">
              <NuxtLink :to="post.title.toLowerCase() + '.sv'">
                <company-card class="company-card" :company="post" />
              </NuxtLink>
            </div>
          </div>

          <div v-else="showEnglishMessage">
            <li v-if="post.slug === post.title.toLowerCase() + '.en'">
              <NuxtLink :to="post.title.toLowerCase() + '.en'">{{
                post.title
              }}</NuxtLink>
            </li>
          </div>
        </div>
      </div>
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
  },
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