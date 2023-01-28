<template>
  <main>
    <section v-if="posts">
      <h1 class="title">About</h1>
      <div class="leader-cards">
        <div class="leader-card" v-for="post of posts" :key="post.slug">
          <div>
            <h3 class="name">{{ post.name }}</h3>
            <p>{{ post.role }}</p>
          </div>
          <div>
            <a v-if="post.linkedin_link" :href="post.linkedin_link">LinkedIn</a>
            <a v-if="post.portfolio_link" :href="post.portfolio_link"
              >Link to Portfolio</a
            >
          </div>
          <p v-if="post.about_you">{{ post.about_you }}</p>
          <div>
            <p>DISK-email: {{ post.disk_mail }}</p>
            <p>Personal email: {{ post.personal_mail }}</p>
          </div>
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
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
  },
};
</script> 

<style scoped>
/* TEMPORARY*/
section {
  margin-top: 3rem;
}

.name {
  color: var(--clr-blue-900);
}
.leader-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.leader-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--clr-blue-100);
  border-radius: 1rem;
  width: 24rem;
}
</style>