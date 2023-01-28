<template>
  <main>
    <section v-if="posts">
      <h1 class="title">Company</h1>
      <div>
        <div class="leader-card" v-for="post of posts" :key="post.slug">
          <h3 class="name">{{ post.name }}</h3>
          <p>{{ post.role }}</p>
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
      posts = await $content("about").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
};
</script> 

<style scoped>
.leader-card {
  padding: 1rem;
  border: solid 0.25rem var(--clr-grey-900);
  border-radius: 0.5rem;
  min-width: 16rem;
}
</style>