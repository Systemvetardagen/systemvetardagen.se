<template>
  <div class="wrapper">
    <section v-if="posts">
      <h1 class="title">{{ $t("about-heading") }}</h1>
      <h2>{{ $t("project-group-heading") }}</h2>
      <div class="leader-cards">
        <about-card v-for="post in postsGeneral" v-if="lang(post.slug)" :post="post" :key="post.id" />
      </div>
      <div class="leader-cards">
        <about-card v-for="post in postsGroupLeader" v-if="lang(post.slug)" :post="post" :key="post.id" />
      </div>
      <h2 class="heading-wdd">Web Development & Design Team</h2>
      <div class="posts-wdd">
        <div v-for="post in postsWDD" v-if="lang(post.slug)" :key="post.id" class="post-wdd">
          <p class="post-name">{{ post.name }}</p>
          <p>{{ post.role }}</p>
          <div>
            <a v-if="post.personal_mail" :href="'mailto:' + post.personal_mail">
              <svg class="link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>

            <a v-if="post.portfolio_link" :href="post.portfolio_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="link-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </a>
            <a v-if="post.linkedin_link" :href="post.linkedin_link">
              <svg class="link-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a v-if="post.github_link" :href="post.github_link">
              <svg class="link-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentcolor">
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue";

export default {
  components: {
    AboutCard,
  },
  // This method vill fetch a list of all the cms entries in a specified folder
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("about").fetch(); //Gets the data from the content/about path
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  methods: {
    lang(postName) { //Checks for current language
      let p = String(postName);
      if (this.$i18n.locale == "sv") {
        return p.includes(".sv");
      }
      return p.includes(".en");
    },
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale == "sv";
    },
    postsGeneral: function () {
      return this.posts.filter((i) => i.group === "General");
    },
    postsGroupLeader: function () {
      return this.posts.filter((i) => i.group === "Group Leader");
    },
    postsWDD: function () {
      return this.posts.filter((i) => i.group === "Web Development and Design");
    },
  },
};
</script> 

<style scoped>
/* TEMPORARY*/
section {
  /* margin-top: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.leader-cards {
  max-width: 64rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.heading-wdd {
  margin-top: 2rem;
}

.posts-wdd {
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;
}

.post-wdd {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-icon {
  color: var(--clr-blue-600);
}

.post-name {
  font-weight: bold;
}
</style>