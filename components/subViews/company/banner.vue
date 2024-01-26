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
    .banner-shade {
    background: RGB(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    }
    .banner-overlay {
    position: absolute;
    bottom: 0;
    color: var(--clr-white);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    }
    .banner-overlay > h1 {
    font-size: clamp(1.8rem, 5vw, 3rem);
    }
    .banner-overlay > p {
    font-size: clamp(0.5rem, 2vw, 1rem);
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
    .logo {
    display: flex;
    width: clamp(12rem, 20vw, 16rem);
    height: 80%;
    padding: 2rem;
    margin: 2rem;
    background-color: var(--clr-white);
    border-radius: 1rem;
    }

    .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    }

    .email {
    font-family: work-sans;
    }

    .post-location {
    padding-bottom: clamp(0.2rem, 1vw, 0.5rem);
    border-bottom: solid 2px var(--clr-white);
    }
    .post-title {
    padding-bottom: clamp(0.1rem, 2.5vw, 3rem);
    }
    .post-tag {
    align-self: flex-end;
    padding-top: clamp(0.2rem, 1vw, 0.5rem);
    color: white;
    }



</style>

