import en from "./locales/en.json";
import sv from "./locales/sv.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "systemvetardagen",
    htmlAttrs: {
      lang: "sv",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {name:"msapplication-TileColor", content:"#da532c"},
      {name:"theme-color", content:"#ffffff"},
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "@/static/favicon.ico" },
      { rel:"apple-touch-icon", sizes:"180x180", href:"@assets/img/favicon/apple-touch-icon.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"@assets/img/favicon/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"@assets/img/favicon/favicon-16x16.png"},
      {rel:"manifest", href:"@assets/img/favicon/site.webmanifest"},
      {rel:"mask-icon", href:"@assets/img/favicon/safari-pinned-tab.svg", color:"#c91ed6"},
      // Font import for 'Proxima Nova' from Adobe Fonts
      { rel: "stylesheet", href: "https://use.typekit.net/qny1lac.css" },
    ],
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ]
  },

  server: {
    host: "localhost"
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
  modules: ["@nuxtjs/i18n", "@nuxtjs/content"],
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
    dir: 'content'
  },

  // Collection of anonymous telemetry data about general usage: https://github.com/nuxt/telemetry
  telemetry: false,
};
