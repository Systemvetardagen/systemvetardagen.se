<template>
  <main class="wrapper">
    <section v-if="posts">
      <h1 class="title">{{ $t("companies") }}</h1>

      <div class="search-field">
        <input type="text" v-model="searchText" placeholder="Search companies by name">
      </div>

      <div class="filter-paragraph">
        Showing companies for
        <span
          class="dropdown-toggle programs-toggle"
          @click="programsVisible = !programsVisible"
          >all programs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="chevron"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <div v-show="programsVisible" class="dropdown-container">
          <div
            class="dropdown-program"
            v-for="program in allPrograms"
            :key="program"
          >
            <input
              type="checkbox"
              :name="program"
              :id="program"
              :value="program"
              v-model="selectedPrograms"
            />
            <label :for="program">{{ program }}</label>
          </div>
          <button @click.prevent="selectedPrograms = []">
            Clear selection
          </button>
        </div>
        and
        <span
          class="dropdown-toggle positions-toggle"
          @click="positionsVisible = !positionsVisible"
          >all positions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="chevron"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
        <div v-show="positionsVisible" class="dropdown-container">
          <div
            class="dropdown-positions"
            v-for="position in allPositions"
            :key="position"
          >
            <input
              type="checkbox"
              :name="position"
              :id="position"
              :value="position"
              v-model="selectedPositions"
            />
            <label :for="position">{{ position }}</label>
          </div>
          <button @click.prevent="selectedPositions = []">
            Clear selection
          </button>
        </div>
      </div>
      <div class="company-cards">
        <div v-for="post of filterdPosts" :key="post.slug">
          <!---<div v-if="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.sv'">-->
          <NuxtLink :to="post.slug">
            <company-card
              class="company-card"
              :company="post"
              v-if="
                filterOneCondition(post.program, selectedPrograms) &&
                filterOneCondition(post.positions, selectedPositions) &&
                searchCompany(post.title, searchText)
              "
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
      positionsVisible: false,
      programsVisible: false,
      selectedPrograms: [],
      selectedPositions: [],
      filterPrograms: [],
      filterPositions: [],
      searchText: null
    };
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
    this.allPrograms = this.$t("filter-programs");
    this.allPositions = this.$t("filter-positions");
  },
  methods: {
    filterOneCondition(condition, selection) {
      // when no filter selected, display all posts
      if (!selection || !selection.length) {
        return true;
      }
      // else display post whose condition includes any item in selection
      let formattedSelection = selection.map(s => s.replace(/&/g, 'och'))
      return formattedSelection.some(s => condition.includes(s));
    },
    searchCompany(title, searchText) {
      if (!searchText) {
        return true
      }
      let strippedInput = searchText.replace(/[^a-z]+/gi, '').toLowerCase()
      return new RegExp(strippedInput.split('').join('.*?'), 'i').test(title)
    }
  },
};
</script> 
<style scoped>
.dropdown-container {
  position: absolute;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--clr-white);
  margin-top: 1rem;
  box-shadow: 0 0.25rem 0.5rem #0002;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-toggle {
  padding: 0.25rem;
  -moz-user-select: none;
  user-select: none;
}

.filter-paragraph {
  line-height: 200%;
}

.programs-toggle {
  background-color: var(--clr-pink-500);
  display: inline-block;
}

.positions-toggle {
  background-color: var(--clr-yellow-500);
  display: inline-block;
}

.chevron {
  width: 1rem;
  margin-bottom: -0.15rem;
}

label {
  font-family: work-sans;
}
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