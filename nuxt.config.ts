// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-05-14',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
  ],

  // Self-host fonts at build time → zero external font requests at runtime
  googleFonts: {
    families: {
      'Inter Tight': [300, 400, 500, 600],
      'Instrument Serif': { ital: [400] },
      'JetBrains Mono': [400, 500],
    },
    display: 'swap',
    download: true,
    preconnect: false, // not needed when self-hosted
  },

  site: {
    url: 'https://devendrainfotech.github.io',
    name: 'Devendra Yadav — Full-stack JavaScript Developer',
  },

  sitemap: {
    hostname: 'https://devendrainfotech.github.io',
  },

  css: ['~/assets/css/main.css'],

  app: {
    // User/org GitHub Pages → base is always /
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Inline script to set theme before paint → prevents FOUC
      script: [
        {
          innerHTML: `
            (function(){
              var t = localStorage.getItem('dy-theme') || 'dark';
              document.documentElement.setAttribute('data-theme', t);
              document.documentElement.setAttribute('data-hero', 'classic');
            })();
          `,
          type: 'text/javascript',
        },
      ],
    },
  },

  nitro: {
    preset: 'github-pages',
  },

  experimental: {
    // Don't extract payload for purely static site — saves a fetch
    payloadExtraction: false,
  },
})
