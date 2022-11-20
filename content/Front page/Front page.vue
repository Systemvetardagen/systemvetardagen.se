<style>
.sponsor1 {
    display: inline-block;
} 
</style>

<template>
    <div class="info">
        <p>Explaination how to use the catalog</p>
    </div>
    <div v-for="post in posts">
        <div class="sponsor1"><img src={{post.Sponsor Logo}} alt="logo"></div>
        <div class="sponsor1"><a href={{post.Sponsor Link}}>{{ post.Sponsor Title }}</a></div>
    </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("Front page").fetch();
    } catch (e) {
      error({ message: "Blog post not found" });
    }
    return { posts };
  },
}
</script>