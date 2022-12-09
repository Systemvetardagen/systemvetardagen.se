<template>
    <div id="home" class="hero">

        <!-- Hero Text -->
        <div>
            <h1 class="hero-heading" style="color: var(--clr-blue-600)" >Find your next job</h1>
            <h3 style="color: var(--clr-blue-900)">Sveriges största arbetsmarknadsdag för studenter och arbetsgivare inom IT-branschen!</h3>
        </div>

        <!-- Hero Buttons -->
        <div class="hero-buttons">
            <Button title="Katalog" link="" bColor="gradient"/>
            <Button title="Kontakt oss" link="" bColor="--clr-white" tColor="--clr-blue"/>
        </div>

        
    </div>

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
    .hero {
        height: 100vh;
        background: linear-gradient(rgba(27, 40, 51, 0.2666666667), rgba(27, 40, 51, 0.2666666667), var(--clr-darkblue)), url("@/assets/img/hero-img-provisional.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        justify-content: flex-end;
        
    }

    

    .hero-buttons {
        display: flex;
        margin-bottom: 80px;
    }

    .hero-heading {
        max-width: 85%;
    }
</style>