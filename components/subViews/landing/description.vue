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
        gap: 2rem;
        justify-items: center;
        align-items: center;
        padding: 1rem 2rem;
        line-height: 1.5;
    }
    p {
        text-align: center;
        max-width: 30rem;
    }


</style>
