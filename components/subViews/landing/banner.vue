<template>
    <div class="container">
        <NuxtLink :to="localePath(path)" class="link">
            <div>
                <img :src="require(`~/assets/img/${img}.jpg`)" class="bg-img" />
                <div class="line"></div>
            </div>
            <div class="foreground">
                <div class="box">
                    <p><slot></slot></p>
                </div>
            </div>
            
        </NuxtLink>
        <div class="banner-bar"></div>
    </div>
</template>
<script>
    export default {
        props: {
            img: String,
            path: String,
        }
    }
</script>
<style scoped>
.link {
    color: inherit;
    text-decoration: none;
}
.container {
    position: relative;
    aspect-ratio: 30/11;
    width: 100%;
    display: flex;
    align-items: center; /* Optional: Center the content vertically */
    justify-content: center;
    margin: 0rem 0;
    background: linear-gradient(45deg, rgba(65, 72, 208, 1) 0%, rgba(200, 80, 192, 1) 50%, rgba(255, 204, 112, 1) 100%);
    border-bottom: 10px solid transparent;
}

.bg-img {
    position: absolute;
    text-align: center;
    aspect-ratio: 30/11;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    object-fit: cover;
    filter: grayscale(100%);

}

.foreground {

    position: relative;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

}

.box {
    background: white;
    padding: 0.5rem;
}

.line {
  width: 100%;
  height: 3px;
  background-color: gold;
  margin-bottom: 0;
  padding: 0;
  background: rgb(255,204,112);
  background: linear-gradient(45deg, rgba(65,72,208,1) 0%, rgba(200,80,192,1) 50%, rgba(255,204,112,1) 100%);
}

.banner-bar {
    position: absolute;
    bottom: calc(clamp(13px, 1vw, 20px) * -1);
    left: 0;
    width: 100%;
    height: clamp(4px, 1vw, 10px);
    background: linear-gradient(
        90deg,
        var(--clr-blue-800),
        var(--clr-pink-800),
        var(--clr-yellow-800)
    );

    }

@media screen and (min-width: 720px) {
    .container {
        aspect-ratio: 60/11;
    }
    .bg-img {
        aspect-ratio: 60/11;
    }
}
</style>
