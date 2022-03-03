
export default {
  server: {
    host:"0.0.0.0",
    port: 8080 // default: 3000
  },
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{rel : "stylesheet", href: "https://cdn.jsdelivr.net/npm/@ajusa/lit@latest/dist/lit.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  plugins:[{src : "~/plugins/aos",ssr:false} ],
  css :["aos/dist/aos.css"]
}
