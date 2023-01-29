<template>
  <div class="sponsors">
    <div class="sponsor-content">
      <h2 style="color: var(--clr-blue-700)">{{ $t("sponsors") }}</h2>
      <h3>Coming soon...</h3>
    </div>
    <Blob type="5-b" height="30rem" class="blobby-thing" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Blob from "@/components/Blob.vue";

export default {
  name: "heroSection",
};
components: {
  Button, Blob;
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

.blobby-thing {
  left: 0;
  transform: translateX(-50%);
}
</style>