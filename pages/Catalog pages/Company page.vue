

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("Company_pages", params.blog).fetch();
    } catch (e) {
      error({ message: "Blog post not found" });
    }
    return { post };
  }
}

</script> 


