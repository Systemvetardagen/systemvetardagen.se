<template>
  <div class="sponsors">
    <div class="sponsor-content">
      <h2 style="color: var(--clr-blue-700)">{{ $t("sponsors") }}</h2>
      <h3>Coming soon...</h3>
    </div>
    <img src="@/assets/img/blobs/Blob-5-b.svg" alt="blob" class="blob" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "heroSection",
};
components: {
  Button;
}
</script>
<style>
.sponsors {
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 5%;
}

.sponsor-content {
  z-index: 100;
}

.blob {
  height: 30rem;
  position: absolute;
  z-index: 1;
  left: 0;
  transform: translateX(-50%);
}
</style>