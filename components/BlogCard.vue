<template>
  <NuxtLink :to="localePath({name: 'blog-blog', params: {blog: post.slug.split('.')[0]}})">
    <article class="card">
      <nuxt-img
        v-if="post.post_image"
        :src="post.post_image"
        class="post-img"
      ></nuxt-img>
      <div class="card-text">
        <h3>{{ post.title }}</h3>
        <p class="body-text">{{ post.body_text }}</p>
        <Nuxt-Link :to="localePath({name: 'blog-blog', params: {blog: post.slug.split('.')[0]}})" class="link">
          {{ $t("blog.read-more") }}
        </Nuxt-Link>
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
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 18rem;
  color: initial;
  border: solid 0.1rem var(--clr-grey-300);
  background-color: white;
}

.card-text {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.body-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.link {
  color: var(--clr-blue-600);
  align-self: flex-end;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 1rem;
}

h3 {
  font-size: 1rem;
}

p {
  color: var(--clr-grey-500);
  font-size: 0.8rem;
}

@media only screen and (min-width: 720px) {
  .card {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    max-width: 35rem;
    height: auto;
  }
  .card-text {
    flex: 1;
    max-width: 50%;
    margin-right: 1rem;
  }
  .post-img {
    width: 40%;
    max-width: none;
    height: 100%;
    margin: 0;
  }

}
</style>
