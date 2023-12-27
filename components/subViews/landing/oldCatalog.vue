<!-- This subview used to contain the link to the old catalog pdf (2022). It was repurposed to link to the current (2023) catalog -->
<template>
  <section id="catalog" class="catalog">


    <div class="catalog-content">

      <!-- (inacurate) CATALOG SCREENSHOT -->
      <img
        class="catalog-image"
        src="@/assets/img/catalog_image.jpg"
        alt="Old Catalog Placeholder"
      />

      <!-- CATALOG TEXT -->
      <div class="catalog-text">
        <h2 style="color: var(--clr-blue-600)">{{ $t("old_cat_title") }}</h2>
        <p>{{ $t("old_cat_description") }}</p>
        <Button :link="localePath('/catalog')">{{ $t("old_cat_btn") }}</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "oldCatalog",

  components: {
    Button,
  },
  data() {
    return {
      // the i18n translation variable
      translation: this.$t("the_fair"),
    };
  },
};
</script>
    
<style scoped>

/* CATALOG CONTENT */
.catalog-content {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 3rem;
}

.catalog-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.catalog-image {
  width: 16rem;
  border-radius: 2rem;
}

.catalog p {
  max-width: 50ch;
}

/* MEDIA QUERRY */
@media (min-width: 1024px) {
  .catalog-content {
    flex-direction: row;
    align-items: center;
  }
}
</style>
