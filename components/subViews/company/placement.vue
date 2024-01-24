<template>
  <div v-if="post.floor" class="placement">
    {{$t("booth")}} {{ post.placement }} - {{$t("floor")}} {{ post.floor }}
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped>
    .placement {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
</style>
