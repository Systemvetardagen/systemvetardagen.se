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
    ref="contentContainer"
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
  import marked from "marked"

  export default {
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
      mounted() {
      // Watch for changes in sponsor_extra_text and set contentChanged to true
        this.$watch('post.sponsor_extra_text', () => {
          this.contentChanged = true;
        });
      },
      watch: {
        // Watch for changes in contentChanged and apply styles when true
        contentChanged: {
          handler() {
            this.$nextTick(() => {
              this.applyStyles();
              // Reset contentChanged after applying styles
              this.contentChanged = false;
            });
          },
          immediate: true,
        },
      },
    methods: {
      applyStyles() {
        // Access the DOM element using the ref
        const contentContainer = this.$refs.contentContainer;

        if (contentContainer) {
          // Apply styles to specific elements within the dynamically injected content
          const h1Elements = contentContainer.querySelectorAll('h1');
          const h2Elements = contentContainer.querySelectorAll('h2');
          const h3Elements = contentContainer.querySelectorAll('h3');
          const liElements = contentContainer.querySelectorAll('li');
          const ulElements = contentContainer.querySelectorAll('ul');
          const pElements = contentContainer.querySelectorAll('p')
          h1Elements.forEach((h1) => {
            h1.style.fontSize = '2rem';
            h1.style.margin = '1.5rem 0'
            // Add more styles or logic as needed
          });
          h2Elements.forEach((h2) => {
            h2.style.fontSize = '1.5rem';
            h2.style.marginTop = '1.5rem'
          });
          h3Elements.forEach((h3)=> {
            h3.style.fontSize = '1rem';
            h3.style.marginTop = '1rem';
            h3.style.marginBottom = '0'
          });
          liElements.forEach((li)=> {
            li.style.margin = '0.2rem 0'
          });
          ulElements.forEach((ul)=> {
            ul.style.paddingLeft = '2rem'
          });
          pElements.forEach((p)=> {
            p.style.margin = '0.2rem 0 0.7rem 0 '
          })
        }
      },
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

/* DESKTOP MODIFICATIONS */
@media only screen and (min-width: 768px) {
  .gallery {
    flex-direction: row;
  }
  
}

</style>
