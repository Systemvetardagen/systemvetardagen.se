Fermin — Idag 19:09
<template>
    <main>
      <section v-if="posts">
        <h1 class="title">Company</h1>
        <div>
      <li v-for="group in groups">
        <h1>{{group.group}}</h1>
        <li v-for="post of posts" :key="post.slug">
          <p v-if="post.group == group.group" >
            {{post.name}}
            {{post.group}}
            {{post.role}}

          </p>
      </li>

      </li>
    </div>
      </section>
    </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let groups;
    try {
      groups = await $content("company").fetch();
    } catch (e) {
      error({ message: "Posts not found" });
    }
    return { groups };
  }
}
</script> 