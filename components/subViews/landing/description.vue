<template>
    <div class="container">
        <p>{{$t('landing_page.description.para1')}}</p>
        <p>{{$t('landing_page.description.para2')}}</p>
        <p>{{$t('landing_page.description.para3')}}</p>
    </div>
</template>
<script>
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-items: center;
        align-items: center;
        padding: 2rem;
        
    }
    p {
        text-align: center;
        max-width: 30rem;
    }


</style>