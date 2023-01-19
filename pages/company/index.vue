<template>
  <main>
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div>
    <li v-for="post of posts" v-if="post.title + showEnglishMessage" :key="post.title + showEnglishMessage">
      <!--<NuxtLink v-if="showEnglishMessage" :to="post.title + '.sv'">{{ post.title }}</NuxtLink>-->
      <NuxtLink :to="post.title + showEnglishMessage">{{ post.title }}</NuxtLink>
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
      if (this.$i18n.locale === 'sv'){
        return '.sv';
      }else{
        return '.en';
      }
    }
  }
}
</script> 