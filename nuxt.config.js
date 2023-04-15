import en from "./locales/en.json";
import sv from "./locales/sv.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Systemvetardagen 2023",
    htmlAttrs: {
      lang: "sv",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      {
        name: "msapplication-TileImage",
        content: "../assets/img/uploads/ms-icon-144x144.png",
      },
      { name: "theme-color", content: "#ffffff" },
      {
        name: "description",
        content:
          "För 27:e året i rad arrangeras Systemvetardagen på Stockholms universitet, Sveriges största arbetsmarknadsdag för studenter och arbetsgivare inom IT-branschen!",
      },

      // METADATA

      // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.systemvetardagen.se/" },
      { property: "og:title", content: "Systemvetardagen 2023" },
      {
        property: "og:description",
        content:
          "För 27:e året i rad arrangeras Systemvetardagen på Stockholms universitet, en av Sveriges största arbetsmarknadsdagar för studenter och arbetsgivare inom IT-branschen!",
      },
      { property: "og:image", content: "/meta-image.jpg" },

      // Twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://www.systemvetardagen.se/" },
      { property: "twitter:title", content: "Systemvetardagen 2023" },
      {
        property: "twitter:description",
        content:
          "För 27:e året i rad arrangeras Systemvetardagen på Stockholms universitet, en av Sveriges största arbetsmarknadsdagar för studenter och arbetsgivare inom IT-branschen!",
      },
      {
        property: "twitter:image",
        content: "/meta-image.jpg",
      },
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "@/static/favicon.ico" },
      {
        rel: "favicon",
        sizes: "57x57",
        href: "../assets/img/uploads/apple-icon-57x57.png",
      },
      {
        rel: "favicon",
        sizes: "60x60",
        href: "../assets/img/uploads/apple-icon-60x60.png",
      },
      {
        rel: "favicon",
        sizes: "72x72",
        href: "../assets/img/uploads/apple-icon-72x72.png",
      },
      {
        rel: "favicon",
        sizes: "76x76",
        href: "../assets/img/uploads/apple-icon-76x76.png",
      },
      {
        rel: "favicon",
        sizes: "114x114",
        href: "../assets/img/uploads/apple-icon-114x114.png",
      },
      {
        rel: "favicon",
        sizes: "120x120",
        href: "../assets/img/uploads/apple-icon-120x120.png",
      },
      {
        rel: "favicon",
        sizes: "144x144",
        href: "../assets/img/uploads/apple-icon-144x144.png",
      },
      {
        rel: "favicon",
        sizes: "152x152",
        href: "../assets/img/uploads/apple-icon-152x152.png",
      },
      {
        rel: "favicon",
        sizes: "180x180",
        href: "../assets/img/uploads/apple-icon-180x180.png",
      },
      {
        rel: "favicon",
        type: "image/png",
        sizes: "192x192",
        href: "../assets/img/uploads/android-icon-192x192.png",
      },
      {
        rel: "favicon",
        type: "image/png",
        sizes: "32x32",
        href: "../assets/img/uploads/favicon-32x32.png",
      },
      {
        rel: "favicon",
        type: "image/png",
        sizes: "96x96",
        href: "../assets/img/uploads/favicon-96x96.png",
      },
      {
        rel: "favicon",
        type: "image/png",
        sizes: "16x16",
        href: "../assets/img/uploads/favicon-16x16.png",
      },
      { rel: "manifest", href: "../assets/img/uploads/manifest.json" },

      // Font import for 'Proxima Nova' from Adobe Fonts
      { rel: "stylesheet", href: "https://use.typekit.net/qny1lac.css" },

      { rel: "preload", href: "@/assets/fonts/Overpass-Black.ttf", as: "font" },
      {
        rel: "preload",
        href: "@/assets/fonts/WorkSans-Regular.ttf",
        as: "font",
      },
    ],
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  },

  server: {
    host: "localhost",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/content", "@nuxt/image"],
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "sv",
    vueI18n: {
      fallbackLocale: "sv",
      messages: { en, sv },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  content: {
    dir: "content",
  },

  // Collection of anonymous telemetry data about general usage: https://github.com/nuxt/telemetry
  telemetry: false,

  image: {
    dir: 'assets'
  }
};
