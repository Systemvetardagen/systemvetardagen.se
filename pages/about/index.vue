<template>
  <div>
    <section v-if="posts">
      <h1 class="title">{{ $t("about-heading") }}</h1>
      <h2>{{ $t("project-group-heading") }}</h2>
      <div class="leader-cards">
        <about-card
          v-for="post in postsGeneral"
          v-if="lang(post.slug)"
          :post="post"
          :key="post.id"
        />
      </div>
      <div class="leader-cards">
        <about-card
          v-for="post in postsGroupLeader"
          v-if="lang(post.slug)"
          :post="post"
          :key="post.id"
        />
      </div>
    </section>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue";

export default {
  components: {
    AboutCard,
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("about").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  methods: {
    lang(postName) {
      let p = String(postName);
      if (this.$i18n.locale == "sv") {
        return p.includes(".sv");
      }
      return p.includes(".en");
    },
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale == "sv";
    },
    postsGeneral: function () {
      return this.posts.filter((i) => i.group === "General");
    },
    postsGroupLeader: function () {
      return this.posts.filter((i) => i.group === "Group Leader");
    },
  },
};
</script> 

<style scoped>
/* TEMPORARY*/
section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
}

.leader-cards {
  max-width: 64rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>