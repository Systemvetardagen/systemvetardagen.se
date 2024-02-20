<template>
    <div>
    <p class="heading wrap-text">{{teamName.toUpperCase()}}</p>
    <div class="leader-cards">
      <!-- should be two about-cards with v-if post.position=='head' and 'vice respectively' -->
        <about-card
            :post="head"
            :key="head.id"
        />
        <about-card
            :post="vice"
            :key="vice.id"
        />


    </div>
    <button v-if="members.length != 0" class="expand-btn" @click="toggleExpansion()">{{isExpanded ? $t('about_page.project_group.collapse') : $t('about_page.project_group.expand')}}</button>
    <div class="posts-wdd" v-if="isExpanded">
      <!-- change to post.position=='member' -->
        <div v-for="post in members"  :key="post.id" class="post-wdd">
            <p class="post-name">{{ post.name }}</p>
            <p class="member-role">{{ post.role }}</p>
            <div class="member-links">
              <a v-if="post.email" :href="'mailto:' + post.email">
                  <MailIcon class="link-icon"/>
              </a>
              <!-- <a v-if="post.portfolio_link" :href="post.portfolio_link">
                  <WWWIcon class="link-icon"/>
              </a> -->
              <a v-if="post.linkedin_link" :href="post.linkedin_link">
                  <LinkedInLogo class="link-icon"/>
              </a>
              <a v-if="post.github_link" :href="post.github_link">
                  <GitHubLogo class="link-icon"/>
              </a>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import AboutCard from "@/components/AboutCard.vue";
import LinkedInLogo from '@/components/icons/LinkedInLogo.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import WWWIcon from '@/components/icons/WWWIcon.vue'
import GitHubLogo from '@/components/icons/GitHubLogo.vue'


export default {
  props: {
    posts: Array,
    teamName: String
  },
  data() {
    return {
      isExpanded: false,
      expandedText: 'see more'}
  },
  components: {
    AboutCard,
    LinkedInLogo,
    MailIcon,
    WWWIcon,
    GitHubLogo
  },
  // This method vill fetch a list of all the cms entries in a specified folder
  // async asyncData({ $content, error }) {
  //   let posts;
  //   try {
  //     posts = await $content("about").fetch(); //Gets the data from the content/about path
  //   } catch (e) {
  //     error({ message: "Posts not found" });
  //   }
  //   return { posts };
  // },
  methods: {
    lang(postName) { //Checks for current language
      let p = String(postName);
      if (this.$i18n.locale == "sv") {
        return p.includes(".sv");
      }
      return p.includes(".en");
    },
    isActive(cpath) {
      if (this.$route.path == cpath) {
        return true;
      }
    },
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    }
  },
  computed: {
    showEnglishMessage() {
      return this.$i18n.locale == "sv";
    },
    buttonText() {
      return this.isExpanded ? $t('about_page.project_group.expand') : $t('about_page.project_group.collapse');
    },
    head() {
      return this.posts.filter(p => p.position === "head")[0]
    },
    vice() {
      return this.posts.filter(p => p.position === "vice")[0]
    },
    members() {
      return this.posts.filter(p => p.position === "member")
    }

  },
};
</script>

<style scoped>
/* TEMPORARY*/

.wrap-text {
  overflow-wrap: break-word;
}
h3 {
  margin-bottom: 1rem;
}
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
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.heading {
  font-family: Overpass;
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.3rem;
  padding: 1rem 0;
}

.expand-btn {
  display: inline-flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 6.9375rem;
  border: 1px solid #000;
  background-color: var(--clr-grey-100);
}

.expand-btn:hover {
  background-color: var(--clr-grey-200);
}

.posts-wdd {
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  max-width: 32rem;
}

.post-wdd {
  display: flex;
  flex-direction: column;
  /*gap: 0.2rem;*/
  width: 15rem;
}

.member-links {
  margin-top: 0.2rem;
}

.link-icon {
  width: 1.3rem;
  color: var(--clr-grey-700);
  margin: 0
}

.link-icon:hover {
  color: black;
}

.post-name {
  font-weight: bold;
  line-height: 0.9;
}

.member-role {
  color: var(--clr-grey-600);
  font-size: 0.87rem;
}

@media only screen and (min-width: 500px) {
  .leader-cards {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1rem;
}

}
</style>
