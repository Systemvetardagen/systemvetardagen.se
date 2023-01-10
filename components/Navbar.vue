<template>
  <div>
		<header class="main-header" data-visible="false">
			<a href="https://systemvetardagen.se" class="logo-link main-logo-link">
				<img src="@/assets/img/SvD_logo_128.png" class="logo" alt="Systemvetardagen logo">
			</a>
			<nav>
				<a href="#home" class="header-link">{{$t('home')}}</a>
				<a href="#sponsors" class="header-link">{{$t('exhibitor')}}</a>
				<a href="#catalog" class="header-link">{{$t('catalog')}}</a>
				<a href="#contact" class="header-link">{{$t('contact')}}</a>
			</nav>
			<nuxt-link v-if="showEnglishMessage" :to="switchLocalePath('en')" class="link-fair"><img src="@/assets/img/UK.png"/></nuxt-link>
			<nuxt-link v-else="showEnglishMessage" :to="switchLocalePath('sv')" class="link-fair"><img src="@/assets/img/Sweden.png"/></nuxt-link>
			<a class="link-fair" href="https://massan.systemvetardagen.se">
				<p class="header-link">{{$t('the_fair')}}</p>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</header>
		
		<!-- MOBILE NAV -->
		<header class="mobile-header">
			<a href="#" class="logo-link">
				<img src="@/assets/img/SvD_logo_128.png" class="logo" alt="Systemvetardagen logo">
			</a>
			<button class="nav-toggle">
				<svg class="nav-toggle-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button>
		</header>
  </div>
</template>

<script>
export default {
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === 'sv';
    }
  }
};
</script>