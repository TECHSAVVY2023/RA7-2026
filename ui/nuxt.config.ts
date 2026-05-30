// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  srcDir: 'app/',
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4' }
      ]
    }
  }
})
