<template>
  <div class="wrapper">
    <h1>Catalog</h1>
    <Button link="/companies/" bColor="gradient">Companies</Button>
    <div v-for="post of filterdPosts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  computed: {
    filterdPosts() {
      return this.posts.filter((e) => e.slug.includes("." + this.$i18n.locale));
    },
  },
  methods: {
    count(post) {
      this.post.length;
    },
  },
};
</script>
