<template>
  <div class="wrapper">
    <section>
      <h1>Catalog</h1>
      <Button link="/companies/" bColor="gradient">Companies</Button>
      <h2>Inlägg</h2>
      <BlogCard v-for="post of filteredPosts" :post="post" :key="post.slug" />
      <h2>{{ $t("aulanod-program") }}</h2>
      <div class="schedule">
        <div v-for="event in schedule" :key="event.id" class="schedule-row">
          <p class="event-name">{{ event.company }}</p>
          <p>{{ event.time }}</p>
          <p>{{ event.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  data() {
    return {
      schedule: [
        {
          company: "Truesec",
          time: "11:00 - 11:45",
          title: "The Russian Use of Malware in the Cyberwar Against Ukraine",
        },
        {
          company: "Arbetsförmedlingen",
          time: "12:00 - 12:45",
          title: "IT på Arbetsförmedlingen – inte vad du tror",
        },
        {
          company: "Sweco",
          time: "13:00 - 13:45",
          title:
            "Ställ om världen med digitaliseringens kraft och fart! Men hur?",
        },
        { company: "FRA", time: "14:00 - 14:45", title: "" },
        {
          company: "Cygni",
          time: "15:00 - 15:45",
          title:
            "Vad vi önskar att vi visste när vi sökte vårt första jobb efter studierna. Och rollen som konsult och vad den innebär hos oss på Cygni.",
        },
      ],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((e) => e.slug.includes("." + this.$i18n.locale));
    },
  },
  methods: {
    count(post) {
      this.post.length;
    },
  },
};
</script>
<style scoped>
.schedule {
  max-width: 48rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
}
.schedule-row {
  display: contents;
}

.event-name {
  font-weight: bold;
}
</style>
