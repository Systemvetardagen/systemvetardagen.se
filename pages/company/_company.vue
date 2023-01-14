<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>
      
      <article>
        <div>

          <h1 class="">{{ post.title }}</h1>
          <h3>{{ post.slogan }}</h3>
          <p>Grundades: {{ post.founded }}</p>
          <p>{{ post.area_of_business }}</p>
        </div>
        <p>{{ post.about_us }}</p>
        <ul>
          <h3>Anställer studenter från:</h3>
          <li v-for="program in post.Program">{{ program }}</li>
        </ul>
        <p>Typer av anställningar: {{ post.positions }}</p>
        <p>{{ post.qualifications }}</p>
        <div>
          <h3>Kontaktperson</h3>
          <p>Monia Letmark</p>
          <a href="linkto:monia.letmark@avanade.com">monia.letmark@avanade.com</a>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("company", params.company).fetch();
    } catch (e) {
      error({ message: "Entry not found" });
    }
    return { post };
  }
}
</script> 


