<template>
  <div class="wrapper">
    <section class="content">
      <h1>{{ $t("catalog") }} 2023</h1>
      <div class="blog-section">
        <h2>{{ $t("posts-heading") }}</h2>
        <BlogCard
          v-for="post of filteredPosts"
          :post="post"
          :key="post.slug"
          class="post-card"
        />
      </div>
      <div class="sponsors">
        <h2>{{ $t("sponsors") }}</h2>
        <div class="company-grid">
          <NuxtLink
            :to="localePath('/companies/accenture')"
            class="company-logo"
          >
            <img
              src="@/assets/img/company-logos/logo_accenture.png"
              alt="Accenture"
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/companies/capgemini')"
            class="company-logo"
          >
            <img
              src="@/assets/img/company-logos/logo_capgemini.png"
              alt="Capgemini"
            />
          </NuxtLink>
          <NuxtLink :to="localePath('/companies/cygni')" class="company-logo">
            <img src="@/assets/img/company-logos/logo_cygni.png" alt="Cygni" />
          </NuxtLink>
          <NuxtLink :to="localePath('/companies/fra')" class="company-logo">
            <img src="@/assets/img/company-logos/logo_fra.jpg" alt="FRA" />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/companies/handelsbanken')"
            class="company-logo"
          >
            <img
              src="@/assets/img/company-logos/logo_handelsbanken.png"
              alt="Handelsbanken"
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/companies/innofactor')"
            class="company-logo"
          >
            <img
              src="@/assets/img/company-logos/logo_innofactor.png"
              alt="Innofactor"
            />
          </NuxtLink>
          <NuxtLink
            :to="localePath('/companies/sweco')"
            class="company-logo sweco"
          >
            <img
              src="@/assets/img/company-logos/logo_sweco_black.png"
              alt="Sweco"
            />
          </NuxtLink>
          <NuxtLink :to="localePath('/companies/zimply')" class="company-logo">
            <img
              src="@/assets/img/company-logos/logo_zimply.png"
              alt="Zimply"
            />
          </NuxtLink>
        </div>
      </div>
      <Button :link="localePath('/companies') + '/'" bColor="gradient">{{
        $t("all-companies-btn")
      }}</Button>
      <div class="map">
        <h2>{{ $t('map-heading') }}</h2>
        <img src="@/assets/img/map_companies.svg" alt="Map of company placement" class="map-img">
      </div>
      <div class="schedule">
        <h2>{{ $t("aulanod-program") }}</h2>
        <div class="schedule-grid">
          <div v-for="event in schedule" :key="event.id" class="schedule-row">
            <p class="event-time">{{ event.time }}</p>
            <p class="event-name">{{ event.company }}</p>
            <p>{{ event.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  // This method vill fetch a list of all the cms entries in a specified folder
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").fetch(); //Gets the data from the content/blog path
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  data() {
    return {
      logos: [
        { name: "Capgemini", img: "logo_capgemini.png" },
        { name: "Sweco", img: "logo_sweco_black.png" },
        { name: "Innofactor", img: "logo_innofactor.png" },
        { name: "Handelsbanken", img: "logo_handelsbanken.png" },
        { name: "Cygni", img: "logo_cygni.png" },
        { name: "Zimply Innovation", img: "logo_zimply.png" },
      ],
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 100%;
}

h1,
h2 {
  text-align: center;
}

h2 {
  color: var(--clr-blue-600);
}

.blog-section {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.company-grid {
  max-width: 42rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.company-logo {
  border: none;
  height: auto;
  width: 8rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  justify-content: center;
}

.map {
  width: 100%;
  max-width: 64rem;
}

.map-img {
  width: 100%;
}

.schedule {
  width: 100%;
  max-width: 48rem;
}

.schedule-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
  overflow-x: scroll;
}
.schedule-row {
  display: contents;
}

.event-name {
  font-weight: bold;
}

.event-time {
  white-space: nowrap;
}
</style>
