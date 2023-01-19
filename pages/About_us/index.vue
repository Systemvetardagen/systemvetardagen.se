








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
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === 'sv';
    }
  }
}
</script> 