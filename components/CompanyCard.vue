<template>
  <div v-if="company.logo" class="logo-wrapper">
    <nuxt-img class="logo" :src="this.company.logo" alt="" />
  </div>
  <h3 v-else>{{ company.title }}</h3>
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
  padding: 1rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  border: solid 0.25rem var(--clr-blue-100);
  transition: border-color 0.2s;
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

.logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>