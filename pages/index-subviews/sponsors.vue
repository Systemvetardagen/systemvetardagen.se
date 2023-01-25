<template>
    <div class="sponsors">
        <div class="sponsor-content">
            <h2 style="color: var(--clr-blue-700);"> {{$t('sponsors')}}</h2>

            <div class="sponsor-grid">
                <div class="sponsor-logo" v-for="logo in logos" :key="logo.name">
                    <img v-bind:src=" '@/assets/img/sponsor-logos/logo_' + logo.img" v-bind:alt= logo.name >
                </div>
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

    .sponsor-conent {
        display: flex;
        justify-content: center;
    
    }

    .sponsor-grid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 1rem;

    }

    .sponsor-logo {
        border: solid;
        height: 10rem;
        width: 10rem;


    }
</style>