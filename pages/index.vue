<!-- Temporary landing page -->
<template>
  <div class="page">
    <main>
      <SystemvetardagenLogo />
      <h1>{{ $t("temporaryLandingPage.heading") }}</h1>
      <h2>{{ $t("temporaryLandingPage.subheading") }}</h2>
      <div class="main-info">
        <p>{{ $t("temporaryLandingPage.tagline") }}</p>
        <p class="main-info-bottom">
          {{ $t("temporaryLandingPage.shortDateInfo") }}
        </p>
      </div>
      <div class="pdf-container">
        <p class="pdf-container-header">{{ $t("temporaryLandingPage.pdfHeader") }}</p>
        <a class="pdf-download" href="/infoblad/infoblad_2024_sv.pdf" target="_blank">
          <span>{{ $t("temporaryLandingPage.pdfLinkPromptSv") }}</span><PDFIcon />
        </a>
        <a class="pdf-download" href="/infoblad/infoblad_2024_en.pdf" target="_blank">
          <span>{{ $t("temporaryLandingPage.pdfLinkPromptEn") }}</span><PDFIcon />
        </a>
      </div>
      <p class="above-button-text">{{ $t("temporaryLandingPage.aboveButton") }}</p>
      <NuxtLink :to="localePath('/old_index')" class="main-button">
        <span v-if="windowWidth > 300">{{ $t("temporaryLandingPage.buttonLong") }}</span>
        <span v-else>{{ $t("temporaryLandingPage.buttonShort")}}</span>
        <ArrowRight />
      </NuxtLink>
    </main>
    <footer>
      <div class="contact-container">
        <a class="logo-link email-container" href="mailto:systemvetardagen@disk.su.se">
          <MailIcon />
          <p>{{ $t("temporaryLandingPage.contactUsPrompt") }}</p>
        </a>
      </div>
      <div class="socials-container">
        <a href="https://www.facebook.com/Systemvetardagen/" class="logo-link">
          <FacebookLogo />
        </a>
        <a class="logo-link" href="https://www.instagram.com/systemvetardagen/">
          <InstagramLogo />
        </a>
        <a class="logo-link" href="https://www.linkedin.com/company/systemvetardagen/">
          <LinkedInLogo />
        </a>
      </div>
      <p class="footer-text">
        {{ $t("temporaryLandingPage.organizedBy") }}
      </p>
    </footer>
  </div>
</template>

<script>
import SystemvetardagenLogo from "@/components/icons/SystemvetardagenLogo.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import InstagramLogo from "@/components/icons/InstagramLogo.vue";
import FacebookLogo from "@/components/icons/FacebookLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import PDFIcon from "@/components/icons/PDFIcon.vue";

export default {
  layout: 'temporary-landing-page',
  name: "IndexPage",
  components: {
    SystemvetardagenLogo,
    ArrowRight,
    InstagramLogo,
    FacebookLogo,
    MailIcon,
    LinkedInLogo,
    PDFIcon
  },
  data() {
    return {
      windowWidth: 0,
    };
  },
  mounted() {
    // Initial window width
    this.windowWidth = window.innerWidth;

    // Listen for window resize event
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

footer {
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 2.5rem 0.5rem;
}

.page {
  background-color: gold;
  min-height: 100vh;
  width: 100%;
  background: rgb(255,204,112);
  background: linear-gradient(45deg, rgba(255,204,112,1) 0%, rgba(200,80,192,1) 50%, rgba(65,72,208,1) 100%);
  display: flex;
  align-items: ;
  justify-content: space-between;
  padding-top: 6rem;
  flex-direction: column;
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h1, h2, p {
  color: white;
  letter-spacing: 0;
  text-align: center;
}

.main-button {
  letter-spacing: 0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.8rem;
}

h2 {
  font-size: 1.8rem;
}

.logo {
  width: 8rem;
  margin-bottom: 2rem;
}

.main-button {
  padding: 0.8rem 1.5rem;
  background-color: white;
  font-family: work-sans;
  font-weight: 400;
  border: none;
  border-radius: 999px;
  display: flex;
  align-items: center;
  height: fit-content;
  color: black;
}

.main-info {
  width: 80%;
  margin-top: 4rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 3rem;
}

.main-info-bottom {
  margin-top: 0.5rem;
}

.above-button-text {
  font-size: 0.9rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 1%;
  margin: 0.5rem;
}

.footer-text {
  margin-top: auto;
  font-weight: 300;
  text-align: center;
  font-size: 0.7rem;
  max-width: 450px;
}

.arrow {
  padding: 0;
  margin: 0;
  height: 1.5rem;
  margin-left: 0.3rem;
}

.arrow path {
  height: 100px;
}

.socials-container {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.email-container p {
  color: inherit;
}

.email-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.5rem;
  color: white;
}

.email-container p {
  font-size: 0.9rem;
  text-decoration: underline;
}

.logo-link svg {
  margin: 0;
  height: 2rem;
  width: 2rem;
}

.socials-container a {
  color: white;
}

.socials-container a:focus-visible,
.email-container:focus-visible,
main a:focus-visible {
  outline: 3px dashed black;
  outline-offset: 4px;
}

.email-container svg {
  height: 1.5rem;
  width: 1.5rem;
}

.pdf-container {
  padding: 1.5rem 2rem 2rem 2rem;
  outline: 1px solid white;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.pdf-container-header {
  font-family: work-sans;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.pdf-download {
  color: white;
  font-family: work-sans;
  font-weight: 300;
  text-decoration: underline;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pdf-download span {
  margin-right: 0.5rem;
}

.pdf-download svg {
  height: 1.4rem;
  width: 1.4rem;
}

.pdf-download:hover {
  text-decoration: none;
  color: whitesmoke;
}

@media (hover: hover) {
  .main-button:hover {
    background-color: black;
    color: white;
  }

  .email-container:hover,
  .socials-container a:hover {
    color: black;
  }
}

@media only screen and (max-width: 620px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-info {
    margin-bottom: 3rem;
  }
}

@media only screen and (max-width: 639px) {
  button {
    margin-bottom: 3rem;
  }
}

@media only screen and (max-width: 380px) {
  h1 {
    font-size: 2.1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .main-info {
    width: 90%;
  }

  button {
    font-size: 1rem;
    padding: 0.7rem 0.8rem;
    width: 100%;
  }
}

@media only screen and (max-width: 300px) {
  h1 {
    font-size: 1.7rem;
  }

  button {
    font-size: 1rem;
  }

  .arrow {
    height: 1rem;
  }
}

@media only screen and (max-width: 300px) {
  h1 {
    display: none;
  }

  .pdf-container {
    padding: 0.4rem;
  }
}
</style>
