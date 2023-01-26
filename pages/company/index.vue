<template>
  <main>
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div>
    <div v-for="post of posts" :key="post.slug">
      <div v-if="showEnglishMessage">
        <li v-if="post.slug === post.title + '.sv'">
        <NuxtLink :to="post.title + '.sv'">{{ post.title }}</NuxtLink>
      </li>
      </div>

      <div v-else="showEnglishMessage">
        <li v-if="post.slug === post.title + '.en'">
        <a href="javascript:create(post.title)">link</a>
        <!--<NuxtLink custom="true" :to="'http://localhost:3000/en/compnay/' + post.title + '.en'">{{ post.title }}</NuxtLink>-->
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
      posts = await $content("company").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === 'sv';
    },
    create(post){
    return "http://localhost:3000/en/compnay/" + post + ".en";
  }
  },
  methods:{
  create(post){
    return "http://localhost:3000/en/compnay/" + post + ".en";
  }
}
}
</script> 