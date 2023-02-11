<template>
  <div class="wrapper">
    <h1>Catalog</h1>
    <Button link="/companies/" bColor="gradient">Companies</Button>
    <div v-for="post of filterdPosts" :key="post.slug">
      <h4>{{ post.title }}</h4>
      <img :src="post.post_image">
      <p>{{ post.date_of_creation }}</p>
      <p>{{ post.body }}</p>
      <li v-for="item in post.authors">{{ item }}</li>
      <li v-for="item in post.images"><img :src="item"></li>
    
    </div>

  </div>
</template>


<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("preview").fetch();
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
    count(post){
      this.post.length
    }
  }
}

</script>
