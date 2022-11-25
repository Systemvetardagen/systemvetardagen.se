<template>
  <div class="wrapper">
    
		<div id="home" class="hero">
			<h1 class="text-yellow text-shadow">{{ $t('event_name') }}</h1>
			<h3 class="hero-date text-shadow">{{ $t('event_date') }}</h3>
			<p class="subtitle text-shadow">{{ $t('event_description') }}</p>
			<div class="hero-buttons">
				<a href="https://massan.systemvetardagen.se/sv/event/5695" class="button button-yellow">{{ $t('to_the_event') }}</a>
				<a href="#contact" class="button button-contact">{{ $t('contact_us') }}</a>
			</div>
			<a href="#main" class="hero-chevron-down">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</a>
		</div>

		<main id="main">

			<section id="sponsors" class="sponsors">
				<div class="sponsors-wrapper">
					<div>
						<h2 class="text-yellow">{{ $t('sponsors') }}</h2>
						<picture>
							<source media="(min-width: 1024px)" srcset="@/assets/img/sponsors_full.png">
							<img src="@/assets/img/sponsors_mobile.png" class="sponsors-image sponsors-image-mobile">
						</picture>
					</div>
					<div class="exhibitors">
						<h2 class="text-yellow">{{ $t('exhibitor') }}</h2>
						<p class="text-white-dim">{{ $t('coming_soon') }}</p>
					</div>
				</div>
			</section>

			<section class="soon">
				<div class="soon-content text-shadow">
					<h2 class="text-yellow">{{ $t('it_is_almost_time!') }}</h2>
					<p>{{ $t('disk_introduction1') }}<a
							class="inline-link text-yellow" href=https://disk.su.se>{{ $t('disk') }}</a>
							{{ $t('disk_introduction2') }}
					</p>
				</div>
			</section>
			<section class="info">
				<div class="fair-content">
					<h2 class="fair-heading text-yellow">{{ $t('the_fair_2022') }}</h2>
					<p>
						{{ $t('event_description2') }}
					</p>
				</div>
				<svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.69 60">
					<path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="12"
						d="m245.96 12.27-34.51 34.51-34.51-34.51-34.52 34.51-34.51-34.51L73.4 46.78 38.89 12.27 4.38 46.78"
						data-name="Layer 2" />
				</svg>
				<div class="info-wrapper">
					<h2 class="text-yellow">{{ $t('for_those_of_you_who_will_participate') }}</h2>
					<div class="info-text">
						<div class="info-first">
							<h3 class="text-yellow">{{ $t('before_the_fair') }}</h3>
							<ul>
								<li>{{ $t('before_the_fair_description1') }}</li>
								<li>{{ $t('before_the_fair_description2') }}</li>
								<li>{{ $t('before_the_fair_description3') }}</li>
								<li>{{ $t('before_the_fair_description4') }}</li>
							</ul>
							<p>{{ $t('before_the_fair_description5') }}</p>
						</div>
						<div class="info-second">
							<h3 class="text-yellow">{{ $t('during_the_fair') }}</h3>
							<ul>
								<li>{{ $t('during_the_fair_description1') }}</li>
								<li>{{ $t('during_the_fair_description2') }}</li>
								<li>{{ $t('during_the_fair_description3') }}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="FAQ" class="faq">
				<div class="faq-wrapper text-shadow">
					<h2 class="text-yellow">{{ $t('frequently_asked_questions') }}</h2>
					<div class="faq-question">
						<h3 class="text-yellow">{{ $t('question1') }}</h3>
						<p class="text-white">
							{{ $t('answer1') }}
						</p>
					</div>
					<div class="faq-question">
						<h3 class="text-yellow">{{ $t('question2') }}</h3>
						<p class="text-white">
							{{ $t('answer2') }}
						</p>
					</div>
					<div class="faq-question">
						<h3 class="text-yellow">{{ $t('question3') }}</h3>
						<p class="text-white">
							{{ $t('answer3') }}
						</p>
					</div>
				</div>
			</section>

			<section id="catalog" class="catalog">
				<div class="catalog-content">
					<img class="catalog-image" src="@/assets/img/catalog2021_front.jpg" />
					<div class="catalog-text">
						<h2 class="text-yellow">{{$t('catalog_of_this_year')}}</h2>
						<p>{{$t('catalog_description')}}</p>
						<!-- <button onclick="viewCatalogModal()" class="button button-yellow">Kolla in katalogen</button> -->
					</div>
				</div>
				<div class="modal-overlay">
					<div class="modal catalog-modal">
						<h2 class="text-yellow">{{$t('catalog_2021')}}</h2>
						<button onclick="closeModal()" class="modal-close-button">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</section>

			<section class="join">
				<div class="join-wrapper">
					<img src="@/assets/img/iPad.png" alt="iPad 10.2">
					<div class="text-content">
						<h2 class="text-yellow">{{$t('iPad1')}}</h2>
						<p>{{$t('iPad2')}}</p>
						<ul>
							<li>{{$t('follow_on_instagram')}}<a href="https://www.instagram.com/systemvetardagen/"
									class="inline-link text-yellow">@systemvetardagen</a></li>
							<li>{{$t('sign_for_event')}}</li>
						</ul>
						<a class="button button-yellow create-profile-button"
							href="https://massan.systemvetardagen.se/sv/new-signup/start">{{$t('create_profile')}}</a>
					</div>
				</div>
			</section>

			<svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.69 60">
				<path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="12"
					d="m245.96 12.27-34.51 34.51-34.51-34.51-34.52 34.51-34.51-34.51L73.4 46.78 38.89 12.27 4.38 46.78"
					data-name="Layer 2" />
			</svg>

			<section id="contact" class="contact">
				<form id="contact-form">
					<h2 class="text-yellow">{{$t('contact_us')}}</h2>
					<div class="inputs">
						<div class="inputs-left-col">
							<input id="form-company" type="text" placeholder="company" name="company" required>
							<input id="form-name" type="text" placeholder="name" name="name" required>
							<input id="form-email" type="email" placeholder="email" name="email" required>
							<input autocomplete="off" type="text" id="form-title" name="title" placeholder="Title"
								style="display: none">
						</div>
						<textarea id="form-message" name="message" placeholder="messange" rows="3"
							style="resize: none;"></textarea>
					</div>
					<button type="submit" class="button button-yellow button-form" form="contact-form">{{$t('send')}}</button>
				</form>
			</section>

		</main>
	</div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
