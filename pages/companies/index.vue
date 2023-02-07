<template>
  <main class="wrapper">
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div>
        <div v-for="post of posts" :key="post.slug">
          <div v-if="showEnglishMessage">
            <li v-if="post.slug === post.title.toLowerCase() + '.sv'">
              <NuxtLink :to="post.title.toLowerCase() + '.sv'">{{ post.title }}</NuxtLink>
            </li>
          </div>

          <div v-else="showEnglishMessage">
            <li v-if="post.slug === post.title.toLowerCase() + '.en'">
              <NuxtLink :to="post.title.toLowerCase() + '.en'">{{ post.title }}</NuxtLink>
            </li>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
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