<template>
  <NuxtLink :to="post.slug">
    <article>
      <h3>{{ post.title }}</h3>
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