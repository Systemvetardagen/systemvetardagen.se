<template>
    <div class="sponsors">
        <div class="sponsor-content">
            <h2 style="color: var(--clr-blue-700);"> {{$t('sponsors')}}</h2>

            <!-- <div class="sponsor-grid">
                <div class="sponsor-logo" v-for="logo in logos" :key="logo.name">
                    <img v-bind:src=" '/_nuxt/assets/img/sponsor-logos/logo_' + logo.img" v-bind:alt= logo.name >
                </div>
            </div> -->

            <div class="sponsor-grid">
                <div class="sponsor-logo">
                    <img 
                        src="@/assets/img/sponsor-logo/logo_capgemini.png" 
                        alt="Capgemini">
                </div>
                <div class="sponsor-logo sweco" >
                    <img 
                        src="@/assets/img/sponsor-logo/logo_sweco_black.png" 
                        alt="Sweco">
                </div>
                <div class="sponsor-logo">
                    <img 
                        src="@/assets/img/sponsor-logo/logo_handelsbanken.png" 
                        alt="Handelsbanken">
                </div>
                <div class="sponsor-logo">
                    <img 
                        src="@/assets/img/sponsor-logo/logo_innofactor.png" 
                        alt="Innofactor">
                </div>
                <div class="sponsor-logo">
                    <img 
                        src="@/assets/img/sponsor-logo/logo_cygni.png" 
                        alt="Cygni">
                </div>
                <div class="sponsor-logo">
                    <img 
                        src="@/assets/img/sponsor-logo/logo_zimply.png" 
                        alt="Zimply">
                </div>
                <div class="sponsor-logo">
                    <img 
                        src="@/assets/img/sponsor-logo/logo_accenture.png" 
                        alt="Accenture">
                </div>
                <!-- <div class="sponsor-logo">
                    <img 
                        src="" 
                        alt="FRA">
                </div> -->

            </div>

        </div>
        
    </div>

</template>

<script>
    import Button from '@/components/Button.vue'

    export default {
  data () {
    return {
        logoPath: '@/assets/img/sponsor-logos/logo_',
        logos: [{name: 'Capgemini', img: 'capgemini.png'}, 
                {name: 'Sweco', img:'sweco_black.png'},
                {name: 'Innofactor', img: 'innofactor.png'},
                {name: 'Handelsbanken', img: ''},
                {name: 'Cygni', img: 'cygni.png'},
                {name: 'Zimply Innovation', img: 'zimply.png'}
            ]
    }
  },
        name: 'heroSection'
    }
    components: {
        Button
    }

</script>
<style>
    .sponsors {
        height: auto;
        display: flex;
        justify-content: center;
        padding: 5%;

    }

    .sponsor-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        align-content: center;
    
    }
    .sponsor-conent > h2 {
        align-self: center;
    }

    .sponsor-grid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1rem;
        align-items: center;
        align-content: center;

    }

    .sponsor-logo {
        border: none;
        /* background: var(--clr-pink-200); */
        height: 7rem;
        width: 10rem;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        justify-content: center;

    }

    .sponsor-logo > img {
        width: 90%;
        color: black;
        /* border: solid; */
        
    }
    .sweco {
        padding-bottom: 1.5rem;
    }

    @media (min-width: 1024px) {
        .sponsor-grid {
        
        grid-template-columns: 30% 30% 30%;
        grid-gap: 2rem;
        

    }
	  }
    
</style>