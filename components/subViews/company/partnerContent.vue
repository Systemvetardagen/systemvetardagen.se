<template>
    <div class="partnercontent">

  
    <!-- YOUTUBE VIDEO -->
    <div v-if="post.sponsor_youtube_video" class="video">
        <iframe
            class="yt-video"
            :src="this.post.sponsor_youtube_video"
            frameborder="0"
            allowfullscreen
        >
        </iframe>
    </div>
    <!-- END YOUTUBE VIDEO -->
    <div
    v-if="post.sponsor_extra_text"
    v-html="markdownToHtml"
    class="extra-text"
    ></div>
    <!-- SPONSOR IMAGES // GALLERY -->
    <div v-if="post.sponsor_images" class="gallery">
    <div class="column">
        <div v-if="post.sponsor_images[0]" class="gallery-item">
        <img
            :src="this.post.sponsor_images[0]"
            alt="gallery image 1"
            class="gallery-img"
        />
        </div>
    </div>
    <div class="column">
        <div v-if="post.sponsor_images[1]" class="gallery-item">
        <img
            :src="this.post.sponsor_images[1]"
            alt="gallery image 2"
            class="gallery-img"
        />
        </div>
        <div v-if="post.sponsor_images[2]" class="gallery-item">
        <img
            :src="this.post.sponsor_images[2]"
            alt="gallery image 3"
            class="gallery-img"
        />
        </div>
    </div>
    </div>
    <!-- END SPONSOR IMAGES // GALLERY -->
    </div>
</template>

<script>
    export default {
        props: {
            post: Object
        }
    }

</script>

<style scoped>
    
.extra-text {
  margin-top: 4rem;
}

/* YouTube Video */
.video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  align-self: center;
}
.yt-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* SPONSOR IMAGES // GALLERY */
img {
  width: 100%;
  height: auto;
}
.gallery {
  /* Mobile first */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 4rem 0;
}
.gallery .column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.gallery-img {
  border-radius: 10px;
}
.image-item img {
  width: 100%;
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
}

</style>
