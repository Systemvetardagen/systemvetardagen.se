<template>
    <!-- FOREGROUND CONTENT -->
    <div class="hero-content">
      <!-- HERO Logo -->
      <img
        class="hero-logo"
        src="@/assets/img/svd_logo_white.svg"
        alt="Systemvatardagen Logo (white)"
      />
       <!-- HERO INFO -->
      <div class="hero-info-wrapper">
        <p class="hero-info-text">
          {{ $t("landing_page.hero.event_date") }}
        </p>
        <p class="hero-info-text">
          {{ $t("landing_page.hero.event_time") }}
        </p>
        <p class="hero-info-address">
          {{ $t("landing_page.hero.event_address") }}
        </p>
      </div>
      <!-- HERO TEXT -->
      <div class="hero-content-text">

        <!-- HERO BUTTONS -->
        <div class="hero-buttons">
          <Button
            :link="localePath('/companies/' + '/')"
            bColor="transparent"
          >
            {{ $t("landing_page.hero.catalog_btn") }}
          </Button>
        </div>
      </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "heroSection",
  components: {
    Button
  }
};

</script>

<style>


/* FOREGROUND */
.hero-content {
  height: 660px;
  /*height: 100%;*/
  padding: 4rem 1.5rem;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  background: linear-gradient(26deg, #4158D0 2.77%, #C850C0 51.55%, #FFCC70 100.34%);
  background: linear-gradient(-100deg, #4158D0, #C850C0, #FFCC70);
  background-size: 300% 300%;
  animation: Background 45s ease infinite;
}

@keyframes Background {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

.hero-content-text {
  max-width: 45ch;
}

.hero-content-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 45ch;
}

.hero-logo {
  max-width: 25rem;
  margin: 0rem 3rem;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-heading {
  max-width: 85%;
}

.subtitle {
  font-weight: 700;
}

/* HERO INFO */
.hero-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--clr-white);
  justify-self: flex-end;
  font-family: OverpassMono;
  font-weight: 300;
  gap: 0.5rem;
}

.hero-info-text {
  text-align: center;
  font-size: 1.5rem
}
.hero-info-address {
  text-align: center;
  font-size: 1rem;
}

@media screen and (min-height: 700px) {
  .hero-content {
    height: calc(100vh - 3rem);
  }
}

@media screen and (min-height: 1400px) {
  .hero-content {
    height: 1400px;
  }
}


</style>
