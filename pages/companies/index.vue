<template>
  <main class="wrapper">
    <section v-if="posts">
      <h1 class="title">{{ $t("companies") }}</h1>

      <div class="filter-paragraph">
        {{ $t("showing-companies-for") }}
        <span
          class="dropdown-toggle programs-toggle"
          @click="programsVisible = !programsVisible"
        >
          {{ filterText(selectedPrograms, $t("programs").toLowerCase()) }}
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
            class="dropdown-program dropdown-filter-item"
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
            {{ $t("clear-selection") }}
          </button>
        </div>
        {{ $t("and") }}
        <span
          class="dropdown-toggle positions-toggle"
          @click="positionsVisible = !positionsVisible"
        >
          {{ filterText(selectedPositions, $t("positions").toLowerCase()) }}
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
        <div
          v-show="positionsVisible"
          class="dropdown-container positions-dropdown"
        >
          <div
            class="dropdown-positions dropdown-filter-item"
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
            {{ $t("clear-selection") }}
          </button>
        </div>
      </div>
      <button
        v-if="selectedPrograms.length !== 0 || selectedPositions.length !== 0"
        @click.prevent="
          selectedPrograms = [];
          selectedPositions = [];
        "
        class="clear-filter-btn"
      >
        {{ $t("clear-filters") }}
      </button>

      <div class="search-field">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="search-icon"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>

        <input
          class="search-input"
          type="text"
          ref="inputRef"
          v-model.trim="searchText"
          placeholder="Search companies"
        />
        <svg
          v-if="searchText"
          @click="clearInputAndFocus"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="clear-search-button"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </div>

      <div class="company-cards">
        <div v-for="post of filteredPosts" :key="post.slug">
          <!---<div v-if="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.sv'">-->
          <NuxtLink
            :to="
              localePath({
                name: 'companies-companies',
                params: { companies: post.slug.split('.')[0] },
              })
            "
          >
            <company-card class="company-card" :company="post" />
          </NuxtLink>
        </div>
      </div>
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
      searchText: null,
      allString: null,
    };
  },

  components: {
    CompanyCard,
  },
  // This method vill fetch a list of all the cms entries in a specified folder
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("companies").fetch(); // Gets the data from the content/companies path
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },

  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
    filteredPosts() {
      return this.posts.filter(
        (post) =>
          post.slug.includes("." + this.$i18n.locale) &&
          // display companies with selected conditions and matched search text
          this.filterOneCondition(post.program, this.selectedPrograms) &&
          this.filterOneCondition(post.positions, this.selectedPositions) &&
          this.searchCompany(post.title, this.searchText)
      );
    },
  },

  created() {
    this.allPrograms = this.$t("filter-programs");
    this.allPositions = this.$t("filter-positions");
    this.allString = this.$t("all");
  },

  mounted() {
    document.addEventListener("click", (event) => {
      this.hideDropdown(event, "programs");
      this.hideDropdown(event, "positions");
    });
  },

  methods: {
    filterOneCondition(condition, selection) {
      // when no filter selected, display all posts
      if (!selection || !selection.length) {
        return true;
      }
      // the text displaying on page is used as matching term, '&' would be
      // replaced with 'och' to match the actual text in CMS
      let formattedSelection = selection.map((s) => s.replace(/&/g, "och"));
      // when there's filter selected, display posts whose condition includes any item in selection
      return formattedSelection.some((s) => condition.includes(s));
    },

    searchCompany(title, searchText) {
      // when no searchText entered, display all posts
      if (!searchText) {
        return true;
      }
      // repalce a, o, u in searchText with strings including all special characters
      let formattedText = searchText.replace(/a/gi, "[aäå]")
                                    .replace(/o/gi, "[oö]")
                                    .replace(/u/gi, "[uü]");
      // when there's searchText entered, display posts whose title matches the searchText
      return new RegExp(formattedText, "i").test(title);
    },

    clearInputAndFocus() {
      this.searchText = null;
      this.$refs.inputRef.focus();
    },

    hideDropdown(event, filter) {
      if (
        !(
          event.target.closest(`.` + filter + `-toggle`) ||
          event.target.closest(`.dropdown-container`)
        )
      ) {
        this[filter + "Visible"] = false;
      }
    },

    // text in filter boxes
    filterText(selected, type) {
      // if no filter selected
      return selected.length < 1
      // display 'all' + type
        ? this.allString + " " + type
        // else if 1 filter selected
        : selected.length < 2
        // display the selected text
        ? selected[0]
        // else display the amount of selected filters + type
        : selected.length + " " + type;
    },
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
  line-height: 150%;
}

.dropdown-filter-item {
  padding: 0.25rem 0;
}

.positions-dropdown {
  right: 0;
}

.dropdown-toggle {
  padding: 0.25rem;
  border-radius: 0.5rem;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
}

.filter-paragraph {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 200%;
  margin-top: 2rem;
  font-family: work-sans;
  position: relative;
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

.search-field {
  width: 24rem;
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: solid 0.2rem var(--clr-grey-200);
  padding: 0.5rem;
  display: flex;
}

.search-icon {
  color: var(--clr-grey-500);
  width: 1.25rem;
}

.search-input {
  width: 100%;
  outline: none;
  border: none;
}

.search-field:focus-within {
  border-color: var(--clr-blue-500);
}

.clear-search-button {
  width: 1.25rem;
  background-color: none;
  border: none;
  cursor: pointer;
}

.company-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 64rem;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .company-cards {
    gap: 2rem;
  }
}

button {
  outline: none;
  border: none;
  background-color: var(--clr-blue-100);
  color: var(--clr-blue-900);
  font-family: Work-Sans;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.clear-filter-btn {
  margin-top: 1rem;
}
</style>