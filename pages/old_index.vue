<!-- use option (alt) + Z to wrap text in vs code -->
<template>
  <div class="wrapper">
    <hero />
    <sponsors />
    <soon />
    <!-- <studentnode/> -->
    <info />
    <faq />
    <oldCatalog />
    <studentNode/>
    <!-- <Button title="See Map" link="map"/> -->
    <contact />
  </div>
</template>
<style>
</style>


<script>
import hero from "@/components/subViews/landing/hero.vue";
import soon from "@/components/subViews/landing/soon.vue";
import info from "@/components/subViews/landing/info.vue";
import faq from "@/components/subViews/landing/faq.vue";
import oldCatalog from "@/components/subViews/landing/oldCatalog.vue";
import contact from "@/components/subViews/landing/contact.vue";
import sponsors from "@/components/subViews/landing/sponsors.vue";
import studentNode from '@/components/subViews/landing/studentnode.vue'

export default {
  components: {
    hero,
    soon,
    info,
    faq,
    oldCatalog,
    contact,
    sponsors,
    studentNode
  },
  name: "IndexPage",
};
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
