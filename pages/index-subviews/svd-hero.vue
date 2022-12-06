<template>
    <div id="home" class="hero">

        <!-- Hero Text -->
        <div>
            <h1 class="hero-heading" >Find your next job</h1>
            <h3>Sveriges största arbetsmarknadsdag för studenter och arbetsgivare inom IT-branschen!</h3>
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
        name: 'hero'
    }
    components: {
        Button
    }

</script>

<style>
    .hero {
        height: 100vh;
        
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