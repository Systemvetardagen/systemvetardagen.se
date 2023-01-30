<template>
  <div>
    <section v-if="posts">
      <h1 class="title">About</h1>
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
import aboutCard from "@/components/aboutCard.vue";

export default {
  components: {
    aboutCard,
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
        return p.includes("sv");
      }
      return p.includes("en");
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
}

.leader-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>