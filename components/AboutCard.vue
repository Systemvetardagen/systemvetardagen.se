<template>
  <div class="leader-card">
    <img
      v-if="post.portrait"
      :src="post.portrait"
      alt="portrait"
      class="portrait-img"
    />
    <div class="leader-card-header">
      <div class="name-role-container">
        <p class="name">{{ post.name }}</p>
        <p class="role wrap-text"> {{ post.role }}</p>
      </div>
      <div class="links">
        <a v-if="post.linkedin_link" :href="post.linkedin_link">
          <LinkedInLogo class="link-icon"/>
        </a>
        <!-- <a v-if="post.portfolio_link" :href="post.portfolio_link">
          <WWWIcon class="link-icon"/>
        </a> -->
        <a v-if="post.email" :href="'mailto:' + post.email">
          <MailIcon class="link-icon"/>
        </a>
        <a v-if="post.github_link" :href="post.github_link">
          <GitHubLogo class="link-icon"/>
        </a>
      </div>
    </div>
    <!-- <p class="bio-text" v-if="post.about_you">{{ post.about_you }}</p> -->
    <!-- <div class="email-links">
      <a class="email-link" :href="'mailto:' + post.disk_mail">{{
        post.disk_mail
      }}</a>
      <a class="email-link" :href="'mailto:' + post.disk_mail">{{
        post.personal_mail
      }}</a>
    </div> -->
  </div>
</template>

<script>
import LinkedInLogo from '@/components/icons/LinkedInLogo.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import WWWIcon from '@/components/icons/WWWIcon.vue'
import GitHubLogo from '@/components/icons/GitHubLogo.vue'
export default {
  props: {
    post: Object,
  },
  components: {
    LinkedInLogo,
    MailIcon,
    WWWIcon,
    GitHubLogo
  }
};
</script>

<style scoped>
.name {
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
}
.wrap-text {
  overflow-wrap: break-word;
}

.leader-card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  /*background-color: red;*/
}

.leader-card-header {
  display: flex;
  flex-direction: column;
  /*max-width: 15rem;*/
  justify-content: flex-end;
}

.name-role-container {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.name {
  line-height: 1;
}

.role {
  font-size: 0.9rem;
  color: var(--clr-grey-600);
  line-height: 1;
}

.links {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.3rem;
  margin-top: 0.5rem;
}

.portrait-img {
  width: 7rem;
  height: 7rem;
  /*border-radius: 0.7rem 0rem 0rem 0.7rem;
  border: 3.418px solid #000;*/
}

.link-icon {
  width: 1.3rem;
  color: var(--clr-grey-700);
  margin: 0
}

.link-icon:hover {
  color: black;
}

img {
  object-fit: cover;
  aspect-ratio: 1/1;
  object-position: center 30%;
}


@media only screen and (max-width: 320px) {
  .portrait-img {
    width: 5rem;
    height: 5rem;
    /*border-radius: 0.7rem 0.7rem 0rem 0rem;
    border: 3.4 18px solid #000;*/
  }

  .leader-card {
    flex-direction: column;
  }
}

@media only screen and (min-width: 500px) {
  .portrait-img {
    width: 12rem;
    height: 12rem;
    /*border-radius: 0.7rem 0.7rem 0rem 0rem;
    border: 3.418px solid #000;*/
  }
  .leader-card {
    display: flex;
    flex-direction: row;
    width: 27rem;
  }

.leader-card-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>
