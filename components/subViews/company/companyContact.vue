<template>
    <div v-if="post.contact_persons" class="post-contact">
          <h2>{{ $t("company-contact") }}</h2>

          <div class="cards-container">
            <div
              v-for="contact in this.post.contact_persons"
              class="company-contact"
              :key="contact.id"
            >
              <ShadowBox class="box">
                <Div class="inner-box-layout">
                  <p v-if="contact.name" class="name">
                    {{ contact.name }}
                  </p>
                  <a
                    v-if="contact.email"
                    class="email link"
                    :href="'mailto:' + contact.email"
                    >  {{ contact.email }}
                  </a>
                  <p v-if="contact.phone_number" class="phone">{{ contact.phone_number }} </p>
                </Div>
              </ShadowBox>

            </div>
          </div>
        </div>
</template>

<script>
    import ShadowBox from '@/Components/ShadowBox.vue/'
    export default {
        props: {
            post: Object
        }
    }

</script>

<style scoped>


    /* COMPANY CONTACT */
.post-contact {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.cards-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}


.inner-box-layout {
  display: flex;
  
  /* padding: 1.25rem 5.25rem; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  width: 20rem;
  padding: 1.25rem;
}

.name {
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.email {
  margin-top: 0.5rem;
  color: #3F21F8;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.phone {
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  .cards-container {
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  
}




</style>
