<template>
  <main>
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div>
    <div v-for="post of posts" :key="post.slug">
      <li v-if="post.slug === post.title + '.sv'">
      <NuxtLink :to="post.title + '.sv'">{{ post.title }}</NuxtLink>
      </li>
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
}
</script> 