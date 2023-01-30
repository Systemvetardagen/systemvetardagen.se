<template>
  <div class="leader-card">
    <div class="leader-card-header">
      <img
        :src="require('@/assets' + post.picture)"
        alt="portrait"
        class="portrait-img"
      />
      <div>
        <h3 class="name">{{ post.name }}</h3>
        <p>{{ post.role }}</p>
      </div>
      <div class="links">
        <a v-if="post.linkedin_link" :href="post.linkedin_link">
          <svg
            class="link-icon"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <title>LinkedIn</title>
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
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
      </div>
    </div>
    <!-- <p class="bio-text" v-if="post.about_you">{{ post.about_you }}</p> -->
    <div class="email-links">
      <a class="email-link" :href="'mailto:' + post.disk_mail">{{
        post.disk_mail
      }}</a>
      <a class="email-link" :href="'mailto:' + post.disk_mail">{{
        post.personal_mail
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.name {
  color: var(--clr-blue-900);
}
.leader-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--clr-blue-100);
  border-radius: 1rem;
  width: 20rem;
}

.leader-card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.portrait-img {
  width: 65%;
  margin-inline: auto;
}

.link-icon {
  width: 1.5rem;
  color: var(--clr-blue-900);
}

.email-links {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.email-link {
  font-family: work-sans;
  color: var(--clr-blue-900);
}

.bio-text {
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>