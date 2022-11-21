

<template>
    <div class="info">
        <p>Explaination how to use the catalog</p>
    </div>
    <div v-for="post in posts.Content list">
        <div class="sponsor1"><img src={{post.Logo}} alt="logo"></div>
        <div class="sponsor1"><p>{{ post.Title }}</p></div>
    </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("Catalog").fetch();
    } catch (e) {
      error({ message: "Blog post not found" });
    }
    return { posts };
  },
}
</script>