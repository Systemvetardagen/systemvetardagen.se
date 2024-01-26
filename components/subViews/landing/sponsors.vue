<!-- The sponsors grid, linking to the catalog, featured on the landing page. -->
<template>
  <div class="companies">
    <div class="company-content">
      <p >{{ $t("landing_page.sponsors") }}</p>
      <!-- Since we hadn't figured out nuxt-image yet, we hard-coded this grid. -->
      <div class="company-grid">
        <NuxtLink v-for="partner in this.partners" :to="localePath(partner.path)" >
          <p class="company-name">{{ partner.name }}</p>
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

      // This dictionary is from an attempt to create the grid dynamically.
      logos: [
        { name: "Capgemini", img: "capgemini.png" },
        { name: "Sweco", img: "sweco_black.png" },
        { name: "Innofactor", img: "innofactor.png" },
        { name: "Handelsbanken", img: "" },
        { name: "Cygni", img: "cygni.png" },
        { name: "Zimply Innovation", img: "zimply.png" },
      ],
      partners: [
        {name: "Akavia", path: "/companies"},
        {name: "Accenture", path: "/companies"},
        {name: "Handelsbanken", path: "/companies"},
        {name: "Swedbank", path: "/companies"},
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

.company-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
}


/* GRID */
.company-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 1.5rem;
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
