<template>
  <div
    class="logo-wrapper"
    :class="{sponsor: company.sponsor}"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <img
      v-if="company.logo"
      class="logo"
      :class="{scaleUpCenter: isHovered, scaleDownCenter: mouseLeft}"
      :src="this.company.logo"
      alt=""
      ref="logoImage"
    />
    <h3 v-else>{{ company.title ? company.title : company.company_name }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    company: Object,
  },
  data() {
    return {
      isHovered: false,
      mouseLeft: false
    };
  },
  methods: {
    // Doesn't work in production
    ImageLink(cmsImg) {
      const link = "/_nuxt/assets" + cmsImg;
      console.log(link);
      return link;
    },
    handleMouseEnter() {
      this.isHovered = true;
      console.log("Mouse entering!")
      this.mouseLeft = false;
    },
    handleMouseLeave() {
      this.isHovered = false;
      this.mouseLeft = true;
      console.log("Out")
    }
  },
};

const animationEndSize = 1.1;
</script>
<style scoped>
h3 {
  color: var(--clr-blue-900);
}

.logo-wrapper {
  width: 15rem;
  height: 7rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: var(--clr-white);
  border-radius: 1rem;
  box-shadow: 0px 2px 5px 0px rgba(128, 128, 128, 0.10), 0px 10px 10px 0px rgba(128, 128, 128, 0.09), 0px 22px 13px 0px rgba(128, 128, 128, 0.05), 0px 39px 16px 0px rgba(128, 128, 128, 0.01), 0px 61px 17px 0px rgba(128, 128, 128, 0.00);
}

.logo {
  width: 80%;
  object-fit: contain;
  max-height: 100%;
  opacity: 0.9;
}

.logo-wrapper:hover * {
  opacity: 1;
}

.scaleUpCenter {
  -webkit-animation: scale-up-center 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  animation: scale-up-center 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}

.scaleDownCenter {
  -webkit-animation: scale-down-center 0.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
          animation: scale-down-center 0.4s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}

@-webkit-keyframes scale-down-center {
  0% {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-down-center {
  0% {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }
}


@media (min-width: 768px) {
  .logo-wrapper {
    width: 15rem;
    height: 9rem;
    padding: 1.2rem;
  }

  .logo {
    width: 90%;
  }

  .sponsor {
    width: 20rem;
    height: 12rem;
  }
}

</style>
