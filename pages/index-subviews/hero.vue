<template>
    <div id="home" class="hero">

        <div class="hero-content">
             <!-- Hero Text -->
            <div class="hero-content-text">
                <h1 class="hero-heading" style="color: var(--clr-blue-600)" >{{ $t('hero_title') }}</h1>
                <h3 style="color: var(--clr-blue-900)">{{ $t('event_description') }}</h3>
            </div>

        <!-- Hero Buttons -->
            <div class="hero-buttons">
                <Button title="Katalog" bColor="gradient">Katalog</Button>
                <Button title="Kontakta oss" link="" bColor="--clr-blue-200" tColor="--clr-black-900">Kontakta oss</Button>
            </div>

        </div>

        
    </div>

</template>

<script>
    import Button from '@/components/Button.vue'
    //import { text } from 'body-parser';

    export default {
        name: 'heroSection'
    }
    components: {
        Button
    }

</script>

<style>
    .hero {
        height: 100vh;
        /* background-position: center; */
        /* background-repeat: no-repeat; */
        justify-content: flex-end;
        background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('@/assets/img/hero-img-provisional.png');
        background-size: cover;
        
    }

    /* .hero::before {    
      content: "";
      background-image: url('@/assets/img/hero-img-provisional.png');
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.5;
} */
    .hero-content {
        position: relative;
        /* line-height: 200%; */
    }

    .hero-content-text {
        max-width: 45ch;
    }

    .hero-buttons {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 80px;
    }

    .hero-heading {
        max-width: 85%;
    }
</style>