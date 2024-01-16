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
              <MailIcon class="link-icon"/>
            </a>
            <a v-if="post.portfolio_link" :href="post.portfolio_link">
              <WWWIcon class="link-icon"/>
            </a>
            <a v-if="post.linkedin_link" :href="post.linkedin_link">
              <LinkedInLogo class="link-icon"/>
            </a>
            <a v-if="post.github_link" :href="post.github_link">
              <GitHubLogo class="link-icon"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard.vue";
import LinkedInLogo from '@/components/icons/LinkedInLogo.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import WWWIcon from '@/components/icons/WWWIcon.vue'
import GitHubLogo from '@/components/icons/GitHubLogo.vue'

export default {
  components: {
    AboutCard,
    LinkedInLogo,
    MailIcon,
    WWWIcon,
    GitHubLogo
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
  gap: 3rem;
}

.leader-cards {
  max-width: 64rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.heading-wdd {
  margin-top: 2rem;
  align-self: flex-start;
}

.posts-wdd {
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.post-wdd {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 15rem;
}

.link-icon {
  width: 1.3rem;
  color: black;
  margin: 0
}

.post-name {
  font-weight: bold;
}
</style>