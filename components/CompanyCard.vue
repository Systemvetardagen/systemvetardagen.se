<template>
  <div class="card">
    <div class="logo-wrapper">
      <nuxt-img
        v-if="company.logo"
        class="logo"
        :src="this.company.logo"
        alt=""
      />
    </div>
    <h3>{{ company.title }}</h3>
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
.card {
  width: 20rem;
  height: 12rem;
  padding: 2rem;
  background-color: var(--clr-blue-100);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

h3 {
  color: var(--clr-blue-900);
}

.logo-wrapper {
  width: 50%;
  padding: 0.5rem 1rem;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
}

.logo {
  height: auto;
  width: 100%;
}
</style>