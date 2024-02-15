<template>
  <main class="wrapper">
    <WarningBanner>{{ $t("catalog_page.warning_banner_message") }}</WarningBanner>
    <section v-if="posts" class="catalog-section">
      <h1 v-if="isPreview" class="preview-title">This is a preview of the page</h1>
      <h1 class="title">{{ $t("catalog_page.companies") }}</h1>

      <div class="filter-paragraph">

        {{ $t("catalog_page.showing_companies_for") }}

        <span class="dropdown-toggle programs-toggle" @click="programsVisible = !programsVisible">
          {{ filterText(selectedPrograms, $t("catalog_page.programs").toLowerCase()) }}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="chevron">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        <div v-show="programsVisible" class="dropdown-container">
          <p class="dropdown-heading">{{ $t("catalog_page.filter_categories.bachelors") }}</p>
          <div class="dropdown-program dropdown-filter-item" v-for="program in allPrograms[locale]" v-if="!program.master" :key="program.id">
            <input type="checkbox" :name="program" :id="program.id" :value="program" v-model="selectedPrograms" />
            <label :for="program.id">{{ program.name }}</label>
            <!-- <span class="tag master" v-if="program.master">Master</span>
            <span class="tag bachelor" v-else>Bachelor</span> -->
          </div>

          <div class="dropdown-spacer"></div>
          <p class="dropdown-heading">{{ $t("catalog_page.filter_categories.masters") }}</p>
          <div class="dropdown-program dropdown-filter-item" v-for="program in allPrograms[locale]" v-if="program.master" :key="program.id">
            <input type="checkbox" :name="program" :id="program.id" :value="program" v-model="selectedPrograms" />
            <label :for="program.id">{{ program.name }}</label>
            <!-- <span class="tag master" v-if="program.master">Master</span>
            <span class="tag bachelor" v-else>Bachelor</span> -->
          </div>
          <button @click.prevent="selectedPrograms = []" class="clear-filter-btn">
            {{ $t("catalog_page.clear_selection") }}

          </button>
        </div>
        {{ $t("catalog_page.and") }}
        <span class="dropdown-toggle positions-toggle" @click="positionsVisible = !positionsVisible">
          {{ filterText(selectedPositions, $t("catalog_page.positions").toLowerCase()) }}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="chevron">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        <div v-show="positionsVisible" class="dropdown-container positions-dropdown">
          <div class="dropdown-positions dropdown-filter-item" v-for="position in allPositions[locale]"
            :key="position.id">
            <input type="checkbox" :name="position" :id="position.id" :value="position" v-model="selectedPositions" />
            <label :for="position">{{ position.name }}</label>
          </div>

          <button class="clear-filter-btn" @click.prevent="selectedPositions = []">
            {{ $t("catalog_page.clear_selection") }}

          </button>
        </div>
      </div>
      <button v-if="selectedPrograms.length !== 0 || selectedPositions.length !== 0" @click.prevent="
        selectedPrograms = [];
      selectedPositions = [];
      " class="clear-filter-btn">

        {{ $t("catalog_page.clear_filters") }}

      </button>

      <div class="search-field">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="search-icon">
          <path fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>

        <input class="search-input" type="text" ref="inputRef" v-model.trim="searchText" :placeholder="$t('catalog_page.search_input.placeholder')"
       />
        <svg v-if="searchText" @click="clearInputAndFocus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
          fill="currentColor" class="clear-search-button">
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </div>

      <div class="company-card-container">
        <div v-if="!showCompanies && !isPreview">
          <h2>{{$t('catalog_page.coming_soon')}}</h2>
          <!-- <h2>Check out the <NuxtLink :to="localePath('/companies/old')">old</NuxtLink> catalog</h2> -->
        </div>

        <!-- Partners -->
        <div v-if="filteredPosts.some(post => post.sponsor)">
          <h3 class="cat-heading">{{$t('catalog_page.partners')}}</h3>
          <div class="company-cards">
            <!---<div v-if="showEnglishMessage">
              <div v-if="post.slug === post.title.toLowerCase() + '.sv'">-->
            <NuxtLink
              v-for="post of filteredPosts"
              :key="post.company_name"
              v-if="post.sponsor"
              :to="localePath({
                name: 'companies-companies',
                params: { companies: post.company_name },
              })
              ">
              <company-card class="company-card" :company="post" />
            </NuxtLink>
          </div>
          <div class="underline"></div>
        </div>

        <!-- Non-Partners -->
        <h3 class="cat-heading">{{$t('catalog_page.all_companies')}}</h3>
        <div class="company-cards">
          <!---<div v-if="showEnglishMessage">
            <div v-if="post.slug === post.title.toLowerCase() + '.sv'">-->
          <NuxtLink
            v-for="post of filteredPosts"
            :key="post.company_name"
            v-if="!post.sponsor"
            :to="localePath({
              name: 'companies-companies',
              params: { companies: post.company_name },
            })
            ">
            <company-card class="company-card" :company="post" />
          </NuxtLink>
        </div>
      </div>


    </section>
  </main>
