<!-- use option (alt) + Z to wrap text in vs code -->
<template>
  <div class="wrapper">
    <hero />
    <slogan/>
    <sponsors />
    <banner img="systemvetardagen-oversikt">{{$t('landing_page.banner.meet')}}</banner>
    <soon />
    <!-- <studentnode/> -->
    <description/>
    <banner img="systemvetardagen-nod">{{ $t('landing_page.banner.nod') }}</banner>
    <oldCatalog />
    <!-- <Button title="See Map" link="map"/> -->
    <!-- <contact /> -->
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
import slogan from "@/components/subViews/landing/slogan.vue"
import banner from "@/components/subViews/landing/banner.vue"
import description from "@/components/subViews/landing/description.vue"
export default {
  components: {
    hero,
    soon,
    info,
    faq,
    oldCatalog,
    contact,
    sponsors,
    slogan,
    banner,
    description
  },
  name: "IndexPage",
};
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
