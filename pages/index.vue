<template>
  <div class="wrapper">
    
		<div id="home" class="hero">
			<h1 class="text-yellow text-shadow">Systemvetardagen 2022</h1>
			<h3 class="hero-date text-shadow">9 februari</h3>
			<p class="subtitle text-shadow">Sveriges största arbetsmarknadsdag för studenter och arbetsgivare inom
				IT-branschen!</p>
			<p>{{ $t('test') }}</p>
			<div class="hero-buttons">
				<a href="https://massan.systemvetardagen.se/sv/event/5695" class="button button-yellow">Till
					mässan</a>
				<a href="#contact" class="button button-contact">Kontakta oss</a>
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
						<h2 class="text-yellow">Sponsorer</h2>
						<picture>
							<source media="(min-width: 1024px)" srcset="@/assets/img/sponsors_full.png">
							<img src="@/assets/img/sponsors_mobile.png" class="sponsors-image sponsors-image-mobile">
						</picture>
					</div>
					<div class="exhibitors">
						<h2 class="text-yellow">Utställare</h2>
						<p class="text-white-dim">Kommer snart...</p>
					</div>
				</div>
			</section>

			<section class="soon">
				<div class="soon-content text-shadow">
					<h2 class="text-yellow">Snart är det dags!</h2>
					<p>För 26:e året i rad arrangeras Systemvetardagen på Stockholms universitet. Det är <a
							class="inline-link text-yellow" href=https://disk.su.se>studentkåren DISKs</a>
						från Data- och Systemvetenskapliga institutionen (DSV) egna
						arbetsmarknadsdag. Under dagen
						knyts värdefulla kontakter mellan studenter och näringsliv. Systemvetardagen är en unik mötesplats
						för studenter & organisationer inom IT-branschen.
					</p>
				</div>
			</section>
			<section class="info">
				<div class="fair-content">
					<h2 class="fair-heading text-yellow">Mässan 2022</h2>
					<p>
						Årets upplaga av Systemvetardagen kommer att ske i hybridform. Mässan kommer att vara digital, i kombination
						med
						fysiska event och presentationer.
						På mässdagen kommer du att se virtuella bås på mässhemsidan där du kan interagera med företagen och ta del
						av
						information
						och jobbannonser som de har laddat upp. Under dagen kommer live-föreläsningar att hållas av våra sponsorer.
					</p>
				</div>
				<svg class="divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.69 60">
					<path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="12"
						d="m245.96 12.27-34.51 34.51-34.51-34.51-34.52 34.51-34.51-34.51L73.4 46.78 38.89 12.27 4.38 46.78"
						data-name="Layer 2" />
				</svg>
				<div class="info-wrapper">
					<h2 class="text-yellow">För dig som ska delta</h2>
					<div class="info-text">
						<div class="info-first">
							<h3 class="text-yellow">Inför mässan</h3>
							<ul>
								<li>Skapa en profil inför mässan, länken dit hittar du i menyraden.</li>
								<li>Maximera dina chanser för att få en bra kontakt med företagen – följ rekommendationerna och fyll ut
									din
									profil till 100%.</li>
								<li>Läs på! Katalogen ger en bra övergripande blick över alla företag som ställer ut.</li>
								<li>Kolla in företagets montrar, många av dem är redan öppna! Här kan ni se allt om företaget, vad de
									erbjuder för
									tjänster och anmäla er för kontaktsamtal.</li>
							</ul>
							<p>Sen är du redo för mässan!</p>
						</div>
						<div class="info-second">
							<h3 class="text-yellow">Under mässan</h3>
							<ul>
								<li>Kom till NOD och delta på sponsorernas event! Grupprummen inne på DSV finns tillgängliga när du
									vill kolla runt på mässhemsidan och ha kontaktsamtal.</li>
								<li>Gå in på mässan genom länken och logga in.</li>
								<li>Kika in på företagens montrar, de är där för att få kontakt med studenter, så passa på! </li>
								<li>Lär dig något nytt – Under dagen kommer mässans sponsorer hålla föreläsningar som är synliga
									på mässans startsida. Olika företag, med olika föreläsningar – passa på ställa frågor och få svar
									direkt!
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="FAQ" class="faq">
				<div class="faq-wrapper text-shadow">
					<h2 class="text-yellow">Vanliga frågor</h2>
					<div class="faq-question">
						<h3 class="text-yellow">Jag går inte på Stockholms Universitet, får jag ändå delta?</h3>
						<p class="text-white">
							Ja, alla studenter och även icke-studenter är välkomna!
						</p>
					</div>
					<div class="faq-question">
						<h3 class="text-yellow">Kostar det något att delta?</h3>
						<p class="text-white">
							Nej, det är helt kostnadsfritt för studenter att delta på mässan.
						</p>
					</div>
					<div class="faq-question">
						<h3 class="text-yellow">Kan jag delta på mässan om jag inte talar svenska?</h3>
						<p class="text-white">
							Absolut! Mäss-hemsidan erbjuds på både svenska och engelska, och företagen som deltar pratar gärna
							engelska.
						</p>
					</div>
				</div>
			</section>

			<section id="catalog" class="catalog">
				<div class="catalog-content">
					<img class="catalog-image" src="@/assets/img/catalog2021_front.jpg" />
					<div class="catalog-text">
						<h2 class="text-yellow">Årets katalog!</h2>
						<p>Snart kommer årets Systemvetardags-katalog! I den kommer du att hitta allt man behöver veta om
							eventet,
							med information om våra sponsorer, utställande företag och mycket mer!</p>
						<!-- <button onclick="viewCatalogModal()" class="button button-yellow">Kolla in katalogen</button> -->
					</div>
				</div>
				<div class="modal-overlay">
					<div class="modal catalog-modal">
						<h2 class="text-yellow">Katalog 2021</h2>
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
						<h2 class="text-yellow">Anmäl dig och tävla om en iPad!</h2>
						<p>Var med i utlottningen av en iPad 10.2"! Delta genom att följa dessa enkla steg:</p>
						<ul>
							<li>Följ oss på Instagram <a href="https://www.instagram.com/systemvetardagen/"
									class="inline-link text-yellow">@systemvetardagen</a></li>
							<li>Skapa en profil på mässhemsidan och anmäl dig till Systemvetardagen 2022!</li>
						</ul>
						<a class="button button-yellow create-profile-button"
							href="https://massan.systemvetardagen.se/sv/new-signup/start">Skapa
							en profil</a>
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
					<h2 class="text-yellow">Kontakta oss</h2>
					<div class="inputs">
						<div class="inputs-left-col">
							<input id="form-company" type="text" placeholder="Företag" name="company" required>
							<input id="form-name" type="text" placeholder="Namn" name="name" required>
							<input id="form-email" type="email" placeholder="E-post" name="email" required>
							<input autocomplete="off" type="text" id="form-title" name="title" placeholder="Title"
								style="display: none">
						</div>
						<textarea id="form-message" name="message" placeholder="Meddelande" rows="3"
							style="resize: none;"></textarea>
					</div>
					<button type="submit" class="button button-yellow button-form" form="contact-form">Skicka</button>
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
