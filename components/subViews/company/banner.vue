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

          <div class="banner-shade"></div>
          <div class="banner-overlay">
            <!-- <p class="post-location">{{ $t("location") }}: TBA</p>
            <p v-if="post.banner" class="post-tag">// Sponsor</p>
            <p v-else class="post-tag">//</p> -->
          </div>
          <div class="banner-bar"></div>
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

    .banner-bar {
    position: absolute;
    bottom: calc(clamp(2px, 1vw, 10px) * -1);
    left: 0;
    width: 100%;
    height: clamp(2px, 1vw, 10px);
    background: linear-gradient(
        90deg,
        var(--clr-blue-600),
        var(--clr-pink-600),
        var(--clr-yellow-600)
    );
    border-radius: 0 0 1rem 1rem;
    }

    .email {
    font-family: work-sans;
    }

    .post-location {
    padding-bottom: clamp(0.2rem, 1vw, 0.5rem);
    border-bottom: solid 2px var(--clr-white);
    }
    .post-tag {
    align-self: flex-end;
    padding-top: clamp(0.2rem, 1vw, 0.5rem);
    color: white;
    }




</style>

