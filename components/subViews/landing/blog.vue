<template>
    <div class="blog-section">
        <h2>{{ $t("catalog_page.posts-heading") }}</h2>
        <BlogCard
          v-for="post of posts"
          :post="post"
          :key="post.slug"
          class="post-card"
        />
      </div>
</template>
<script>
    import BlogCard from "@/components/BlogCard.vue"
    export default {
    // This method vill fetch a list of all the cms entries in a specified folder
    async asyncData({ $content, error }) {
        let posts;
        try {
        posts = await $content("blog").fetch(); //Gets the data from the content/blog path
        } catch (e) {
        error({ message: "Posts not found" });
        }
        return { posts };
    },
    components: {
        BlogCard
    },
    computed: {
        filteredPosts() {
            return this.posts.filter((e) => e.slug.includes("." + this.$i18n.locale));
        },
    },
    name: "IndexPage",
    };
</script>
<style scoped>
    .blog-section {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>