<template>
  <div>
    <header class="main-header" data-visible="false">

      <!--  LOGO-LINK -->
      <NuxtLink :to="localePath('/')" class="logo-link main-logo-link">
        <img
          src="@/assets/img/systemvetardagen-logo/Text_Logo_Black.svg"
          class="logo"
          alt="Systemvetardagen logo"
        />
      </NuxtLink>

      <!-- DESKTOP -->
      <nav class="desktop">

        <!-- Home -->
        <div class="normal">
          <NuxtLink activeClass="active" :to="localePath('/')" class="header-link">
            {{ $t("navbar.home") }}
          </NuxtLink>
        </div>

        <!-- Catalog -->
        <div class="normal">
          <NuxtLink :to="localePath('/companies/') " activeClass="active" class="header-link">{{
            $t("navbar.catalog")
          }}</NuxtLink>
        </div>

        <!-- About -->
        <div class="normal">
          <NuxtLink :to="localePath('/about/')" activeClass="active" class="header-link">{{
            $t("navbar.about")
          }}</NuxtLink>
        </div>
      </nav>

      <nuxt-link
        v-if="showEnglishMessage && checkLang()"
        :to="switchLocalePath('en') + '/'"
        class="link-fair"
      >
        <img src="@/assets/img/UK.png"/>
      </nuxt-link>
      <nuxt-link
        v-else-if="showEnglishMessage === false && checkLang() && checkPath()"
        :to="switchLocalePath('sv')"
        class="link-fair"
      >
        <img src="@/assets/img/Sweden.png"/>
      </nuxt-link>
      <nuxt-link
        v-else-if="showEnglishMessage === false && checkLang()"
        :to="switchLocalePath('sv') + '/'"
        class="link-fair"
      >
        <img src="@/assets/img/Sweden.png"/>
      </nuxt-link>
      <nuxt-link
        v-else-if="checkLang() === false"
        :to="changePath()"
        class="link-fair"
      >
        <img v-if="showEnglishMessage" src="@/assets/img/UK.png" />
        <img
          v-else="showEnglishMessage"
          src="@/assets/img/Sweden.png"
        />
      </nuxt-link>

    </header>

    <!-- MOBILE NAV -->
    <header class="mobile-header">
      <NuxtLink :to="localePath('/')" class="logo-link mobile-logo-link">
        <img
          src="@/assets/img/systemvetardagen-logo/Text_Logo_Black.svg"
          class="logo"
          alt="Systemvetardagen logo"
        />
      </NuxtLink>
      <button @click="mobileNavOpen = !mobileNavOpen" class="nav-toggle">
        <HamburgerMenu />
      </button>
    </header>
    <nav class="sidebar" v-if="!mobileNavOpen">
      <!-- Home -->
      <div class="mobile-header-container" @click="mobileNavOpen = !mobileNavOpen">
        <NuxtLink :to="localePath('/')" activeClass="active" class="header-link">
          {{ $t("navbar.home") }}
        </NuxtLink>
      </div>

      <!-- Catalog -->
      <div
        class="mobile-header-container"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <NuxtLink :to="localePath('/companies/')" activeClass="active" class="header-link">
          {{ $t("navbar.catalog") }}
        </NuxtLink>
      </div>

      <!-- About -->
      <div
        class="mobile-header-container"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <NuxtLink :to="localePath('/about/')" activeClass="active" class="header-link">
          {{ $t("navbar.about") }}
        </NuxtLink>
      </div>

      <!-- Change language -->
      <div @click="mobileNavOpen = !mobileNavOpen" class="link-fair">
        <nuxt-link v-if="showEnglishMessage" :to="switchLocalePath('en')">
          <img src="@/assets/img/UK.png"/>
        </nuxt-link>
        <nuxt-link v-else :to="switchLocalePath('sv')">
          <img src="@/assets/img/Sweden.png" />
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
import HamburgerMenu from '@/components/icons/HamburgerMenu';

