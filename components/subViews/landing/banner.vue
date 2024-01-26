<template>
    <div class="container">
        <NuxtLink :to="localePath(path)" class="link">
            <img :src="require(`~/assets/img/${img}.png`)" class="bg-img" />
            <div class="foreground">
                <div class="box">
                    <p><slot></slot></p>
                </div>
            </div>
        </NuxtLink>

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
    aspect-ratio: 60/11;
    width: 100%;
    display: flex;
    align-items: center; /* Optional: Center the content vertically */
    justify-content: center;
    margin: 0rem 0;
}

.bg-img {
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    /* object-fit: cover; */
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
</style>
