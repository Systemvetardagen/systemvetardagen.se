<template>
  <div>
		<header class="main-header" data-visible="false">
			<a href="https://systemvetardagen.se" class="logo-link main-logo-link">
				<img src="@/assets/img/Symbol_&_Text_Logo_Black_&_Color.svg" class="logo" alt="Systemvetardagen logo">
			</a>
			<nav>
				
				<!-- <div class="normal" v-bind:class="{ active: isActive('/') }">
					<NuxtLink to="/" class="header-link" >{{$t('home')}}</NuxtLink>
				</div>
				
				<div class="normal" v-bind:class="{ active: isActive('/company') }">
					<NuxtLink to="/company" class="header-link">{{$t('catalog')}}</NuxtLink>
				</div> -->

				
			</nav>
			<nuxt-link v-if="showEnglishMessage" :to="switchLocalePath('en')" class="btn-lang"><img src="@/assets/img/UK.png"/></nuxt-link>
			<nuxt-link v-else="showEnglishMessage" :to="switchLocalePath('sv')" class="btn-lang"><img src="@/assets/img/Sweden.png"/></nuxt-link>
			
		</header>
		
		<!-- MOBILE NAV -->
		<header class="mobile-header">
			<a href="https://systemvetardagen.se" class="logo-link">
				<img src="@/assets/img/Symbol_&_Text_Logo_Black_&_Color.svg" class="logo" alt="Systemvetardagen logo">
			</a>
			<!-- <button class="nav-toggle">
				<svg class="nav-toggle-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</button> -->
			<nuxt-link v-if="showEnglishMessage" :to="switchLocalePath('en')" class="btn-lang"><img src="@/assets/img/UK.png"/></nuxt-link>
			<nuxt-link v-else="showEnglishMessage" :to="switchLocalePath('sv')" class="btn-lang"><img src="@/assets/img/Sweden.png"/></nuxt-link>
			
		</header>
  </div>
</template>

<script>
export default {
  methods: {
	isActive(cpath) {
      if (this.$route.path == cpath) {
		return true
	  };
    },
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale === 'sv';
    }
  }
};
</script>


<style>

	/* .normal {
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-items: center;
		border-bottom-style: solid;
		border-bottom-color: transparent;
	} */

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
	}

	nav > div > a {
	color: var(--clr-grey-1000);
	}

	.mobile-header {
	display: none;
	}

	.nav-toggle {
	z-index: 999;
	background-color: transparent;
	border: none;
	color: var(--clr-white);
	height: 3rem;
	padding: 0.5rem;
	margin-right: 0.5rem;
	}

	.nav-toggle-icon {
	height: 100%;
	}

	/* NAVBAR MOBILE */
	@media (max-width: 768px) {
	.main-logo-link {
		display: none;
	}
	.mobile-header {
		background-color: var(--clr-white);
		width: 100%;
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 2rem 0.5rem 1rem;
		flex-direction: row;
		border-bottom: solid var(--clr-grey-300);
		z-index: 1;
	}
	.main-header {
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
	.main-header[data-visible=true] {
		transform: translateX(0%);
	}
	.main-header {
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
	nav {
		flex-direction: column;
	}
	.header-link {
		font-size: 1.8rem;
		margin: 0.75rem 0;
	}
	.btn-lang {
		/* margin-top: 2rem; */
	}

	}
	/* .header-scrolled {
	background: var(--clr-white);
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2666666667);
	} */
</style>