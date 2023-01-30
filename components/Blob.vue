<template>
  <div class="blob" :style="height">
    <img
      :type="type"
      :height="height"
      :style="'height: ' + height"
      :src="require('@/assets/img/blobs/Blob-' + type + '.svg')"
      alt="blob"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    height: String,
  },
};
</script>

<style scoped>
.blob {
  height: 30rem;
  position: absolute;
  z-index: 1;
}
</style>