<template>
    <div class="post-info">
          <h3 style="align-self: center">{{ $t("company-info") }}</h3>
          <div class="table">
            <p v-if="post.year_founded" class="table-left">
              {{ $t("established") }}
            </p>
            <p v-if="post.year_founded" class="table-right">{{ post.year_founded }}</p>
            <p v-if="post.slogan" class="table-left">{{ $t("slogan") }}</p>
            <p v-if="post.slogan" class="table-right">{{ post.slogan }}</p>
            <p v-if="post.number_of_employees_in_sweden" class="table-left">
              {{ $t("employees-sv") }}
            </p>
            <p v-if="post.number_of_employees_in_sweden" class="table-right">
              {{ post.number_of_employees_in_sweden }}
            </p>
            <p
              v-if="post.number_of_employees_internationally"
              class="table-left"
            >
              {{ $t("employees-int") }}
            </p>
            <p
              v-if="post.number_of_employees_internationally"
              class="table-right"
            >
              {{ post.number_of_employees_internationally }}
            </p>
          </div>
          <p v-if="post.area_of_business" style="font-weight: 600">
            {{ $t("bis-area") }}
          </p>
          <p v-if="post.area_of_business">{{ post.area_of_business[locale] }}</p>
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
    /* COMPANY INFO */
.post-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 1.5rem;
  background: var(--clr-blue-100);
  color: var(--clr-blue-900);
  margin-top: 2rem;
  max-width: 60ch;
  align-self: center;
}

/* Table */
.table {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
}
.table-left {
  font-weight: 600;
}
.table-right {
  padding-bottom: 0.3rem;
}

</style>

