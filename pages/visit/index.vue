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
        padding: 3rem 0;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
    }
</style>