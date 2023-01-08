

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