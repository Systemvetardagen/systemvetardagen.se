<template>
    <div class="container">
        <h3 class="gradient-text">
          {{ $t("landing_page.slogan.tagline") }}
        </h3>
    </div>
</template>
<script>
</script>
<style scoped>
    .gradient-text {
        text-align: center;
        font-style: normal;
        font-weight: 100;
        line-height: normal;

        background: var(--gradient-ish, linear-gradient(90deg, #FAC178 3.15%, #C451C1 53.03%, #4259D1 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .container {
        padding: 2rem 1rem; 
    }

    @media only screen and (min-width: 768px) {
        .container {
            padding: 2rem 3rem;
        }
    }
</style>