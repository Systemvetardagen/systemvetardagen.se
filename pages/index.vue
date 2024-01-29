<!-- use option (alt) + Z to wrap text in vs code -->
<template>
  <div class="wrapper">
    <hero />
    <slogan/>
    <sponsors />
    <banner img="crowded-from-above" path="/companies">{{$t('landing_page.banner.meet')}}</banner>
    <countdown />
    <description/>
    <div class="blog-section">
        <BlogCard
          v-for="post of filteredPosts"
          v-if="post.featured"
          :post="post"
          :key="post.slug"
          class="post-card"
        />
      </div>
    <banner img="auditorium-seats">{{ $t('landing_page.banner.nod') }}</banner>
    <links/>

  </div>
</template>
<style>
</style>


<script>
import hero from "@/components/subViews/landing/hero.vue";
import soon from "@/components/subViews/landing/soon.vue";
import info from "@/components/subViews/landing/info.vue";
import faq from "@/components/subViews/landing/faq.vue";
import oldCatalog from "@/components/subViews/landing/oldCatalog.vue";
import contact from "@/components/subViews/landing/contact.vue";
import sponsors from "@/components/subViews/landing/sponsors.vue";
import slogan from "@/components/subViews/landing/slogan.vue"
import banner from "@/components/subViews/landing/banner.vue"
import countdown from "@/components/subViews/landing/countdown.vue"
import description from "@/components/subViews/landing/description.vue"
import blog from "@/components/subViews/landing/blog.vue"
import BlogCard from "@/components/BlogCard.vue"
import links from "@/components/subViews/landing/links.vue"

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
    hero,
    soon,
    info,
    faq,
    oldCatalog,
    contact,
    sponsors,
    slogan,
    banner,
    countdown,
    description,
    blog,
    BlogCard,
    links
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
  html {
    scroll-behavior: smooth;

  }
  .blog-section {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f8f8f8;
  }
</style>
