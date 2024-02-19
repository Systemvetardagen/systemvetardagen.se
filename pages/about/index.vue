<template>
  <div class="wrapper">
    <!-- Banner -->
    <img src="@/assets/img/guy-with-shirt-back.jpg" alt="Person wearing a systemvetardagen t-shirt" class="banner">
    <!-- Text -->
    <div class="text">
      <div class="text-block">
        <h3>{{$t('about_page.description.heading1')}}</h3>
        <p>{{$t('about_page.description.para1')}}</p>
      </div>
      <div class="text-block">
        <h3>{{$t('about_page.description.heading2')}}</h3>
        <p>{{$t('about_page.description.para2')}}</p>
      </div>
      <div class="text-block">
        <h3>{{$t('about_page.description.heading3')}}</h3>
        <p>{{ $t('about_page.description.para3') }}<NuxtLink to="/companies">{{ $t('about_page.description.para3_link_text') }}</NuxtLink></p>
      </div>
      <div class="text-block">
        <h3>{{$t('about_page.description.heading4')}}</h3>
        <p>{{$t('about_page.description.para4')}}<a href="mailto:systemvetardagen@disk.su.se">systemvetardagen@disk.su.se</a>.</p>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <section v-if="posts">
      <h2>{{$t('about_page.project_group.heading')}}</h2>
      <!-- Pass all team members to team as props.  -->
      <!-- <AboutTeam :posts="posts.filter((i) => i.team === 'wdd')" teamName="Web Development & Design"/>  -->

      <div v-for="(people, team) in posts" :key="team">
        <AboutTeam :posts="people" :teamName="team" />
      </div>

    </section>
    <sponsors/>
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
import sponsors from "@/components/subViews/landing/sponsors.vue"

export default {
  components: {
    AboutCard,
    LinkedInLogo,
    MailIcon,
    WWWIcon,
    GitHubLogo,
    AboutTeam,
    sponsors
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

.horizontal-line {
  height: 2px;
  width: 100%;
  background-color: var(--clr-grey-400);
}

h2 {
  font-weight: 600;
}

h3 {
  font-weight: 600;
  font-size: 1.3rem;
}

p {
  line-height: 1.5;
}

.wrapper {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-items: center;
  align-items: center;
  margin-top: 3rem;
}
.banner {
  width: 100%;
  max-width: 1200px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  aspect-ratio: 4 / 1;
  object-fit: cover;
  object-position: 0 34%;
}
/* Text */
.text {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 35rem;
  justify-items: flex-start;
  align-items: flex-start;
  margin: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
}


/* TEMPORARY*/
section {
  /* margin-top: 3rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding: 2rem;
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

a {
  color: var(--clr-blue-600);
}

a:visited {
  color: var(--clr-blue-600);
}

a:hover {
  color: var(--clr-blue-700);
  text-decoration: underline;
}


.title {
  align-self: center;
}

@media only screen and (max-width: 500px) {
  .banner {
    aspect-ratio: 5 / 2;
    object-position: 0 34%;
  }
}


</style>
