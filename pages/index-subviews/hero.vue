<template>
    <div id="home" class="hero">

        <div class="hero-content">
             <!-- Hero Text -->
            <div class="hero-text">
                <h1 class="hero-heading" style="color: var(--clr-blue-600)" >{{ $t('hero_title') }}</h1>
                <h3 style="color: var(--clr-blue-900)">{{ $t('event_description') }}</h3>
            </div>

        <!-- Hero Buttons -->
            <div class="hero-buttons">
                <Button  :title="this.$t('catalog_btn')" link="/company" bColor="gradient"/>
                <Button  :title="this.$t('contact_us_btn')" link="#contact" bColor="--clr-pink-600" tColor="--clr-white"/>
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
        display: flex;
        background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('@/assets/img/hero-bg-2023.png');
        background-size: cover;
        background-position: center;
        /* flex-direction: column; */
        /* align-content: flex-end; */
        padding-bottom: 0;
        /* padding-top: 50vh; */
        flex-wrap: wrap;

        
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
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 2rem 2rem;
       
        
        /* line-height: 200%; */
        /* align-self: flex-end; */
    }

    .hero-buttons {
        display: flex;
        /* margin-bottom: 80px; */
        flex-direction: column;
    }

    .hero-heading {
        max-width: 85%;
    }

    @media (min-width: 720px) {
        .hero-text {
            /* position: relative; */
            max-width: 65%;
            
        /* line-height: 200%; */
        /* align-self: flex-end; */
        }

        .hero-heading {
            max-width: 100%;
        }
       
        .hero-buttons {
            display: flex;
            flex-direction: row;
            
        }
  
    }
</style>