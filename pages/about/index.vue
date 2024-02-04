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
        <p>{{$t('about_page.description.para3')}}</p>
      </div>
      <div class="text-block">
        <h3>{{$t('about_page.description.heading4')}}</h3>
        <p>{{$t('about_page.description.para4')}}<a href="mailto:systemvetardagen@disk.su.se">systemvetardagen@disk.su.se</a>.</p>
      </div>

    </div>
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

p {
  line-height: 1.5;
}

.wrapper {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-items: center;
  align-items: center;
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
}


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

@media only screen and (max-width: 500px) {
  .banner {
    aspect-ratio: 5 / 2;
    object-position: 0 34%;
  }
}


</style>
