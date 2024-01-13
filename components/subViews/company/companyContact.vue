<template>
  <div v-if="post.contact_persons" class="post-contact">

    <!-- Heading -->
    <h2>{{ $t("company_page.company-contact") }}</h2>

    <!-- Contact Cards -->
    <div class="cards-container">

      <!-- Contact Card Loop -->
      <div
        v-for="contact in this.post.contact_persons"
        class="card"
        :key="contact.id"
      >
        <!-- Outer Box -->
        <ShadowBox class="box">

          <!-- Inner Box -->
          <div class="inner-box-layout">
            <!-- Name -->
            <p v-if="contact.name" class="name">
              {{ contact.name }}
            </p>
            <!-- Email -->
            <a
              v-if="contact.email"
              class="email"
              :href="'mailto:' + contact.email"
              >  {{ contact.email }}
            </a>
            <!-- Phone Number -->
            <p v-if="contact.phone_number" class="phone">{{ contact.phone_number }} </p>
          </div>
        </ShadowBox>

      </div>
    </div>

    <!-- Link to Positions -->
    <div v-if="post.link_to_positions" class="external-link">
      <a :href="post.link_to_positions"
        >
        {{ $t("company_page.company-learn-more") }}
        {{ post.title }}
        <ExternalLink class="icon"/>
      </a>
    </div>
  </div>
</template>

<script>
  import ShadowBox from '@/Components/ShadowBox.vue/'
  import ExternalLink from '@/Components/icons/ExternalLink.vue/'
  export default {
    props: {
      post: Object
    },
    components: {
      ExternalLink
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  min-width: 20rem;
  padding: 1rem;
}

.name {
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.email {
  /*margin-top: 0.5rem;*/
  color: #3F21F8;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.phone {
  color: #000;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.external-link {
  margin-top: 1.5rem;
  color: #2F2F2F;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 100% */
  letter-spacing: 0.00938rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon {
  height: 1.3rem;
  color: #2F2F2F;
}

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  .cards-container {
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .external-link {
    padding-left: 0;
  }
}

</style>
