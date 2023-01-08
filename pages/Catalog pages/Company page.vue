<template>
  <main>
    <section v-if="post">
      <h1 class="">{{ post.title }}</h1>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("Company_pages", params.Company_pages).fetch();
    } catch (e) {
      error({ message: "Entry not found" });
    }
    return { post };
  }
}

</script> 


