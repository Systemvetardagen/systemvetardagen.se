<template>
  <NuxtLink :to="post.slug">
    <article class="card">
      <nuxt-img
        v-if="post.post_image"
        :src="post.post_image"
        class="post-img"
      ></nuxt-img>
      <div class="card-text">
        <h3>{{ post.title }}</h3>
        <p class="body-text">{{ post.body_text }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.card {
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 24rem;
  color: initial;
  border: solid 0.15rem var(--clr-grey-100);
}

.body-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-img {
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

p {
  color: var(--clr-grey-500);
}
</style>