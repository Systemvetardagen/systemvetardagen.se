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
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "@/static/favicon.ico" },
      // Font import for 'Proxima Nova' from Adobe Fonts
      { rel: "stylesheet", href: "https://use.typekit.net/qny1lac.css" },
    ],
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
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
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

  // Collection of anonymous telemetry data about general usage: https://github.com/nuxt/telemetry
  telemetry: false,
};
