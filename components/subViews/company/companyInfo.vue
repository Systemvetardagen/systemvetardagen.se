<template>
  <div class="post-info">
    <ShadowBox>
      <div class="inner-box">
          <p class="heading">{{ post.company_name }}</p>
          <div class="table">
            <div class="table-row">
              <p v-if="post.year_founded" class="table-left">{{ $t("established") }}</p>
              <p v-if="post.year_founded" class="table-right">{{ post.year_founded }}</p>
            </div>
            <div class="table-row">
              <p v-if="post.number_of_employees_in_sweden" class="table-left"> {{ $t("employees-sv") }}</p>
              <p v-if="post.number_of_employees_in_sweden" class="table-right">{{ separateDecimals(post.number_of_employees_in_sweden) }}</p>
            </div>
            <div class="table-row">
              <p v-if="post.number_of_employees_internationally" class="table-left">{{ $t("employees-int") }}</p>
              <p v-if="post.number_of_employees_internationally" class="table-right">{{ separateDecimals(post.number_of_employees_internationally) }}</p>
            </div>

            
          </div>
        </div>
    </ShadowBox>
  </div>


</template>

<script>
  import ShadowBox from '@/Components/ShadowBox.vue/'
  export default {
      props: {
          post: Object,
          locale: Object
      },
      methods: {
        separateDecimals(number) {
          const output = number.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
          return output
        }
      }
  }

</script>

<style scoped>
/* COMPANY INFO */

.post-info {
  margin-top: 2rem;
}
.inner-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  width: 20rem;
  padding: 1.5rem 0;
}

.heading {
  color: #000;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.0625rem; /* 143.478% */
  letter-spacing: 0.1725rem;
  text-transform: uppercase;
}

/* Table */
.table {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.table-row {
  display:flex;
  align-items: center;
  flex-direction: column;
}
.table-left, .table-right {
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;

}
.table-left {
  font-weight: 500;

}
.table-right {
  padding-bottom: 0.5rem;
}

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {

  .inner-box {
    width: 25rem;
  }
  .table {
    display: flex;
    justify-content: space-between;
    
  }
  .table-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
    gap: 2rem;
    padding: 0.5rem 0;
  }
  .table-left {

  }
  .table-right {
    
    padding-bottom: 0;

  }
}

</style>

