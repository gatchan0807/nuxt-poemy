module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-poemy',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'For poemer SNS.'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'log'
  },
  /*
  ** PWA Config
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Poemy',
    lang: 'ja'
  },
  /*
  ** Include css not in components
  */
  css: [
    // node.js module but we specify the pre-processor
    {src: '@fortawesome/fontawesome-free-webfonts'},
    {src: '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'},
    {src: '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'},
    {src: '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'},
    {src: '~assets/main.scss', lang: 'scss'},
    {src: 'bulma/bulma.sass', lang: 'sass'},
  ],
}
