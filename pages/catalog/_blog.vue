<template>
  <div class="wrapper">
    <section>
      <div class="content">
        <nuxt-img
          class="post-img"
          v-if="post.post_image"
          :src="post.post_image"
        />
        <h2>{{ post.title }}</h2>
        <div v-if="post.date_of_creation || post.authors" class="post-info">
          <p>
            <span v-if="post.date_of_creation" class="info-label">Posted: </span
            >{{ parseDate(post.date_of_creation) }}
          </p>
          <p v-if="post.authors">
            <span class="info-label">Authors: </span>
            <span v-for="item in post.authors" :key="item.id"
              >{{ item.name }}
            </span>
          </p>
        </div>
        <p>{{ post.body_text }}</p>
        <ul v-if="post.images">
          <li v-for="item in post.images" :key="item.id">
            <img :src="item" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.blog).fetch();
    } catch (e) {
      error({ message: "Entry not found" });
    }
    return { post };
  },
  methods: {
    getMonthName(monthNumber) {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[monthNumber];
    },
    parseDate(dateString) {
      var date = new Date(dateString);
      var day = date.getDate();
      var month = this.getMonthName(date.getMonth()); // Months are zero indexed
      var year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    },
  },
};
</script>

<style scoped>
.content {
  max-width: 65ch;
}

h2 {
  text-align: center;
}

.post-img {
  max-width: 100%;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.post-info {
  margin-bottom: 2rem;
}

.info-label {
  font-weight: bold;
}
</style>