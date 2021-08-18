export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MasterCraft-Resume-BE",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    "nuxt-buefy",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "MasterCraft Resume-BE",
      short_name: "MasterCraft",
      description: "Resume for MasterCraft",
      background_color: "#121212",
      lang: "en"
    },
    meta: {
      name: "MasterCraft Resume-BE",
      author: "MasterCraft",
      description: "Resume for MasterCraft",
      theme_color: "#121212",
      nativeUI: true,
      appleStatusBarStyle: "black-translucent",
      mobileApp: true,
      mobileAppIOS: true
    }
  },

  serverMiddleware: {
    "/api": "~/server"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
