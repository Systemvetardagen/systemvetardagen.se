<template>
    <div class="wrapper">
        <NodSchedule/>
        <Route/>
    </div>
</template>
<script>
    import Route from '@/components/subViews/visit/route.vue'
    import NodSchedule from '@/components/subViews/visit/nodSchedule.vue'
    export default {
        components: {
            Route,
            NodSchedule        }
    }
</script>
<style scoped>
    .wrapper {
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
</style>