<template>
  <div class="leader-card">
    
    <img
      v-if="post.portrait"
      :src="post.portrait"
      alt="portrait"
      class="portrait-img"
    />
    <div class="leader-card-header">  
      <div>
        <p class="name">{{ post.name }}</p>
        <p class="wrap-text"> {{ post.role }}</p>
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
        <a v-if="post.github" :href="'mailto:' + post.github">
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
  font-weight: 600;
}
.wrap-text {
  overflow-wrap: break-word;
}

.leader-card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  
  
}

.leader-card-header {
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  justify-content: space-between;
  
}

.links {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.3rem;
}

.portrait-img {
  width: 5rem;
  height: 5rem;  
  border-radius: 0.7rem 0rem 0rem 0.7rem;
  border: 3.418px solid #000; 
}

.link-icon {
  width: 1.3rem;
  color: black;
  margin: 0
}





@media only screen and (min-width: 768px) {
  .portrait-img {
    width: 15rem;
    height: 15rem;  
    border-radius: 0.7rem 0.7rem 0rem 0rem;
    border: 3.418px solid #000; 
  }
  .leader-card-header {
    display: flex;
    flex-direction: row;
    max-width: 15rem;
    justify-content: space-between;
  }
  .leader-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    
  }

.leader-card-header {
    display: flex;
    flex-direction: row;
    max-width: 15rem;
    justify-content: space-between;
    
  }
}
</style>