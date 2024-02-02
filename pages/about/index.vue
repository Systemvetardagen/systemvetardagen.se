<template>
  <div class="wrapper">
    <section v-if="posts">
      <h2>{{$t('about_page.project_group.heading')}}</h2>
      <!-- Pass all team members to team as props.  -->
      <!-- <AboutTeam :posts="posts.filter((i) => i.team === 'wdd')" teamName="Web Development & Design"/>  -->

      <div v-for="(people, team) in posts" :key="team">
        <AboutTeam :posts="people" :teamName="team" />
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
import AboutTeam from '@/components/AboutTeam.vue'
import { API_Call_Team_Members } from "../../app/companyCall";

export default {
  components: {
    AboutCard,
    LinkedInLogo,
    MailIcon,
    WWWIcon,
    GitHubLogo,
    AboutTeam
  },
  // This method vill fetch a list of all the cms entries in a specified folder
  async asyncData({ $content, error }) {
    // let posts;
    // try {
    //   posts = await $content("about").fetch(); //Gets the data from the content/about path
    // } catch (e) {
    //   error({ message: "Posts not found" });
    // }
    // return { posts };
    const members = await API_Call_Team_Members();
    const posts = (members.reduce((accumulator, person) => {
      // Use the role as the key
      const key = person.team;
      // If the key doesn't exist yet, create it
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      // Push the current person to the group
      accumulator[key].push(person);
      return accumulator;
    }, { "Project Management": [], "Web Development & Design": []})); // Initial value is an empty object

    console.log(posts)
    return { posts }
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
    // postsGeneral: function () {
    //   return this.posts.filter((i) => i.group === "General");
    // },
    // postsGroupLeader: function () {
    //   return this.posts.filter((i) => i.group === "Group Leader");
    // },
    // postsWDD: function () {
    //   return this.posts.filter((i) => i.team === "wdd");
    // },
  },
};
</script> 

<style scoped>
/* TEMPORARY*/
section {
  /* margin-top: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
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

.title {
  align-self: center;
}
</style>