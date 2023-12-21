<template>
    <div class="box-style">
        <slot> </slot>
    </div>
</template>
<style scoped>

  .box-style {
    border-radius: 1.25rem;
    border: 1px solid var(--stroke-card, #D9D9D9);
    background: #FFF;

    /* standard shadow */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

</style>