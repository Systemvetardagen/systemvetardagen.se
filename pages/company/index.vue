<template>
  <main>
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink v-if="showEnglishMessage" :to="post.title + '.sv'">{{ post.title }}</NuxtLink>
      <NuxtLink v-else="showEnglishMessage" :to="post.title + '.en'">{{ post.title }}</NuxtLink>
    </li>
  </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("company").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  computed: {
  showEnglishMessage() {
    return this.$i18n.locale === 'sv';
    }
  }
}
</script> 