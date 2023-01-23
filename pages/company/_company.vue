<template>
  <main >
    <section v-if="post">
      <article>
        <div v-if="showEnglishMessage"><div change_language(post.title, this.$i18n.locale)></div></div>
        <h1 class="">{{ post.slogan }}</h1>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("company", params.company).fetch();
    } catch (e) {
      error({ message: "Entry not found" });
    }
    return { post };
  },
  //not currently working
  change_language(title, language) {
    window.location.href = "http://localhost:3000/en/company/" + "title" + "language";
  },
  computed: {
    //not currently working
    showEnglishMessage() {
      const lang = this.$i18n.locale;
      return this.$i18n.locale === 'en';
    }
  }
};
</script> 
