<template>
    <main>
      <section v-if="posts">
        <h1 class="title">Company</h1>
        <div>
      <li v-for="group in groups">
        <h1>{{group.group}}</h1>
        <li v-for="post of posts" :key="post.slug">
          <p v-if="post.group == group.group" >
            
        
          </p>
      </li>

      </li>
    </div>
      </section>
    </main>
</template>



'General', 'Business Relations and Sales', 'Events', 'Logistics', 'Marketing', 'Web Development and Design', 'Groupleader'

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("company").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { posts };
  },
  data() {
    return {
      groups: [{ group: 'Business Relations and Sales' }, { group: 'Events' }, { group: 'Logistics' }, { group: 'Marketing' }, { group: 'Web Development and Design' }, { group: 'Groupleader' }]
    }
  }
}
</script> 