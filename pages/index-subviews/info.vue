<template>
    <section>
        <div class="info">
            <div class="info-first">
                <h3 style=" color:var(--clr-pink-600); text-align: center;">{{ $t('before_the_fair') }}</h3>
                <p><ul class="list">
                    <li>{{ $t('before_the_fair_description1') }}</li>
                    <li>{{ $t('before_the_fair_description2') }}</li>
                    <li>{{ $t('before_the_fair_description3') }}</li>
                    <li>{{ $t('before_the_fair_description4') }}</li>
                </ul></p>
                <p>{{ $t('before_the_fair_description5') }}</p>
            </div>
            <div class="info-second">
                <h3 style="color:var(--clr-blue-600); text-align: center;">{{ $t('during_the_fair') }}</h3>
                <p><ul>
                    <li>{{ $t('during_the_fair_description1') }}</li>
                    <li>{{ $t('during_the_fair_description2') }}</li>
                    <li>{{ $t('during_the_fair_description3') }}</li>
                </ul></p>
            </div>
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

        text-align: left;
        background:  linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
        background-position: center;
        background-size: cover;
        height: 100vh;
        background-repeat: no-repeat;
        margin-bottom: 0rem;
        margin-top: 0rem;
        padding-bottom:5rem;
    }
    .info-first{
        margin-left: 0rem;
        padding-bottom: 5rem;
    }
    .info-second{
        margin-left: 0rem;
    }
    .info > div > p > ul {
        list-style-type: square;
        
    }



</style>