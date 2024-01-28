<template>
  <div class="banner">
    <NuxtLink :to="localePath(path)" class="link">
      <div class="container">
        <img :src="require(`~/assets/img/${img}.jpg`)" class="bg-img" />
        <div class="foreground">
          <div class="box">
            <p><slot></slot></p>
          </div>
        </div>
        <GradientLine />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import GradientLine from "@/components/GradientLine";
export default {
  props: {
    img: String,
    path: String,
  }
}
</script>
<style scoped>

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.banner p {
  font-family: IBMPlexMono;
  font-size: 0.9rem;
}

.link {
  color: inherit;
  text-decoration: none;
  width: 100%;
  max-width: 1200px;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0;
  gap: 0;
  padding: 0;
  height: fit-content;
  max-width: 1200px;
}

.bg-img {
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  object-fit: cover;
  filter: grayscale(100%);
  vertical-align: baseline;
  height: 9rem;
  max-width: 1200px;
}

.foreground {
  position: absolute;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
}

.box {
  background: white;
  padding: 0.5rem 1rem;
}

@media screen and (min-width: 1000px) {
  .bg-img {
    height: 11rem;
  }
}
</style>