export default {
  components: {
    HamburgerMenu
  },
  data() {
    return {
      mobileNavOpen: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    checkLang() { // checks the current language by testing if the path contains .sv or .en
      let st = String(this.$route.path);
      if (st.includes(".sv")) {
        return false;
      } else if (st.includes(".en")) {
        return false;
      }
      return true;
    },
    changePath() { // changes the language of a page by changing the path of the current url
      let st = String(this.$route.path);
      if (st.includes(".en")) {
        let st2 = st.replace(".en", ".sv");
        let st3 = st2.replace("/en", "");
        return st3;
      } else {
        let st2 = st.replace(".sv", ".en");
        let st3 = st2.replace("/companies", "/en/companies");
        return st3;
      }
    },
    checkPath() { // checks if the current page is for a company from the cms by looking for the word companies in the path
      let st = String(this.$route.path);
      if (st.includes("/companies")) {
        return false;
      }
      return true;
    },
    handleResize() { // Handles the event of resizing the window
      if (window.innerWidth > 768) { // Width 768 is the breakpoint for mobile view
        this.mobileNavOpen = true; // mobileNavOpen is the variable that controls if the mobile menu is visible or not
      }
    }
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === "sv";
    },
  },
};
</script>


<style scoped>
.sidebar > .link-fair {
  margin-top: 1rem;
}

.sidebar  .link-fair img {
  height: 2.5rem;
}

.mobile-header-container a {
  /*padding-left: 1.5rem;*/
  color: var(--clr-grey-600);
  /*margin-top: 2rem;*/
  font-weight: 400;
  font-size: 1.2rem;
}

.header-link {
  font-size: 1rem;
  font-weight: 400;
  margin: 0 max(1rem, 2vw);
  /*padding-bottom: 0.3rem;*/
  color: var(--clr-grey-600);
  /*align-self: flex-end;*/
}

.sidebar {
  position: fixed;
  top: 3rem;
  height: fit-content;
  width: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  gap: 1.4rem;
  padding: 2rem;
  background: var(--clr-white);
  z-index: 100;
  /*border-left: solid var(--clr-grey-300) 2px;*/
  border-bottom: 1px solid var(--clr-grey-300);
}

.normal {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-bottom-style: solid;
  border-bottom-color: transparent;
}

/* changes transparent bottom border to grey */

.active {
  /*border-bottom-color: var(--clr-grey-1000);*/
  /*color: red;*/
}

nav .nuxt-link-exact-active {
  color: var(--clr-grey-1000);
  border-bottom: 1.5px solid var(--clr-grey-1000);
  margin-bottom: -2px;
  position: relative;
  top: 1px;
  padding-bottom: 2px;
  font-weight: 500;
}

nav .active a {
  color: var(--clr-grey-1000);
  border-bottom: 1.5px solid var(--clr-grey-1000);
  margin-bottom: -2px;
  position: relative;
  top: 1px;
  padding-bottom: 2px;
  font-weight: 500;
}

.normal:not(.active) a:hover {
  color: var(--clr-grey-800);
}

.link-fair img {
  height: 1.8rem;
}

.main-header {
  background: white;
  position: fixed;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  transition: background 0.2s;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  border-bottom: solid var(--clr-grey-300) 0.13rem;
  margin: 0rem 0rem;
  align-self: center;
  box-sizing: content-box;
}

.logo-link {
  height: 3rem;
  padding: 0rem 0;
}

.logo {
  height: 100%;
}

nav.desktop {
  display: flex;
  height: 100%;
  gap: 1rem;
}

nav > div > NuxtLink {
  color: var(--clr-grey-1000);
  text-decoration: none;
}

.mobile-header {
  display: none;
}

.nav-toggle {
  z-index: 999;
  background-color: transparent;
  border: none;
  color: var(--clr-grey-1000);
  height: 3rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.nav-toggle-icon {
  height: 100%;
  color: black;
}

/* NAVBAR MOBILE */
@media (max-width: 768px) {
  .main-logo-link {
    display: none;
  }
  .mobile-header {
    display: flex;
    background-color: var(--clr-white);
    border-bottom: solid var(--clr-grey-300) 0.13rem;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    height: 3rem;
  }
  .main-header {
    display: none;
    background-image: none;
    background-color: rgba(35, 53, 6, 0.8666666667);
    top: 0;
    right: 0;
    bottom: 0;
    left: 20%;
    height: 100%;
    width: auto;
    padding-left: 3rem;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.16, 0.74, 0.53, 1);
  }
  .main-header[data-visible="true"] {
    transform: translateX(0%);
  }
  .main-header {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .header-link {
    font-size: 1.8rem;
    margin: 0.75rem 0;
    align-content: center;
  }
  .btn-lang {
    margin-top: 2rem;
  }

  .logo-link {
    padding: 0.5rem;
    height: 4rem;
  }
}
.header-scrolled {
  background: var(--clr-white);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2666666667);
}
</style>
