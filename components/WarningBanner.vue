<template>
    <div class="banner">
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<script>
</script>
<style scoped>
.banner {
    width: 100%;
    background-color: var(--clr-grey-800);
    color: var(--clr-pink-500);
    text-align: center;
    padding: 0.5rem;
    position: fixed;
    z-index: 2;
    font-weight: 450;
}

</style>