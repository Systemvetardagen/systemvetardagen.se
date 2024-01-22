<!-- The sponsors grid, linking to the catalog, featured on the landing page. -->
<template>
  <div class="companies">
    <div class="company-content">
      <h2 style="color: var(--clr-blue-700)">{{ $t("landing_page.sponsors") }}</h2>
      <!-- Since we hadn't figured out nuxt-image yet, we hard-coded this grid. -->
      <div class="company-grid">
        <NuxtLink :to="localePath('/companies/old/accenture')" class="company-logo">
          <img
            src="@/assets/img/company-logos/logo_accenture.png"
            alt="Accenture"
          />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/old/capgemini')" class="company-logo">
          <img
            src="@/assets/img/company-logos/logo_capgemini.png"
            alt="Capgemini"
          />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/old/capgemini')" class="company-logo">
          <img src="@/assets/img/company-logos/logo_cygni.png" alt="Cygni" />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/old/fra')" class="company-logo">
          <img src="@/assets/img/company-logos/logo_fra.jpg" alt="FRA" />
        </NuxtLink>
        <NuxtLink
          :to="localePath('/companies/old/handelsbanken')"
          class="company-logo"
        >
          <img
            src="@/assets/img/company-logos/logo_handelsbanken.png"
            alt="Handelsbanken"
          />
        </NuxtLink>
        <NuxtLink
          :to="localePath('/companies/old/innofactor')"
          class="company-logo"
        >
          <img
            src="@/assets/img/company-logos/logo_innofactor.png"
            alt="Innofactor"
          />
        </NuxtLink>
        <NuxtLink
          :to="localePath('/companies/old/sweco')"
          class="company-logo sweco"
        >
          <img
            src="@/assets/img/company-logos/logo_sweco_black.png"
            alt="Sweco"
          />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/old/zimply')" class="company-logo">
          <img src="@/assets/img/company-logos/logo_zimply.png" alt="Zimply" />
        </NuxtLink>
      </div>
      <Button
        class="companies-btn"
        :link="localePath('/companies/old') + '/'"
        bColor="gradient"
        >{{ $t("catalog_page.all-companies-btn") }}</Button
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "sponsorSection",
  data() {
    return {
      logoPath: "@/assets/img/company-logos/logo_",

      // This dictionary is from an attempt to create the grid dynamically.
      logos: [
        { name: "Capgemini", img: "capgemini.png" },
        { name: "Sweco", img: "sweco_black.png" },
        { name: "Innofactor", img: "innofactor.png" },
        { name: "Handelsbanken", img: "" },
        { name: "Cygni", img: "cygni.png" },
        { name: "Zimply Innovation", img: "zimply.png" },
      ],
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
  padding: 5%;
}

.company-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

/* TTITLE */
.company-conent > h2 {
  align-self: center;
}

/* GRID */
.company-grid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 1rem;
  align-items: center;
  align-content: center;
}

.company-logo {
  border: none;
  height: 7rem;
  width: 10rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  justify-content: center;
}

.company-logo > img {
  width: 90%;
}

.sweco {
  padding-bottom: 1.5rem;
}


/* BUTTON */

.companies-btn {
  margin-top: 4rem;
}

/* MEDIA QUERRY */
@media (min-width: 1024px) {
  .company-grid {
    grid-template-columns: 30% 30% 30%;
    grid-gap: 2rem;
  }
}
</style>
