import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app/',
  future: { compatibilityVersion: 4 },
  modules: ['@nuxt/eslint'],
  eslint: { config: { standalone: true } },

  // Add this section:
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  css: ['~/assets/css/main.css']
})