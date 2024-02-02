<template>
  <footer class="footer-content">
    <GradientLine />
    <div class="content-container">
      <div class="socials-container">
        <!-- Facebook -->
        <a href="https://www.facebook.com/Systemvetardagen/">
          <FacebookLogo />
        </a>
        <!-- Instagram -->
        <a href="https://www.instagram.com/systemvetardagen/">
          <InstagramLogo />
        </a>
        <!-- LinkedIN -->
        <a href="https://www.linkedin.com/company/systemvetardagen/">
          <LinkedInLogo />
        </a>
      </div>
      <div class="address">
        <p class="student-DISK">
          Studentkåren DISK
          <br />
          Borgarfjordsgatan 6C 164 40 Kista
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import InstagramLogo from "@/components/icons/InstagramLogo.vue";
import FacebookLogo from "@/components/icons/FacebookLogo.vue";
import LinkedInLogo from "@/components/icons/LinkedInLogo.vue";
import GradientLine from "@/components/GradientLine";

export default {
  components: {
    InstagramLogo,
    FacebookLogo,
    LinkedInLogo,
    GradientLine
  },
  methods: {
}
}
</script>

<style scoped>

.footer-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: white;
  margin: 0;
  height: fit-content;
}

.footer-content .socials-container {
  flex: 0 0 auto;
}

.content-container {
  padding: 1.2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 4rem;
  height: 100%;
  align-items: center;
}

.footer-content .address {
  color: #666666;
  font-family: "Work Sans", Helvetica;
  text-align: center;
}

.footer-content .address p {
  font-size: 0.7rem;
}

.socials-container {
  display: flex;
  gap: 1.6rem;
  height: fit-content;
}

.socials-container a {
  line-height: 0;
}

.socials-container svg {
  width: 1.8rem;
  fill: #666666;
}

.socials-container svg:hover {
  fill: black;
}
</style>
