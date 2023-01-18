<template>
    <section class="soon">
        <div class="soon-text">
            <h2 style="color:var(--clr-pink-600); text-align: center; ">{{ $t('it_is_almost_time!') }}</h2>
            <p class="p" style="color: black;">{{ $t('disk_introduction1') }}<a
            class="inline-link" style="color: black;" href=https://disk.su.se>{{ $t('disk') }}</a>
            {{ $t('disk_introduction2') }}
            </p>
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
    .soon{
        display: flex;
        justify-content: center;
        /* background:  linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('assets/img/soon-bg-2023.png'); */
        background: url('assets/img/soon-bg-2023.png'); 
        background-position-x: 0% 0%;
        /* -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover; */
        background-size: cover;
        background-position: center;
        background-size: cover;
        /* height: 100vh; */
        background-repeat: no-repeat;
        
    }
    .soon-text{
        /* padding:1rem; */
        /* margin-left: 3rem; */
        background: white;
        padding: 1rem 2rem;
        border-radius: 1rem;
      
    }
    @media (max-width: 600px) {
    .soon-text {
    width: 100%;
    }
    }
    @media (min-width: 601px) {
    .soon-text {
    max-width: 43ch;
    }
    }
</style>
