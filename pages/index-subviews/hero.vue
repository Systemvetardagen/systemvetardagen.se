<template>
  <div id="home" class="hero">
    <div class="hero-content">
      <!-- Hero image -->
      <img
        class="hero-image"
        src="@/assets/img/hero-image.png"
        alt="Image of a group of people by their computers"
      />
      <!-- Hero Text -->
      <div class="hero-content-text">
        <h1 class="hero-heading" style="color: var(--clr-blue-600)">
          {{ $t("hero_title") }}
        </h1>
        <p class="subtitle" style="color: var(--clr-grey-900)">
          {{ $t("event_description") }}
        </p>
        <!-- Hero Buttons -->
        <div class="hero-buttons">
          <Button width="14rem" bColor="gradient">{{
            $t("catalog_btn_title")
          }}</Button>
          <Button link="" bColor="--clr-blue-200" tColor="--clr-black-900">{{
            $t("contact_us_btn")
          }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
//import { text } from 'body-parser';

export default {
  name: "heroSection",
};
components: {
  Button;
}
</script>

<style>
.hero {
  height: 100vh;
  align-items: center;
  justify-content: center;
}

/* .hero::before {    
      content: "";
      background-image: url('@/assets/img/hero-img-provisional.png');
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.5;
} */
.hero-content {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 3rem;
  /* line-height: 200%; */
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
</style>