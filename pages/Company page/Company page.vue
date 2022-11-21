
<template>
    <img src={{post.Logo}} alt = "Company logo">
    <p>{{post.title}}</p>
    <div v-for="element in post.The programs you hire from">
        <p>{{element.Program}}</p>
    </div>
    <nuxt-content :document="post" />
    <div v-for="element in post.Open positions">
        <p>{{element.Link}}</p>
    </div>

</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("Company page", params.blog).fetch();
    } catch (e) {
      error({ message: "Blog post not found" });
    }
    return { post };
  }
}
</script> 


