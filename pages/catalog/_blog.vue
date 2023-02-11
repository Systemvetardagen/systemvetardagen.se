<template>
  <div class="wrapper">
    <section>
      <img v-if="post.post_image" :src="post.post_image" />
      <h1>{{ post.title }}</h1>
      <p>{{ parseDate(post.date_of_creation) }}</p>
      <p>{{ post.body_text }}</p>
      <h3>Authors</h3>
      <li v-for="item in post.authors" :key="item.id">{{ item.name }}</li>
      <ul v-if="post.images">
        <li v-for="item in post.images" :key="item.id">
          <img :src="item" />
        </li>
      </ul>
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
      return `Posted ${day} ${month}, ${year}`;
    },
  },
};
</script>