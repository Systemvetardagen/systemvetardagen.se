<template>
    <div class="match-list" v-if="(post.programs_data_bachelor && post.programs_data_bachelor[locale].length) || (post.programs_data_master && post.programs_data_master[locale].length) || (post.qualifications && post.qualifications[locale].length || (post.positions_data && post.positions_data[locale].length))">
      <h3>
        {{ post.title }}
        {{ $t("company_page.looking-for") }}
      </h3>
      <div class="items">

        <!-- Section: Bachelors -->
        <div class="section" v-if="post.programs_data_bachelor && post.programs_data_bachelor[locale].length">
          <p class="section-heading">{{ $t("company_page.match_list.bachelor") }}</p>
          <ul class="tag-list">
            <li
              class="tag"
              style="background-color: var(--clr-pink-600);"
              v-for="program in post.programs_data_bachelor[locale]"
              :key="program.id">
              {{ program }}
            </li>
          </ul>
        </div>

         <!-- Section: Masters -->
        <div class="section" v-if="post.programs_data_master && post.programs_data_master[locale].length">
          <p class="section-heading">{{ $t("company_page.match_list.master") }}</p>
          <ul class="tag-list">
            <li
              class="tag"
              v-for="program in post.programs_data_master[locale]"
              :key="program.id">
              {{ program }}
            </li>
          </ul>
        </div>

        <!-- Section: Qualifications -->
        <div v-if="post.qualifications && post.qualifications[locale].length" class="section">
          <p class="section-heading">{{ $t("company_page.match_list.qualifications") }}</p>
          <p class="border-box">{{ post.qualifications[locale] }}</p>
        </div>

        <!-- Section: Positions -->
        <div class="section" v-if="post.positions_data && post.positions_data[locale].length">
          <p class="section-heading">{{ $t("company_page.match_list.positions") }}</p>
          <ul class="tag-list">
            <li
              class="tag"
              style="background-color: var(--clr-blue-600);"
              v-for="position in post.positions_data[locale]"
              :key="position.id">
              {{ position }}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object,
            locale: String
        }
    }

</script>

<style scoped>
/* MATCH LIST */
li {
  margin: 0;
  font-family: "IBMPlexMono", monospace;
}
.match-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  overflow: hidden;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0;
  width: 100%;
}

.section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  line-height: 1.5;
  text-align: center;
  justify-content: center;
  width: 100%;

}

.tag-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  /*padding-top: 0rem;*/
  align-items: flex-start;
  padding: 0;
}

.tag {
  display: flex;
  padding: 0.3rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* max-width: 15rem; */
  text-align: center;
  border-radius: 1.875rem;
  background: #6CAF61;
  color: white;
  font-size: 0.8rem;
  /* align-self: center; */
}

.section-heading {
  font-size: 1.2rem;
  font-weight: 700;
  word-break: break-all;
}

.border-box {
  border-radius: 0.9375rem;
  border: 1px solid var(--clr-grey-200);
  margin-top: 1rem;
  padding: 1.6rem 2rem;
  font-size: 0.9rem;
  background-color: white;
}



/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {

  .list-items {
    flex-direction: row;
  }

}

@media only screen and (max-width: 400px) {
  .border-box {
    padding: 1rem;
  }
}

</style>
