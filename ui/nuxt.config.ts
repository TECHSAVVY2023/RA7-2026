import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

// Silences known third-party rollup warnings during production builds:
// - SOURCEMAP_BROKEN from @tailwindcss/vite (tailwindlabs/tailwindcss#19930,
//   fixed in PR #20103 but not yet released as of @tailwindcss/vite 4.3.0)
// - SOURCEMAP_BROKEN from nuxt:module-preload-polyfill (same root cause)
// - INVALID_ANNOTATION coming from inside node_modules (e.g. @vueuse/core)
// Composes safely with any existing rollup onwarn installed by Nuxt/Nitro.
function silenceKnownBuildWarnings(): Plugin {
  return {
    name: 'silence-known-build-warnings',
    apply: 'build',
    configResolved(config) {
      const previousOnWarn = config.build.rollupOptions.onwarn
      config.build.rollupOptions.onwarn = (warning, warn) => {
        const isTailwindSourcemap =
          warning.code === 'SOURCEMAP_BROKEN' &&
          warning.plugin === '@tailwindcss/vite:generate:build'
        const isNuxtPolyfillSourcemap =
          warning.code === 'SOURCEMAP_BROKEN' &&
          warning.plugin === 'nuxt:module-preload-polyfill'
        const isVendorPureAnnotation =
          warning.code === 'INVALID_ANNOTATION' &&
          (warning.id ?? '').includes('/node_modules/')
        if (isTailwindSourcemap || isNuxtPolyfillSourcemap || isVendorPureAnnotation) {
          return
        }
        if (previousOnWarn) {
          previousOnWarn(warning, warn)
        } else {
          warn(warning)
        }
      }
    },
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/eslint', '@nuxt/icon','motion-v/nuxt'],
  eslint: { config: { standalone: true } },

  vite: {
    plugins: [
      tailwindcss(),
      silenceKnownBuildWarnings(),
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