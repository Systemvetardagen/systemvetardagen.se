<template>
  <NuxtLink :to="post.slug">
    <article class="card">
      <nuxt-img
        v-if="post.post_image"
        :src="post.post_image"
        class="post-img"
      ></nuxt-img>
      <h3>{{ post.title }}</h3>
      <p class="body-text">{{ post.body_text }}</p>
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
  padding: 1rem;
  border-radius: 1rem;
  width: 24rem;
  color: initial;
  border: solid 0.25rem var(--clr-grey-300);
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
  object-fit: cover;
  border-radius: 1rem;
}
</style>