<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Company</h1>
      <posts post-type="company" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("Company_pages").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
}
</script> 