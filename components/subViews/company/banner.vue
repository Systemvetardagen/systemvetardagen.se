<template>
    <div class="banner">
          <img
            v-if="post.banner"
            :src="this.post.banner"
            class="banner-img"
          />
          <img
            v-else
            src="@/assets/img/nod_gradient_colors.jpg"
            alt="No sponsor image"
            class="banner-img"
          />
          
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }

</script>

<style scoped>
    /* BANNER */
    .banner {
    aspect-ratio: 3/1;
    max-width: 1000px;
    }
    
    .banner-img {
    width: 100%;
    object-fit: cover;
    }
    



</style>

