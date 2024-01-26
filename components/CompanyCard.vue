<template>
  <div class="logo-wrapper" :class="{sponsor: company.sponsor}">
    <img v-if="company.logo" class="logo" :src="this.company.logo" alt="" />
    <h3 v-else>{{ company.title ? company.title : company.company_name }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    company: Object,
  },
  methods: {
    // Doesn't work in production
    ImageLink(cmsImg) {
      const link = "/_nuxt/assets" + cmsImg;
      console.log(link);
      return link;
    },
  },
};
</script>
<style scoped>
h3 {
  color: var(--clr-blue-900);
}

.logo-wrapper {
  width: 9rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  box-shadow: 0px 2px 5px 0px rgba(128, 128, 128, 0.10), 0px 10px 10px 0px rgba(128, 128, 128, 0.09), 0px 22px 13px 0px rgba(128, 128, 128, 0.05), 0px 39px 16px 0px rgba(128, 128, 128, 0.01), 0px 61px 17px 0px rgba(128, 128, 128, 0.00);
  transition: border-color 0.2s;
}

.sponsor {
  border-color: var(--clr-pink-200)
}

@media (min-width: 768px) {
  .logo-wrapper {
    width: 20rem;
    height: 12rem;
    padding: 1.5rem;
    border-width: 0.5rem;
  }
}


.logo-wrapper:hover {
  border-color: var(--clr-blue-300);
}
.sponsor:hover {
  border-color: var(--clr-pink-400)
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>