<template>
  <div class="companies">
    <div class="company-content">
      <h2 style="color: var(--clr-blue-700)">{{ $t("sponsors") }}</h2>

      <!-- <div class="sponsor-grid">
                <div class="sponsor-logo" v-for="logo in logos" :key="logo.name">
                    <img v-bind:src=" '/_nuxt/assets/img/sponsor-logos/logo_' + logo.img" v-bind:alt= logo.name >
                </div>
            </div> -->

      <div class="company-grid">
        <NuxtLink :to="localePath('/companies/accenture')" class="company-logo">
          <img
            src="@/assets/img/company-logos/logo_accenture.png"
            alt="Accenture"
          />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/capgemini')" class="company-logo">
          <img
            src="@/assets/img/company-logos/logo_capgemini.png"
            alt="Capgemini"
          />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/capgemini')" class="company-logo">
          <img src="@/assets/img/company-logos/logo_cygni.png" alt="Cygni" />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/fra')" class="company-logo">
          <img src="@/assets/img/company-logos/logo_fra.jpg" alt="FRA" />
        </NuxtLink>
        <NuxtLink
          :to="localePath('/companies/handelsbanken')"
          class="company-logo"
        >
          <img
            src="@/assets/img/company-logos/logo_handelsbanken.png"
            alt="Handelsbanken"
          />
        </NuxtLink>
        <NuxtLink
          :to="localePath('/companies/innofactor')"
          class="company-logo"
        >
          <img
            src="@/assets/img/company-logos/logo_innofactor.png"
            alt="Innofactor"
          />
        </NuxtLink>
        <NuxtLink
          :to="localePath('/companies/sweco')"
          class="company-logo sweco"
        >
          <img
            src="@/assets/img/company-logos/logo_sweco_black.png"
            alt="Sweco"
          />
        </NuxtLink>
        <NuxtLink :to="localePath('/companies/zimply')" class="company-logo">
          <img src="@/assets/img/company-logos/logo_zimply.png" alt="Zimply" />
        </NuxtLink>
      </div>
      <Button
        class="companies-btn"
        :link="localePath('/companies') + '/'"
        bColor="gradient"
        >{{ $t("all-companies-btn") }}</Button
      >
    </div>
    <!-- <Blob type="5-b" height="30rem" class="blobby-thing" /> -->
  </div>
</template>

<script>
// import Blob from "@/components/Blob.vue";

export default {
  name: "sponsorSection",
  /*
  components: {
    Blob,
  },
  */
  data() {
    return {
      logoPath: "@/assets/img/company-logos/logo_",
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
<style>
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

.company-conent > h2 {
  align-self: center;
}

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

@media (min-width: 1024px) {
  .company-grid {
    grid-template-columns: 30% 30% 30%;
    grid-gap: 2rem;
  }
}

.sponsor-content {
  z-index: 100;
}

.blobby-thing {
  left: 0;
  transform: translateX(-50%);
}

.companies-btn {
  margin-top: 4rem;
}
</style>
