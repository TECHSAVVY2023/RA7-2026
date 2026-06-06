import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app/',
  future: { compatibilityVersion: 4 },
  modules: ['@nuxt/eslint', '@nuxt/icon','motion-v/nuxt'],
  eslint: { config: { standalone: true } },

  // Add this section:
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  },
  // Runtime config for API
  runtimeConfig: {
    // Public keys (exposed to client)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    }
  },
  css: ['~/assets/css/main.css']
})