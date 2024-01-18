<template>
    <div class="match-list">
      <h3>
        {{ post.title }}
        {{ $t("looking-for") }}
      </h3>
      <div class="items">

        <!-- Section: Bachelors -->
        <div class="section">
          <p class="section-heading">{{ $t("programs") }}</p>
          <div class="tag-list">
            <div 
              class="tag"
              style="background-color: var(--clr-pink-600);"
              v-for="program in post.programs_data_bachelor[locale]"
              :key="program.id">
              {{ program }}
            </div>
          </div>
        </div>

         <!-- Section: Masters -->
        <div class="section">
          <p class="section-heading">{{ $t("programs") }}</p>
          <div class="tag-list">
            <div 
              class="tag"
              v-for="program in post.programs_data_master[locale]" 
              :key="program.id">
              {{ program }}
            </div>
          </div>
        </div>

        <!-- Section: Qualifications -->
        <div v-if="post.qualifications" class="section">
          <p class="section-heading">{{ $t("qualifications") }}</p>
          <p class="border-box">{{ post.qualifications[locale] }}</p>
        </div>

        <!-- Section: Positions -->
        <div class="section">
          <p class="section-heading">{{ $t("positions") }}</p>
          <div class="tag-list">
            <div
              class="tag" 
              style="background-color: var(--clr-blue-600);"
              v-for="position in post.positions_data[locale]" 
              :key="position.id">
              {{ position }}
            </div>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: Object,
            locale: Object
        }
    }

</script>

<style scoped>
/* MATCH LIST */
.match-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
}

.section {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
}

.tag-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  align-items: base-line;
}

.tag {
  display: flex;
  padding: 0.3rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 15rem;

  border-radius: 1.875rem;
  background: #6CAF61;
  color: white;
  font-size: 0.9rem;
  align-self: center;
}

.section-heading {
  font-size: 1.2rem;
  font-weight: 700;
}

.border-box {
  border-radius: 0.9375rem;
  border: 1px solid #696969;
  margin-top: 1rem;
  padding: 2rem 1.5rem;
  font-size: 0.9rem;

}



/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  
  .list-items {
    flex-direction: row;
  }

  
}

</style>
