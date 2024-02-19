<template>
    <div class="wrapper">
        <img src="@/assets/img/nod_11.jpg" alt="Person wearing a systemvetardagen t-shirt" class="banner">
        <section>
          <div class="heading-container">
            <h1>{{ $t("visit_page.heading") }}</h1>
            <p>{{ $t("visit_page.subheading") }}</p>
          </div>
          <NodSchedule/>
          <Map/>
          <studentnode/>
          <Route/>
        </section>
    </div>
</template>
<script>
    import Route from '@/components/subViews/visit/route.vue'
    import NodSchedule from '@/components/subViews/visit/nodSchedule.vue'
    import Map from '@/components/subViews/visit/map.vue'
    import studentnode from "@/components/subViews/landing/studentnode.vue"
    export default {
        components: {
            Route,
            NodSchedule,
            studentnode,
            Map       }
    }
</script>
<style scoped>
  .banner {
    width: 100%;
    max-width: 1200px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    aspect-ratio: 3 / 1;
    object-fit: cover;
    object-position: 100% 80%;
  }

  section {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
    h1 {
      margin-top: 2rem;
      font-size: 2.2rem;
      color: black;
      margin-bottom: 0.2rem;
    }
    .wrapper {
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .heading-container {
      text-align: center;
      margin-bottom: 2rem;
      max-width: 30rem;
    }

    .heading-container p {
      color: gray;
      font-weight: 300;
    }
</style>
