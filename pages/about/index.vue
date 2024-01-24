<template>
  <div class="wrapper">
    <!-- Banner -->
    <img src="@/assets/img/about-banner.png" alt="About Banner" class="banner">
    <!-- Text -->
    <div class="text">
      <div class="text-block">
        <h3>What is Systemvetardagen?</h3>
        <p>Systemvetardagen is an annual career fair for students and recent graduates focusing on the IT sector. The fair is hosted by the Student Union DISK, a student union at the Department of Computer and Systems Sciences in Kista at Stockholm University. This event is completely free to attend for all students!</p>
      </div>
      <div class="text-block">
        <h3>Where & when is it?</h3>
        <p>In 2024 the fair is held on the 21st of February between 10-16 in Kista Nod, located at Borgarfjordsgatan 12 in Stockholm. No sign-up is needed, just come as you are!</p>
      </div>
      <div class="text-block">
        <h3>What companies are attending this year?</h3>
        <p>You can find all the displaying companies in our company catalogue (coming soon).</p>
      </div>
      <div class="text-block">
        <h3>How can I as a company display?</h3>
        <p>Email us at <a href="mailto:systemvetardagen@disk.su.se">systemvetardagen@disk.su.se</a></p>
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
.wrapper {
  margin-bottom: 5rem; 
  display: flex;
  flex-direction: column;
  gap: 3rem; 
  justify-items: center;
  align-items: center;
}
.banner {
  width: 100%
}
/* Text */
.text {
  display: flex;
  flex-direction: column;
  gap: 4rem;
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


</style>