</template>

<script>
import CompanyCard from "@/components/CompanyCard.vue";
import WarningBanner from "@/components/WarningBanner.vue"

import {
  API_Call_Companies,
  API_Call_Programs,
  API_Call_Positions,
  image_url,
} from "@/app/companyCall.js";

export default {
  data() {
    return {
      positionsVisible: false,
      programsVisible: false,
      selectedPrograms: [],
      selectedPositions: [],
      searchText: null,
      allString: null,
      showCompanies: process.env.SHOW_COMPANIES,
      isPreview: this.$preview,
    };
  },

  components: {
    CompanyCard,
    WarningBanner
  },
  // This method vill fetch a list of all the cms entries in a specified folder
  async asyncData({ $content, error, i18n }) {
    let locale = i18n.locale;
    let posts;
    let allPrograms = {
      en: [],
      sv: [],
    };
    let allPositions = {
      en: [],
      sv: [],
    };

    try {
      const positions = await API_Call_Positions();
      positions.forEach((item) => {
        if (item.languages_id === "en") {
          allPositions.en.push({
            id: item.positions_id,
            name: item.position,

          });
        } else if (item.languages_id === "sv") {
          allPositions.sv.push({
            id: item.positions_id,
            name: item.position,
          });
        }
      });
      const programs = await API_Call_Programs();
      programs.forEach((item) => {
        if (item.languages_code === "en") {
          allPrograms.en.push({
            id: item.programs_id,
            name: item.program,
            master: item.master,
          });
        } else if (item.languages_code === "sv") {
          allPrograms.sv.push({
            id: item.programs_id,
            name: item.program,
            master: item.master,
          });
        }
      });

      posts = await API_Call_Companies();

    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts, allPositions, allPrograms, locale };
  },

  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
    filteredPosts() {
      return this.posts.filter(
        (post) =>
          // display companies with selected conditions and matched search text
          this.$preview ||
          (
            (post.status === "published" && process.env.SHOW_COMPANIES) &&
            this.filterOneCondition(post.programsIds, this.selectedPrograms) &&
            this.filterOneCondition(post.positionsIds, this.selectedPositions) &&
            this.searchCompany(post.company_name, this.searchText)
          )

      );
    },
  },

  created() {
    this.allString = this.$t("catalog_page.all");
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
      return selection.some((s) => condition.includes(s.id));
    },

    searchCompany(title, searchText) {
      // when no searchText entered, display all posts
      if (!searchText) {
        return true;
      }
      // repalce a, o, u in searchText with strings including all special characters
      let formattedText = searchText
        .replace(/a/gi, "[aäå]")
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
        ? // display 'all' + type
        this.allString + " " + type
        : // else if 1 filter selected
        selected.length < 2
          ? // display the selected text
          selected[0].name
          : // else display the amount of selected filters + type
          selected.length + " " + type;
    },
  },
};
</script>
<style scoped>

.catalog-section {
  padding-left: 1rem;
  padding-right: 1rem;
}
.scale-up-center:hover {
  -webkit-animation: scale-up-center 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
          animation: scale-up-center 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


.dropdown-container {
  position: absolute;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: var(--clr-white);
  box-shadow: 0 0.25rem 0.5rem #0002;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  margin-top: 1rem;
  z-index: 1;
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
  background:transparent;
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

.company-card-container {
  margin-top: 2rem;
  width: 85%;
}
.underline {
  height: 1px;
  background-color: var(--clr-grey-500);
  width: 100%;
  margin-bottom: 3rem;
}
.company-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 64rem;
  gap: 1rem;
  margin: 2rem auto;
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
  margin-top: 1.5rem;
}

.preview-title {
  text-decoration: underline;
  margin-bottom: 1rem;
}
section {
  background: #EFEFEF;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-top: 5rem;
}

.cat-heading {
  color: #6B6B6B;
  text-align: center;
  font-style: normal;
  font-weight: light;
  line-height: normal;
}

.tag {
  color: white;
  padding: 3px 10px;
  border-radius: 1rem;
  font-size: 0.7rem;
}

.master {
  background-color: var(--clr-blue-800);
}
.bachelor {
  background-color: var(--clr-pink-800);
}

.dropdown-spacer {
  padding: 0.5rem
}

.dropdown-heading {
  font-weight: bold;
}

</style>
