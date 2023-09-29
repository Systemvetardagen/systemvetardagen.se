<template>
  <div>
    <header class="main-header" data-visible="false">

      <!--  LOGO-LINK -->
      <a href="https://systemvetardagen.se" class="logo-link main-logo-link">
        <img
          src="@/assets/img/Symbol_&_Text_Logo_Black_&_Color.svg"
          class="logo"
          alt="Systemvetardagen logo"
        />
      </a>

      <!-- DESKTOP -->
      <nav>

        <!-- Home -->
        <div class="normal" v-bind:class="{ active: isActive('/') }">
          <NuxtLink :to="localePath('/')" class="header-link">{{
            $t("home")
          }}</NuxtLink>
        </div>

        <!-- Catalog -->
        <div class="normal" v-bind:class="{ active: isActive('/catalog/') }">
          <NuxtLink :to="localePath('/catalog') + '/'" class="header-link">{{
            $t("catalog")
          }}</NuxtLink>
        </div>

        <!-- About -->
        <div v-bind:class="{ active: isActive('/about/') }" class="normal">
          <NuxtLink :to="localePath('/about') + '/'" class="header-link">{{
            $t("about")
          }}</NuxtLink>
        </div>
      </nav>

      <nuxt-link
        v-if="showEnglishMessage && checkLang()"
        :to="switchLocalePath('en') + '/'" 
        class="link-fair"
        ><img src="@/assets/img/UK.png"
      /></nuxt-link>
      <nuxt-link
        v-else-if="showEnglishMessage === false && checkLang() && checkPath()"
        :to="switchLocalePath('sv')"
        class="link-fair"
        ><img src="@/assets/img/Sweden.png"
      /></nuxt-link>
      <nuxt-link
        v-else-if="showEnglishMessage === false && checkLang()"
        :to="switchLocalePath('sv') + '/'"
        class="btn-lang"
        ><img src="@/assets/img/Sweden.png"
      /></nuxt-link>
      <nuxt-link
        v-else-if="checkLang() === false"
        :to="changePath()"
        class="btn-lang"
        ><img v-if="showEnglishMessage" src="@/assets/img/UK.png" /><img
          v-else="showEnglishMessage"
          src="@/assets/img/Sweden.png"
        />
      </nuxt-link>
 
    </header>

    <!-- MOBILE NAV -->
    <header class="mobile-header">
      <NuxtLink :to="localePath('/')" class="logo-link mobile-logo-link">
        <img
          src="@/assets/img/Symbol_&_Text_Logo_Black_&_Color.svg"
          class="logo"
          alt="Systemvetardagen logo"
        />
      </NuxtLink>
      <button @click="seen = !seen" class="nav-toggle">
        <svg
          class="nav-toggle-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </header>
    <div class="sidebar" v-if="!seen">
      <!-- Home -->
      <div
        v-bind:class="{ mactive: isActive('/') }"
        class="mobile-header-container"
        @click="seen = !seen"
      >
        <NuxtLink :to="localePath('/')" class="header-link">{{
          $t("home")

        }}</NuxtLink>
      </div>

      <!-- Catalog -->
      <div
        v-bind:class="{ mactive: isActive('/catalog/') }"
        class="mobile-header-container"
        @click="seen = !seen"
      >
        <NuxtLink :to="localePath('/catalog') + '/'" class="header-link">{{
          $t("catalog")
        }}</NuxtLink>
      </div>

      <!-- About -->
      <div
        v-bind:class="{ mactive: isActive('/about/') }"
        class="mobile-header-container"
        @click="seen = !seen"
      >
        <NuxtLink :to="localePath('/about') + '/'" class="header-link">{{
          $t("about")
        }}</NuxtLink>
      </div>

      <!-- Change language -->
      <div @click="seen = !seen" class="link-fair">
        <nuxt-link
          v-if="showEnglishMessage"
          :to="switchLocalePath('en')"
          ><img src="@/assets/img/UK.png"
        /></nuxt-link>
        <nuxt-link v-else :to="switchLocalePath('sv')"
          ><img src="@/assets/img/Sweden.png"
        /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    isActive(cpath) {
      if (this.$route.path == cpath) {
        return true;
      }
    },
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
        this.seen = true; // Seen is the variable that controls if the mobile menu is visible or not
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
  position: absolute;
  bottom: 3rem;
  left: 1rem;
}

.mobile-header-container {
  padding-left: 1.5rem;
  color: black;
  margin-top: 2rem;
}

.sidebar {
  position: fixed;
  height: 100%;
  width: 75%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-white);
  z-index: 100;
  border-left: solid var(--clr-grey-300) 0.13rem;
}
.mactive {
  padding-left: 1.2rem;
  border-left: solid var(--clr-grey-1000) 0.3rem;
}

.normal {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-bottom-style: solid;
  border-bottom-color: transparent;
}

/* changes transparent bottom border to grey */

.active {
  border-bottom-color: var(--clr-grey-1000);
}

.main-header {
  background: white;
  position: fixed;
  /* width: 95%; */
  height: 5rem;
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

.btn-lang {
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

.header-link {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 max(1rem, 2vw);
  padding: 1rem;
  color: black;
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
  nav {
    flex-direction: column;
    height: 100%;
    align-items: center;
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
