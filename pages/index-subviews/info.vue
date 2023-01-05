<template>
    <section class="info">
        <div class="info-second">
			<h3 style="color:var(--clr-blue-600); text-align: center;">{{ $t('during_the_fair') }}</h3>
			<p><ul>
				<li>{{ $t('during_the_fair_description1') }}</li>
				<li>{{ $t('during_the_fair_description2') }}</li>
				<li>{{ $t('during_the_fair_description3') }}</li>
			</ul></p>
		</div>
		<div class="info-first">
			<h3 style=" color:var(--clr-pink-600); text-align: center;">{{ $t('before_the_fair') }}</h3>
			<p><ul>
				<li>{{ $t('before_the_fair_description1') }}</li>
				<li>{{ $t('before_the_fair_description2') }}</li>
				<li>{{ $t('before_the_fair_description3') }}</li>
				<li>{{ $t('before_the_fair_description4') }}</li>
			</ul></p>
			<p>{{ $t('before_the_fair_description5') }}</p>
		</div>

	</section>

</template>

<script>
    import Button from '@/components/Button.vue'

    export default {
        name: 'heroSection'
    }
    components: {
        Button
    }

</script>
<style>
    .info{
        display:flex;
        flex-direction: column;
        position: relative;
        text-align: left;
        background:  linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
        background-position: center;
        background-size: cover;
        height: 100vh;
        background-repeat: no-repeat;
        margin-bottom: 10rem;
        margin-top: 0rem;
    }
    .info-first{
        margin-left: 0rem;
    }
    .info-second{
        margin-left: 0rem;
    }
    .vectorinfo{
        position: relative;
        left: -10.07%;
        right: 44.58%;
        top: 45.9%;
        bottom: -23.73%;
        background: linear-gradient(0deg, rgba(255, 243, 249, 0.82), rgba(255, 243, 249, 0.82)), url('assets\img\nod_11.jpg');
    }
</style>