<template>
    <div class="match-list">
      <h3>
        {{ post.title }}
        {{ $t("looking-for") }}
      </h3>
      <div class="items">

        <!-- Section: Bachelors -->
        <div class="section">
          <p style="font-weight: 700">{{ $t("programs") }}</p>
          <div class="tag-list">
            <div 
              class="tag"
              v-for="program in post.programs_data[locale]" 
              :key="program.id">
              {{ program }}
            </div>
          </div>
        </div>

        <!-- Section: Qualifications -->
        <div v-if="post.qualifications" class="section">
          <p style="font-weight: 700">{{ $t("qualifications") }}</p>
          <p class="border-box">{{ post.qualifications[locale] }}</p>
        </div>

        <!-- Section: Positions -->
        <div class="section">
          <div class="ag-list">
            <p style="font-weight: 700">{{ $t("positions") }}</p>
            <div
              class="tag" 
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
  padding: 3rem 0;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 2px var(--clr-grey-300) solid;
  border-bottom: 2px var(--clr-grey-300) solid;
}

.list-items {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  width: clamp(30ch, 80vw, 60ch);
}

.match-list > ul > li {
  font-weight: 10px;
}
/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  
  .list-items {
    flex-direction: row;
  }

  
}

</style>
