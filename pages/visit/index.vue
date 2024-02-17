<template>
    <div class="wrapper">
        <NodSchedule/>
        <Map/>
        <studentnode/>
        <Route/>
    </div>
</template>
<script>
    import Route from '@/components/subViews/visit/route.vue'
    import NodSchedule from '@/components/subViews/visit/nodSchedule.vue'
    import Map from '@/components/subViews/visit/map.vue'
    import studentnode from "@/components/subViews/landing/studentnode.vue"
    export default {
        components: {
            Route,
            NodSchedule,
            studentnode,
            Map       }
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
