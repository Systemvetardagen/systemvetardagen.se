<template>
  <main class="wrapper">
    <section v-if="posts">
      <h1 class="title">{{ $t("companies") }}</h1>

      <!-- temporary form for filter. Please note that it is now only developed with core feature,
        allPrograms and allPositions are string arrays imported from a hardcoded file
        (extracted from static/admin/config.yml) and did not consider i18n -->
      <form>
        <h3>Programs:</h3>
        <label v-for="program in allPrograms" :key="program">
          <input type="checkbox" v-model="selectedPrograms" :value="program"/>
          {{ program }}
        </label>
        <button @click.prevent="selectedPrograms = []">Clear selection</button>
      </form>
      <form>
        <h3>Positions:</h3>
        <label v-for="position in allPositions" :key="position">
          <input type="checkbox" v-model="selectedPositions" :value="position">
          {{ position }}
        </label>
        <button @click.prevent="selectedPositions = []">Clear selection</button>
      </form>

      <div class="company-cards">
        <div v-for="post of filterdPosts" :key="post.slug">
          <!---<div v-if="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.sv'">-->
          <NuxtLink :to="post.slug">
            <company-card
            class="company-card"
            :company="post"
            v-if="filterOneCondition(post.program, selectedPrograms) && filterOneCondition(post.positions, selectedPositions)"
            />
          </NuxtLink>
        </div>
      </div>

      <!--<div v-else="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.en'">
              <NuxtLink :to="post.title.toLowerCase() + '.en'">
                <company-card class="company-card" :company="post" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>-->
    </section>
  </main>
</template>

<script>

import CompanyCard from "@/components/CompanyCard.vue";

export default {
  data() {
    return {
      selectedPrograms: [],
      selectedPositions: []
    }
  },
  components: {
    CompanyCard,
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("companies").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
    filterdPosts() {
      return this.posts.filter((e) => e.slug.includes("." + this.$i18n.locale));
    },
  },
  created() {
    this.allPrograms = require("@/content/filter_data.json").programs
    this.allPositions = require("@/content/filter_data.json").positions
  },
  methods: {
    filterOneCondition(condition, selection) {
      // when no filter selected, display all posts
      if (!selection || !selection.length) {
        return true
      }
      // else display post whose condition includes any item in selection
      return selection.some(s => condition.includes(s))
    }
  }
};
</script> 
<style scoped>
.company-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 64rem;
}
.company-card {
  margin: 1rem;
}
</style>