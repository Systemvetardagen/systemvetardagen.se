<!-- The sponsors grid, linking to the catalog, featured on the landing page. -->
<template>
  <div class="companies">
    <div class="company-content">
      <p class="partner-heading">{{ $t("landing_page.sponsors") }}</p>
      <!-- Since we hadn't figured out nuxt-image yet, we hard-coded this grid. -->
      <div class="company-grid">
        <NuxtLink to="/companies/Akavia">
          <img src="@/assets/img/partners/akavia-logo.png" alt="Logo" class="logo">
        </NuxtLink>
        <NuxtLink to="/companies/Accenture">
          <img src="@/assets/img/partners/accenture-logo.png" alt="Logo" class="logo">
        </NuxtLink>
        <NuxtLink to="/companies/Handelsbanken">
          <img src="@/assets/img/partners/handelsbanken-logo.png" alt="Logo" class="logo">
        </NuxtLink>
        <NuxtLink to="/companies/Swedbank%20AB">
          <img src="@/assets/img/partners/swedbank-logo.png" alt="Logo" class="logo">
        </NuxtLink>
        <NuxtLink to="/companies/Zimply%20Innovation%20Nordic%20AB">
          <img src="@/assets/img/partners/zimply-logo.png" alt="Logo" class="logo">
        </NuxtLink>
        <NuxtLink to="/companies/Cygni%20part%20of%20Accenture">
          <img src="@/assets/img/partners/cygni-logo.png" alt="Logo" class="logo">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "sponsorSection",
  data() {
    return {
      logoPath: "@/assets/img/company-logos/logo_",

      partners: [
        {name: "Akavia", path: "/companies", img: "@/assets/img/partners/akavia-logo.png"},
        {name: "Accenture", path: "/companies", img: "@/assets/img/partners/accenture-logo.svg"},
        {name: "Handelsbanken", path: "/companies", img: "@/assets/img/partners/handelsbanken-logo"},
        {name: "Swedbank", path: "/companies", img: "@/assets/img/partners/swedbank-logo"},
        {name: "Zimply", path: "/companies", img: "@/assets/img/partners/zimply-logo"},
        {name: "Cygni", path: "/companies", img: "@/assets/img/partners/cygni-logo"}
      ]
    };
  },
};
</script>


<style scoped>

/* CONTAINER */
.companies {
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
}

.logo {
  max-height: 4rem;
  max-width: 10rem;
}

.company-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.partner-heading {
  color: var(--clr-grey-500);
  font-weight: 300;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
}


/* GRID */
.company-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.company-name {
  color: #6956CC;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.02rem;
}

/* BUTTON */

.companies-btn {
  margin-top: 4rem;
}

/* MEDIA QUERRY */
@media (min-width: 1024px) {

}
</style>
