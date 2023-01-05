<template>
    <div class="sponsors">
        <div class="sponsor-content">
            <h2 style="color: var(--clr-blue-700);"> {{$t('sponsors')}}</h2>

            <h3>Coming soon...</h3>

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
    .sponsors {
        height: 100vh;
        display: flex;
        justify-content: center;
        padding: 5%;

    }

    .sponsor-conent {
    
    }
</style>