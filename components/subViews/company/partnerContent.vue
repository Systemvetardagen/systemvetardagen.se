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
    <markdownArea
      v-if="post.sponsor_extra_text"
      :htmlContent="markdownToHtml"
      class="extra-text"
    ></markdownArea>
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
  import marked from "marked"
  import markdownArea from "./markdownArea.vue"

  export default {
      components: {
        markdownArea
      },
      props: {
          post: Object
      },
      data() {
        return {
          contentChanged: false,
        }
      },
      computed: {
        markdownToHtml() {
          return marked.parse(this.post.sponsor_extra_text);
        },
      },
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
  gap: 0.5rem;
  margin-top: 2rem;

}
.gallery .column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 520px) {
  .gallery {
    flex-direction: row;
    gap: 1rem;

  }

}

</style>
