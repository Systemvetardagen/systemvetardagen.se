<template>
  <div id="home" class="hero">

    <!-- FOREGROUND CONTENT -->
    <div class="hero-content">
      <!-- HERO IMAGE -->
      <img
        class="hero-image"
        src="@/assets/img/hero-image.png"
        alt="Image of a group of people by their computers"
      />
      <!-- HERO TEXT -->
      <div class="hero-content-text">
        <h1 class="hero-heading" style="color: var(--clr-blue-600)">
          {{ $t("landing_page.hero.title") }}
        </h1>
        <p class="subtitle" style="color: var(--clr-grey-900)">
          {{ $t("landing_page.hero.event_description") }}
        </p>
        <!-- HERO BUTTONS -->
        <div class="hero-buttons">
          <Button
            :link="localePath('/catalog/' + '/')"
            width="14rem"
            bColor="gradient"
            >{{ $t("landing_page.hero.catalog_btn") }}</Button
          >
          <Button
            link="#contact"
            bColor="--clr-blue-100"
            tColor="--clr-blue-900"
            >{{ $t("landing_page.hero.contact_us_btn") }}</Button
          >
        </div>
      </div>
    </div>

    <!-- HERO INFO -->
    <div class="hero-info-wrapper">
      <p class="hero-info-text">{{ $t("landing_page.hero.event_date") }}, 10:00 - 16:00</p>
      <p
        class="hero-info-text"
        style="color: var(--clr-grey-900); text-align: center"
      >
        Kista NOD, Borgarfjordsgatan 12
      </p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "heroSection",

};
components: {
  Button;
}
</script>

<style>

/* CONTAINER */
.hero {
  min-height: 100vh;
  padding: 0;
  justify-content: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}



/* temporary style, to be finalised by design/css team */
/* - haha good joke */
/* no jokes in the code pls */
/* jk this will stay lol */
.hero-bg-span {
  color: var(--clr-pink-100);
  font-family: "OverpassMono";
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 150%;
  -webkit-user-select: none;
  user-select: none;
  word-break: break-all;
  transition: 0.4s;
  z-index: 1;
}

.highlighted {
  color: var(--clr-pink-400);
}

/* FOREGROUND */
.hero-content {
  position: relative;
  padding: 1.5rem;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 3rem;
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

.hero-image {
  max-width: 100%;
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
  padding: 2rem;
  margin-top: 2rem;
  z-index: 10;
  background-color: var(--clr-white);
  font-weight: bold;
  justify-self: flex-end;
}

.hero-info-text {
  font-family: OverpassMono;
  text-align: center;
  color: var(--clr-pink-600);
}
</style>
